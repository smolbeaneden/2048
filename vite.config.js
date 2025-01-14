import { defineConfig } from "vite";
import react from "install @vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/2048",
});
