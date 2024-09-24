import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RawRoute } from "@/types/sen.type";
import { Suspense, createElement, lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";

export function genReactRoute(rawRoute: RawRoute): RouteObject {
  const { path, page, layout, error, loading, children = [] } = rawRoute;

  let element: JSX.Element = createElement(Outlet);

  element = createElement(Suspense, loading && { fallback: createElement(lazy(loading)) }, element);

  if (error) {
    element = createElement(ErrorBoundary, { Fallback: lazy(error) as any }, element);
  }

  if (layout) {
    element = createElement(lazy(layout), {}, element);
  }

  const routeObject: RouteObject = {
    path,
    element,
    children: [{ index: true, element: createElement(lazy(page)) }, ...children.map(genReactRoute)],
  };

  return routeObject;
}
