import { REGEX_ERROR, REGEX_LAYOUT, REGEX_PAGE } from "@/constants/regex.constant";
import { LazyModule, Module, RawRoute } from "@/types/sen.type";
import { formatSegment } from "@/utils/format-segment.util";
import { formatPath } from "@/utils/format-path.util";

type BuildRouteArgs = [path: string, fileModule: LazyModule];

const MODULES = {
  ...import.meta.glob<Module>("/src/pages/**/(page|layout|not-found|error).{tsx,jsx}"),
};

export function genRawRoute(): RawRoute {
  const rawRoute: RawRoute = {
    segment: "",
    path: "/",
  };

  const normalizedPath: Record<string, boolean> = {};

  const buildRoute = ([path, fileModule]: BuildRouteArgs) => {
    if (path.match(REGEX_PAGE)) {
      const finalPath = formatPath(path);

      console.log(finalPath);

      if (normalizedPath[finalPath]) {
        throw new Error(`@genv/sen: route "${finalPath}" is duplicated`);
      }

      normalizedPath[finalPath] = true;
    }

    const slicedPath = path.slice("/src/pages".length, path.lastIndexOf("/"));
    const segments = slicedPath === "/" ? [""] : slicedPath.split("/");

    segments.reduce((currentRoute, _segment, idx) => {
      if (idx === segments.length - 1) {
        path.match(REGEX_PAGE) && (currentRoute.page = fileModule);
        path.match(REGEX_LAYOUT) && (currentRoute.layout = fileModule);
        path.match(REGEX_ERROR) && (currentRoute.error = fileModule);

        return currentRoute;
      }

      const nextSegment = segments[idx + 1];
      const existRoute = currentRoute.children?.find((route) => route.segment === nextSegment);
      if (existRoute) {
        return existRoute;
      }

      const newRoute: RawRoute = {
        segment: nextSegment,
        path: formatSegment(nextSegment),
      };

      (currentRoute.children ??= []).push(newRoute);

      return newRoute;
    }, rawRoute);
  };

  Object.entries(MODULES).forEach(buildRoute);

  return rawRoute;
}
