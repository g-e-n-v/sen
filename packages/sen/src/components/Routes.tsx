import { genRawRoute } from "@/utils/gen-raw-routes.util";
import { genReactRoute } from "@/utils/gen-react-routes.util";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const rawRoute = genRawRoute();
const route = genReactRoute(rawRoute);

export function SenRoutes() {
  return (
    <Suspense>
      <RouterProvider router={createBrowserRouter([route])} />
    </Suspense>
  );
}
