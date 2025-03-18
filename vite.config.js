import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Base alias for src
            "@pages": path.resolve(__dirname, "./src/pages"), // Alias for pages folder
            "@components": path.resolve(__dirname, "./src/components"), // Alias for components (if exists)
        },
    },
});
