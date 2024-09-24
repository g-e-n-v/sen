import { PropsWithChildren } from "react";

import { Container } from "@/components/container";
import { SideBar } from "@/components/sidebar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen p-4">
      <Container className="size-full flex gap-4" label="RootLayout">
        <Container className="border-pink-500 border-solid">
          <SideBar className="w-80" />
        </Container>

        <Container className="border-pink-500 grow border-solid">
          <main>{children}</main>
        </Container>
      </Container>
    </div>
  );
}
