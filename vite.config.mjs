import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
      define: {
        'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL)
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
    }
});