import BackendCommonComponentsSidebar from "@/features/backend/common/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <>
        <BackendCommonComponentsSidebar />
        {children}
      </>
    </section>
  );
}
