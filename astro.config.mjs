import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    locales: ["es", "ca", "en"],
    defaultLocale: "es",
  },
});
