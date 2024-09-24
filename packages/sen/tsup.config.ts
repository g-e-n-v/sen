import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts", "src/plugin.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ["react"],
});
