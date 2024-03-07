"use client";

import { WorkCat } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import { Header } from "@/app/ui/works/Header";
import Link from "next/link";

export default function List({ works }: { works: WorkCat[] }) {
  return (
    <div className="w-full px-4 md:w-[700px]">
      {works.length !== 0 ? (
        works.map((block, index) => (
          <Link
            href={`works/${block.url}/edit`}
            key={index}
            className="relative mb-5 flex items-center"
          >
            <div className="absolute right-[20px] z-[2] text-xl font-semibold">
              <Icon
                className="-mt-[3px]"
                width={25}
                height={25}
                type="edit"
                dark={false}
              />
            </div>
            <Header title={block.title} thumb={block.thumbnail} />
          </Link>
        ))
      ) : (
        <div className="py-5 text-center text-2xl font-bold">
          There is no works :(
        </div>
      )}
      <Link
        href="works/new"
        className="flex justify-center border p-5 hover:bg-white hover:text-black"
      >
        Add new work category
      </Link>
    </div>
  );
}
