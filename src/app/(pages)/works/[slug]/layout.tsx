import { fetchWorks } from "@/server/pages/works";
import { Header } from "@/app/ui/Header";
import { Sidebar } from "@/app/ui/works/Sidebar";
import Main from "@/app/ui/Main";

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
      <Main className="flex">
        <Sidebar data={urlData} />
        <div className="w-full md:pl-[250px]">{children}</div>
      </Main>
    </>
  );
}
