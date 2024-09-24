import { ComponentType, PropsWithChildren } from "react";

type BaseModule<P = {}> = { default: ComponentType<P> };

// export type Module = PageModule | LayoutModule | ErrorModule | NotFoundModule;
export type Module = BaseModule;
export type LazyModule = () => Promise<Module>;

export type RawRoute = {
  segment: string;
  path: string;
  layout?: LazyModule;
  page?: LazyModule;
  error?: LazyModule;
  notFound?: LazyModule;
  loading?: LazyModule;
  children?: RawRoute[];
};
