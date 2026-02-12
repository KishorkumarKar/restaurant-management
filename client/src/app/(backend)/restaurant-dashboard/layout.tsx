export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <div>Restaurant</div>
      {children}
    </section>
  );
}