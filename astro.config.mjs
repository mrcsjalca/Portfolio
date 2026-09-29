import { defineConfig } from 'astro/config';

// ============================================================================
// CONFIGURACIÓN DE ASTRO PARA INFINITYFREE
// ============================================================================
export default defineConfig({
  site: 'http://marcosjalca.fwh.is',
  i18n: {
    locales: ["es", "ca", "en"],
    defaultLocale: "es",
  },
});
