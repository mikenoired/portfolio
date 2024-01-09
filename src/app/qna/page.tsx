import { Header } from "@/app/ui/header";

export default async function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-12'>
        <h1>Q/A</h1>
      </main>
    </>
  );
}
