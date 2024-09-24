import { Link, RawRoute } from "@genv/sen";
import { useState } from "react";

import { cn } from "@/utils/cn.util";

import { IconError } from "./icon-error";
import { IconFolder } from "./icon-folder";
import { IconLayout } from "./icon-layout";
import { IconPage } from "./icon-page";
import { IconTriangle } from "./icon-triangle";

type SidebarItemProps = {
  route: RawRoute;
  previousPath: string;
};

export function SidebarItem({ route, previousPath }: SidebarItemProps) {
  const { path, segment, children, page, layout, error } = route;

  const href = `${previousPath}/${path}`.replace("//", "/");

  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-2 items-center py-1.5 text-neutral-800"
      >
        <IconTriangle
          className={cn("transition-all text-neutral-500", open ? "rotate-180" : "rotate-90")}
        />

        <IconFolder />

        <span>{segment || "src/pages"}</span>
      </button>

      {open && (
        <div className="pl-4">
          {children?.map((r) => <SidebarItem key={r.segment} route={r} previousPath={href} />)}

          {page && (
            <Link className="py-1.5 flex items-center gap-2 text-pink-400" to={href}>
              <IconPage />
              <span className="border-b border-dashed border-pink-500">page.tsx</span>
            </Link>
          )}

          {layout && (
            <div className="py-1.5 flex items-center gap-2 text-neutral-500">
              <IconLayout />
              <span>layout.tsx</span>
            </div>
          )}

          {error && (
            <div className="py-1.5 flex items-center gap-2 text-neutral-500">
              <IconError />
              <span>error.tsx</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
