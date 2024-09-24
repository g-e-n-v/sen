import { Container } from "@/components/container";

type AuthErrorProps = {
  error: Error;
};

export default function AuthError({ error }: AuthErrorProps) {
  return (
    <Container label="AuthError">
      <div className="bg-red-200 p-2 rounded text-sm">{error?.message}</div>
    </Container>
  );
}
