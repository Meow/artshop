import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['safari12', 'chrome67', 'firefox67'],
  },
  plugins: [react()],
});
