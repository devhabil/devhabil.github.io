import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://devhabil.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});