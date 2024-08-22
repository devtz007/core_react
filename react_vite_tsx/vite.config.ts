import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias for the src folder
    },
    extensions: ['.js', '.css', '.scss', '.json', 'ts', 'tsx'], // Extensions to resolve
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory
  },
  server: {
    port: 3002,
    proxy: {
      '/json': {
        target: 'http://localhost:3333',
        rewrite: (path) => path.replace(/^\/json/, '/'), // Rewrite '/json' to '/'
        changeOrigin: true,
        secure: true,
      },
    },
    fs: {
      allow: [
        path.resolve(__dirname, 'public'), // Serve static files
        path.resolve(__dirname, './src'), // Allow access to src directory
      ],
    },
  },
});
