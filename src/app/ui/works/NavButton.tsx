"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavButton({
  title,
  thumb,
  url,
}: {
  title: string;
  thumb: string;
  url: string;
}) {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();
  return (
    <Link
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
      href={`${pathname}/${url}`}
      className='relative flex h-[90px] w-full xl:w-[1240px] -mt-1 items-center overflow-hidden border-y bg-cover bg-center bg-no-repeat transition-all'
      style={{
        backgroundImage: hover ? `url('/upload/${thumb}')` : "none",
        right: hover ? "0px" : "-35px",
      }}
    >
      <div className='z-[1] h-full px-8 text-[64px] font-bold mix-blend-difference'>
        {title}
      </div>
      <div
        className={cn(
          "absolute h-[88px] w-full bg-black",
          hover ? "opacity-15" : "opacity-0"
        )}
      ></div>
    </Link>
  );
}
