export function formatPath(path: string) {
  return (
    path
      .slice("/src/pages".length, -"/page.*sx".length)
      .replace(/\((.*)\)/g, "")
      .replace(/\[(.*)\]/g, ":$1")
      .replace(/\/\//g, "/")
      .replace(/\/$/, "") || "/"
  );
}
