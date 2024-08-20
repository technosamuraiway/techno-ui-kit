import * as path from 'path'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import { dependencies, devDependencies } from './package.json'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'techno-ui-kit',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      // output: { dir: 'dist', entryFileNames: '[name].js', format: 'es' },
    },
    target: 'esnext',
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
