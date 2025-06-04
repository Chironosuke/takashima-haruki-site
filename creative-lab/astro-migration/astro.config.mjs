import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Tailwind設定ファイルの場所を指定
      configFile: "./tailwind.config.cjs",
      // Astroコンポーネント内でのTailwindの適用を有効化
      applyBaseStyles: true,
    }),
  ],
  // 出力設定
  output: "static",
  // 開発時はbase URLを設定しない
  // base: "/creative-lab",
  // サイト設定
  site: "https://takashimaharuki.jp",
});
