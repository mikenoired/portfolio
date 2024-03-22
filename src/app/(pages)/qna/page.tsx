import Header from "@/app/ui/Header";
import Main from "@/app/ui/Main";
import { Block } from "@/app/ui/qna/Block";
import { fetchQNA } from "@/server/pages/QNA";

export default async function Page() {
  const blocks = await fetchQNA();
  return (
    <>
      <Header border />
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
