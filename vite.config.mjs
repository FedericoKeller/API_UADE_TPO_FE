import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    base: './',
    server: {
      port: 3000,
    },
    plugins: [
      react(), 
      tsconfigPaths(),
      svgr(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.mjs',
    },
    optimizeDeps: { exclude: ['fsevents'] },
})