import { WorkCat } from "@/app/lib/definitions";
import { Header } from "@/app/ui/works/Header";
import Link from "next/link";

export default async function List({ works }: { works: WorkCat[] }) {
  return (
    <div className='md:w-[700px] w-full px-4'>
      {works.length !== 0 ? (
        works.map((block, index) => (
          <div key={index} className='relative flex items-center mb-5'>
            <Link
              href={`works/${block.url}/edit`}
              className='absolute z-[2] right-[20px] text-xl font-semibold'
            >
              Edit
            </Link>
            <Header title={block.title} thumb={block.thumbnail} />
          </div>
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
