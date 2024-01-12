import prisma from '@/app/lib/utils';
import Link from "next/link";
import { DeleteQNA } from "../buttons";

export default async function List() {
  const qnas = await prisma.answerBlock.findMany();
  return (
    <div className='md:w-[700px] w-full px-4'>
      {qnas.length !== 0 ? qnas.map((block, index) => (
        <div key={index} className='flex p-5 border justify-between mb-5'>
          <div className='max-w-fit'>{block.title}</div>
          <div className='flex'>
            <DeleteQNA id={block.id} />
            <Link href={`qna/${block.id}/edit`} className='pl-4 cursor-pointer'>Edit</Link>
          </div>
        </div>
      )) : <div className='text-center text-2xl font-bold py-5'>There is no blocks :(</div>}
      <Link
        href='qna/new'
        className='flex p-5 border justify-center hover:bg-white hover:text-black'
      >
        Add new
      </Link>
    </div>
  );
}
