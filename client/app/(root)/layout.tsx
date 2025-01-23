
export default function Layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <main className="overflow-hidden">
    {children}
    </main>
  );
}
