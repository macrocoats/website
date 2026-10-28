import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
      },
      output: {
        // Function form: React 19 ships CJS, and the object form leaves an empty
        // "react" chunk with React itself bundled into the app entry.
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react';
          if (/node_modules\/(react-router|react-router-dom|cookie|set-cookie-parser)\//.test(id)) return 'router';
        },
      },
    },
  },
});
