import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://devhabil.github.io',
  base: '/website-portofolio',
  vite: {
    plugins: [tailwindcss()]
  }
});