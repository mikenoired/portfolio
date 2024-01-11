import { db } from "@/app/lib/utils";
import Link from "next/link";

export default async function List() {
  const qnas = await db.answerBlock.findMany();
  return (
    <div className='md:w-[700px] w-full px-4'>
      {qnas.map((block, index) => (
        <div key={index} className='flex p-5 border justify-between mb-5'>
          <div className='max-w-fit'>{block.title}</div>
          <div className='flex'>
            <div className='pl-4 cursor-pointer'>
              Delete
            </div>
            <div className='pl-4 cursor-pointer'>
              Edit
            </div>
          </div>
        </div>
      ))}
      <Link
        href='qna/new'
        className='flex p-5 border justify-center hover:bg-white hover:text-black'
      >
        Add new
      </Link>
    </div>
  );
}
