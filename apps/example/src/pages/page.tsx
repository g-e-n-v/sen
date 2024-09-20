import { sum } from "@genv/sen";

export default function HomePage() {
  const a = sum(3, 4);

  return <div>HomePage {a}</div>;
}
