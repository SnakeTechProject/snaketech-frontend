import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const additionalDataDir = resolve(__dirname, './src/styles/variables');

const replaceDir = (dir) => dir.replace(/[\\]/g, '/');
const isWindows = () => process.platform.includes('win');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${
          isWindows() ? replaceDir(additionalDataDir) : additionalDataDir
        }";`,
      },
    },
  },
});
