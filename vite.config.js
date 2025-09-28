import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/shoppingreact",
  base: "/https://github.com/babaluis/e-plantShopping.git",
  plugins: [react()],
})
