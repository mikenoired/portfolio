import { fetchQNA } from "@/app/server/pages/QNA";
import { fetchWorks } from "@/app/server/pages/works";
import { Header } from "@/app/ui/header";
import { Block } from "@/app/ui/qna/block";

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
      <Header subMenu={links} transparent={false} />
      <main className='md:pt-12 pt-10 flex flex-col items-center'>
        <div className='masonry sm:masonry md:masonry-sm pt-8 md:max-w-[1050px] pl-4 pr-4'>
          {blocks.map((block, index) => (
            <Block key={index} data={block} />
          ))}
        </div>
      </main>
    </>
  );
}
