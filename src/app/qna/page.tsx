import { Header } from "@/app/ui/header";
import { blocks } from "./data";
import { Block } from "@/app/ui/qna/block";

export default async function Page() {
  return (
    <>
      <Header transparent={false} />
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
