"use client";

import { WorkCat } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import { Header } from "@/app/ui/works/Header";
import Link from "next/link";

export default function List({ works }: { works: WorkCat[] }) {
  return (
    <div className='md:w-[700px] w-full px-4'>
      {works.length !== 0 ? (
        works.map((block, index) => (
          <Link
            href={`works/${block.url}/edit`}
            key={index}
            className='relative flex items-center mb-5'
          >
            <div className='absolute z-[2] right-[20px] text-xl font-semibold'>
              <Icon
                className='-mt-[3px]'
                width={25}
                height={25}
                type='edit'
                dark={false}
              />
            </div>
            <Header title={block.title} thumb={block.thumbnail} />
          </Link>
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
