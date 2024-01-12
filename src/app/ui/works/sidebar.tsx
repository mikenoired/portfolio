"use client";

import Link from "next/link";
import { Works } from "@/app/works/data";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const Sidebar = ({ data }: { data: Works[] }) => {
  const pathname = usePathname();
  return (
    <div className='h-screen fixed md:block hidden w-[200px]'>
      <div className='flex w-full h-full flex-col p-6 border-r'>
        {data.map((link, index) => (
          <Link key={index} href={link.url} className='pb-4 flex items-center'>
            <span className='text-2xl font-semibold pr-4'>{link.title}</span>
            <div
              className={clsx("w-full h-[3px] bg-white", {
                "opacity-0": pathname !== "/works/" + link.url,
              })}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};
