import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Luxury-hotel",  // 🔥 Ajoute le chemin correct ici
});
