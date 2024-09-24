const source = import.meta.url;

export default function HomePage() {
  return (
    <div>
      <div className="p-1">{source}</div>
    </div>
  );
}
