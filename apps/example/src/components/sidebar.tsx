import { genRawRoute } from "@genv/sen";

import { cn } from "@/utils/cn.util";

import { SidebarItem } from "./sidebar-item";

type SideBarProps = {
  className?: string;
};

const RAW_ROUTES = genRawRoute();

export function SideBar({ className }: SideBarProps) {
  return (
    <aside className={cn("flex flex-col gap-1 text-sm", className)}>
      <SidebarItem route={RAW_ROUTES} previousPath="" />
    </aside>
  );
}
