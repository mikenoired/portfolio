"use client";

import { HeaderContext } from "@/app/context/HeaderProvider";
import { cn } from "@/app/lib/utils";
import Icon from "@/app/ui/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";

interface HeaderProps {
  border?: boolean;
  invert?: boolean;
}

export default function Header({ border, invert }: HeaderProps) {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const names = useContext(HeaderContext);
  return (
    <header
      className={cn(
        invert && "mix-blend-difference contrast-100",
        "absolute z-10 flex w-full flex-col",
      )}
    >
      <div
        className={cn(
          "relative flex h-10 w-full items-center pl-8 pr-8 md:h-12 md:justify-between",
          border && "border-b border-white",
        )}
      >
        <Link href="/" className="text-2xl font-semibold uppercase">
          Mikenoired
        </Link>
        <nav className="hidden items-center text-xl md:flex">
          {names?.map((name, index) => (
            <Link
              key={index}
              href={`/${name.url}`}
              className={cn(
                "ml-5 hover:text-white uppercase",
                pathname == `/${name.url}` &&
                  "underline underline-offset-2 pointer-events-none",
              )}
            >
              {name.title}
            </Link>
          ))}
        </nav>
        <div
          className="absolute right-8 md:hidden"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <Icon
            type={!toggleMenu ? "menu" : "close"}
            dark={false}
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className={cn(toggleMenu ? "flex" : "hidden", "-mt-1")}>
        <div
          className={cn(
            !invert && "bg-black",
            "w-full border-y border-white pb-[14px] px-8 pt-[12px] md:justify-between",
          )}
        >
          {names?.map((name, index) => (
            <Link
              key={index}
              href={`/${name.url}`}
              className="pr-5 pt-2 text-xl font-medium uppercase inline-block"
            >
              {name.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
