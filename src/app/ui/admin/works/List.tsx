import prisma from "@/app/lib/utils";
import Link from "next/link";
import { Header } from "@/app/ui/works/Header";

export default async function List() {
  const works = await prisma.work.findMany();
  return (
    <div className='md:w-[700px] w-full px-4'>
      {works.length !== 0 ? (
        works.map((block, index) => (
          <Header key={index} title={block.title} thumb={block.thumbnail} />
        ))
      ) : (
        <div className='text-center text-2xl font-bold py-5'>
          There is no works :(
        </div>
      )}
      <Link
        href='works/new'
        className='flex p-5 border justify-center hover:bg-white hover:text-black'
      >
        Add new work category
      </Link>
    </div>
  );
}
