import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about.html',
        services: 'services.html',
        pricing: 'pricing.html',
        contact: 'contact.html',
      },
    },
  },
});
