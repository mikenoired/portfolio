"use client";

import { WorkCat } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ data }: { data: WorkCat[] }) {
  const pathname = usePathname();
  return (
    <aside className="fixed hidden h-screen w-[250px] md:block">
      <div className="flex h-full w-full flex-col border-r p-6">
        {data.map((link, index) => (
          <Link key={index} href={link.url} className="flex items-center pb-4">
            <span className="text-nowrap pr-4 text-2xl font-semibold">
              {link.title}
            </span>
            <div
              className={cn("h-[3px] w-full bg-white", {
                "opacity-0": pathname !== "/works/" + link.url,
              })}
            ></div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
