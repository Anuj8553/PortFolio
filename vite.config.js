import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/PortFolio/",  // 👈 Set this to your repo name with a leading slash
});
