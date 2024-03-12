import Header from "@/app/ui/Header";
import Main from "@/app/ui/Main";
import { Sidebar } from "@/app/ui/works/Sidebar";
import { fetchWorks } from "@/server/pages/works";

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
  };
  workCats();
  return (
    <>
      <Header subMenu={links} transparent border />
      <Main className='flex'>
        <Sidebar data={urlData} />
        <div className='w-full md:pl-[250px]'>{children}</div>
      </Main>
    </>
  );
}
