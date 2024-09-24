import { PropsWithChildren } from "react";

import { Container } from "@/components/container";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Container label="AuthLayout" className="border-amber-500">
      {children}
    </Container>
  );
}
