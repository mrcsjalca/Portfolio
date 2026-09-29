// ============================================================================
// SCRIPT DE DESPLIEGUE AUTOMÁTICO A INFINITYFREE
// ============================================================================
import * as ftp from 'basic-ftp';
import readline from 'node:readline';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Configuración de tu cuenta de InfinityFree
const FTP_HOST = 'ftpupload.net';
const FTP_USER = 'if0_43026416';
const DOMAIN = 'marcosjalca.fwh.is';
const LOCAL_DIR = path.resolve('dist');

/**
 * Función para solicitar la contraseña por consola de forma segura (oculta/enmascarada)
 */
function askPassword(query) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    process.stdout.write(query);

    // Si el terminal soporta setRawMode, ocultamos los caracteres tecleados
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
      let password = '';
      process.stdin.resume();

      process.stdin.on('data', function onData(char) {
        char = char.toString();
        if (char === '\n' || char === '\r' || char === '\u0004') {
          process.stdin.setRawMode(false);
          process.stdin.pause();
          process.stdin.removeListener('data', onData);
          process.stdout.write('\n');
          rl.close();
          resolve(password.trim());
        } else if (char === '\u0003') {
          // Ctrl+C para salir
          process.stdout.write('\nOperación cancelada.\n');
          process.exit(1);
        } else if (char === '\u0008' || char === '\x7f') {
          // Retroceso (Backspace)
          if (password.length > 0) {
            password = password.slice(0, -1);
            process.stdout.write('\b \b');
          }
        } else {
          password += char;
          process.stdout.write('*');
        }
      });
    } else {
      // Si no es un TTY interactivo normal
      rl.question('', (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    }
  });
}

async function deploy() {
  console.log('\n🚀 INICIANDO DESPLIEGUE A INFINITYFREE');
  console.log('--------------------------------------------------');
  console.log(`🌐 Dominio:  http://${DOMAIN}`);
  console.log(`👤 Usuario:  ${FTP_USER}`);
  console.log(`🖥️  Servidor: ${FTP_HOST}`);
  console.log('--------------------------------------------------\n');

  if (!existsSync(LOCAL_DIR)) {
    console.error('❌ Error: La carpeta "dist" no existe. Ejecuta primero "npm run build".');
    process.exit(1);
  }

  // Obtenemos la contraseña (por variable de entorno o preguntando al usuario)
  let password = process.env.FTP_PASSWORD;
  if (!password) {
    password = await askPassword('🔑 Introduce tu contraseña FTP de InfinityFree: ');
  }

  if (!password) {
    console.error('\n❌ No se ha introducido ninguna contraseña.');
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = false; // Cambiar a true si necesitas depurar la conexión

  try {
    console.log('\n⏳ Conectando con el servidor FTP de InfinityFree...');
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: password,
      secure: false, // InfinityFree usa FTP plano en el puerto 21
      port: 21,
    });
    console.log('✅ Conexión establecida correctamente.');

    // Determinamos la carpeta remota de destino
    // En InfinityFree puede ser '/htdocs' o '/marcosjalca.fwh.is/htdocs'
    let targetDir = 'htdocs';
    const rootList = await client.list();
    const domainFolder = rootList.find((item) => item.name === DOMAIN && item.isDirectory);

    if (domainFolder) {
      targetDir = `${DOMAIN}/htdocs`;
    }

    console.log(`📂 Carpeta de destino detectada: /${targetDir}`);

    // Eliminamos archivos de bienvenida por defecto que InfinityFree suele crear (default.html, index2.html)
    // para evitar que bloqueen el index.html de Astro
    try {
      const targetList = await client.list(targetDir);
      for (const file of targetList) {
        if (file.name === 'index2.html' || file.name === 'default.html') {
          console.log(`🧹 Eliminando archivo por defecto de InfinityFree: ${file.name}`);
          await client.remove(`${targetDir}/${file.name}`);
        }
      }
    } catch (e) {
      // Si la carpeta está recién creada, continuamos
    }

    // Subimos todos los archivos de dist/ a la carpeta htdocs
    console.log('📤 Subiendo archivos de producción (Astro + Estilos + Imágenes)...');
    await client.uploadFromDir(LOCAL_DIR, targetDir);

    console.log('\n==================================================');
    console.log('🎉 ¡DESPLIEGUE COMPLETADO CON ÉXITO!');
    console.log('==================================================');
    console.log(`✨ Tu portfolio ya está disponible en:`);
    console.log(`👉 http://${DOMAIN}`);
    console.log('==================================================\n');

  } catch (error) {
    console.error('\n❌ Error durante el despliegue FTP:', error.message || error);
    console.log('\n💡 Comprueba:');
    console.log('1. Que la contraseña de la cuenta de hosting (if0_43026416) sea la correcta.');
    console.log('2. Puedes ver tu contraseña en el panel de InfinityFree en la sección "FTP Details" -> Show/Hide.');
  } finally {
    client.close();
  }
}

deploy();
