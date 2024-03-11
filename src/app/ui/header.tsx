"use client";

import { HeaderContext } from "@/app/context/HeaderProvider";
import { cn } from "@/app/lib/utils";
import Icon from "@/app/ui/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

export function Header({
  transparent,
  subMenu,
  border,
}: {
  transparent: boolean;
  subMenu: { title: string; url: string }[];
  border?: boolean;
}) {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCat, setToggleCat] = useState(false);
  const names = useContext(HeaderContext);
  return (
    <header
      className={cn(
        "absolute z-10 flex w-full flex-col mix-blend-difference contrast-100",
        !transparent && "bg-black"
      )}
    >
      <div
        className={cn(
          "relative flex h-10 w-full items-center pl-8 pr-8 md:h-12 md:justify-between",
          border && "border-b border-white"
        )}
      >
        <Link href='/' className='text-2xl font-semibold uppercase'>
          Mikenoired
        </Link>
        <nav className='hidden items-center text-xl md:flex'>
          {names?.map((name, index) => (
            <Link
              key={index}
              href={`/${name.url}`}
              className={cn(
                "ml-5 hover:text-white uppercase",
                pathname == `/${name.url}` &&
                  "underline underline-offset-8 pointer-events-none"
              )}
            >
              {name.name}
            </Link>
          ))}
        </nav>
        <div
          className='absolute right-8 md:hidden'
          onClick={(e) => {
            setToggleMenu(!toggleMenu);
          }}
        >
          {!toggleMenu ? (
            <Icon type='menu' dark={false} width={20} height={20} />
          ) : (
            <Icon type='close' dark={false} width={20} height={20} />
          )}
        </div>
      </div>
      <div className={cn("flex-col", toggleMenu ? "flex" : "hidden")}>
        <div className='flex w-full items-center border-b border-white pb-[14px] pl-8 pr-8  pt-[14px] md:h-12 md:justify-between'>
          <div
            className='inline-flex items-center justify-center gap-3'
            onClick={(e) => setToggleCat(!toggleCat)}
          >
            <div className='text-xl font-medium text-white'>WORKS</div>
            <Icon type='arrowDown' dark={false} width={12} height={12} />
          </div>
          <div className='pl-5 text-xl font-medium text-white'>Q/A</div>
          <div className='pl-5 text-xl font-medium'>CONTACTS</div>
        </div>
        <div
          className={cn(
            "w-full flex-wrap items-center border-b border-white pb-[14px] pl-8 pr-8 pt-[14px] md:justify-between",
            toggleCat ? "flex" : "hidden"
          )}
        >
          {subMenu.map((link, index) => (
            <Link
              className='pr-5 text-xl font-medium uppercase'
              href={`works/${link.url}`}
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
