// import { defineConfig } from "vite";
// import path from "path";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//         alias: [{ find: "@", replacement: path.resolve(new URL(".", import.meta.url).pathname, "src") }],
//     },
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
})
