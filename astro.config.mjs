import { defineConfig } from 'astro/config';

// ============================================================================
// CONFIGURACIÓN DE ASTRO PARA INFINITYFREE
// ============================================================================
export default defineConfig({
  site: "https://mrcsjalca.github.io",
  i18n: {
    locales: ["es", "ca", "en"],
    defaultLocale: "es",
  },
});
