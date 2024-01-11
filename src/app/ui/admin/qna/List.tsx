import { db } from "@/app/lib/utils";
import Link from "next/link";

export default async function List() {
  const qnas = await db.answerBlock.findMany();
  return (
    <div className='md:w-[700px] w-full px-4'>
      {qnas.map((block, index) => (
        <div key={index} className='flex p-5 border justify-between mb-5'>
          <div className='max-w-fit'>{block.title}</div>
          <div>
            <Link className='pl-4' href='#'>
              Delete
            </Link>
            <Link className='pl-4' href='#'>
              Edit
            </Link>
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
