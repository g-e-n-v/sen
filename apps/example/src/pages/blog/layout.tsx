import { PropsWithChildren } from "react";

import { Container } from "@/components/container";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <Container label="BlogLayout" className="border-green-500">
      {children}
    </Container>
  );
}
