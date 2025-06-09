import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    Components({
      dirs: ["src/components", "src/modules/**/components"],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.vue\.[tj]sx?\?vue/,
        /\.md$/,
      ],

      imports: [
        "vue",
        "vue-router",
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
        {
          from: "pinia",
          imports: ["defineStore", "storeToRefs"],
        },
      ],

      dirs: [
        "./src/stores",
        "./src/compasables/app",
        "./src/compasables/reusable",
      ],

      dts: "src/auto-imports.d.ts",
    }),

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
