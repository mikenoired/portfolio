export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="absolute mt-10 h-screen w-screen overflow-y-scroll pb-10 md:mt-12 md:pb-12">
      {children}
    </main>
  );
}
