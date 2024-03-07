import { fetchQNA } from "@/server/pages/QNA";
import { fetchWorks } from "@/server/pages/works";
import { Header } from "@/app/ui/Header";
import { Block } from "@/app/ui/qna/Block";
import Main from "@/app/ui/Main";

export default async function Page() {
  const blocks = await fetchQNA();
  const fetchWorksCats = await fetchWorks();
  let links: { title: string; url: string }[] = [];
  const workCats = () => {
    fetchWorksCats.map((cat) => {
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
      <Main className="flex flex-col items-center">
        <div className="masonry sm:masonry md:masonry-sm pl-4 pr-4 pt-8 md:max-w-[1050px]">
          {blocks.map((block, index) => (
            <Block key={index} data={block} />
          ))}
        </div>
      </Main>
    </>
  );
}
