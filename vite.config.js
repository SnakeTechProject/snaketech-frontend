/*
Config antiga, estava dando erro de importação do scss, config atualizada pelo @cosmos no windows e revisada por min (murilo) no linux, necessita de revisão de outras pessoas/sistemas  (após isso esse comentarios pode ser excluido)
*/

import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const additionalDataDir = resolve(__dirname, './src/styles/variables');

const replaceDir = (dir) => dir.replace(/[\\]/g, '/');
const isWindows = () => process.platform.includes('win');

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
