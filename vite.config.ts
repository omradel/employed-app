import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "default",
    }),

    Pages({
      dirs: [
        // basic
        { dir: "src/pages", baseRoute: "" },
        // modules dir for pages (if you use modular structure)
        { dir: "src/modules/**/pages", baseRoute: "modules" },
      ],
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
