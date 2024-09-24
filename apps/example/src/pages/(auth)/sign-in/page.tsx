export default function SignInPage() {
  return (
    <div>
      <h2 className="mb-8">SignInPage</h2>
      {(window as unknown as { hello: () => JSX.Element }).hello()}
    </div>
  );
}
