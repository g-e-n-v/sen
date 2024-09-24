import { Plugin } from "vite";
import fs from "fs/promises";
import path from "path";

export function sen(): Plugin {
  return {
    name: "@genv/sen",
    enforce: "pre",
    configureServer: (server) => {
      const listener = (file = "") => {
        file.includes(path.normalize("/src/pages/")) && generateTypeSafeRouteFile();
      };

      server.watcher.on("add", listener);
      server.watcher.on("change", listener);
      server.watcher.on("unlink", listener);
    },
  };
}

async function generateTypeSafeRouteFile() {
  await fs.writeFile("./src/router.ts", `export { Link } from "@genv/sen";`);
}
