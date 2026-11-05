import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// './' makes every asset path relative, so the site works from
// https://<user>.github.io/<repo>/ and when opened locally.
export default defineConfig({
  plugins: [react()],
  base: './',
});
