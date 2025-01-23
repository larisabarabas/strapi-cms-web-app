

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-hidden">
    {children}
    </main>
  );
}
