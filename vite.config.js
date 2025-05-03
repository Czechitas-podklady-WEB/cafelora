import { czechitasRenderVitePlugin } from '@czechitas/render/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/pages',
  publicDir: '../../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    target: 'es2022',
    inputGlobPatterns: ['src/pages/**/*.html'],
    modulePreload: {
      resolveDependencies: false,
    },
  },
  plugins: [czechitasRenderVitePlugin()],
});
