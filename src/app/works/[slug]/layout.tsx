import { fetchWorks } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";
import { Sidebar } from "@/app/ui/works/sidebar";

export default async function SlugPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const urlData = await fetchWorks();
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-12 pt-10 flex'>
        <Sidebar data={urlData} />
        <div className='md:pl-[250px] w-full'>{children}</div>
      </main>
    </>
  );
}
