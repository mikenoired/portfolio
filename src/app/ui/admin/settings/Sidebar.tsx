"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages: { title: string; url: string }[] = [
  {
    title: "Primary",
    url: "/admin/settings",
  },
  {
    title: "Meta & View",
    url: "/admin/settings/meta",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className='fixed hidden h-screen w-[250px] md:block'>
      <div className='flex h-full w-full flex-col border-r p-6'>
        {pages.map((link, index) => (
          <Link key={index} href={link.url} className='flex items-center pb-4'>
            <span className='text-nowrap pr-4 text-2xl font-semibold'>
              {link.title}
            </span>
            <div
              className={cn("h-[3px] w-full bg-white", {
                "opacity-0": pathname !== link.url,
              })}
            ></div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
