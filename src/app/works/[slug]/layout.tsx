import { fetchWorks } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";
import { Sidebar } from "@/app/ui/works/sidebar";

export default async function SlugPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const urlData = await fetchWorks();
  let links: { title: string; url: string }[] = [];
  const workCats = () => {
    urlData.map((cat) => {
      links.push({
        title: cat.title,
        url: cat.url,
      });
    });
    console.log(links);
  };
  workCats();
  return (
    <>
      <Header subMenu={links} transparent={false} />
      <main className='md:pt-12 pt-10 flex'>
        <Sidebar data={urlData} />
        <div className='md:pl-[250px] w-full'>{children}</div>
      </main>
    </>
  );
}
