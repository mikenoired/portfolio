"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";

export function Header({ transparent }: { transparent: Boolean }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCat, setToggleCat] = useState(false);
  return (
    <header
      className={clsx(
        "flex flex-col w-full fixed z-10 mix-blend-difference contrast-100",
        !transparent && "bg-black"
      )}
    >
      <div className='pl-8 pr-8 relative flex w-full md:justify-between items-center h-10 md:h-12 border-b border-white'>
        <Link href='/' className='text-2xl font-semibold uppercase'>
          Mikenoired
        </Link>
        <nav className='md:flex items-center text-xl hidden'>
          <Link href='/works'>WORKS</Link>
          <Link href='/qna' className='pl-5'>
            Q/A
          </Link>
          <Link href='/admin' className='pl-5'>
            ADMIN
          </Link>
          <Link href='/about' className='pl-5'>
            ABOUT
          </Link>
        </nav>
        <div
          className='md:hidden absolute right-8'
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
      <div className={clsx("flex-col", toggleMenu ? "flex" : "hidden")}>
        <div className='flex pl-8 pr-8 w-full md:justify-between items-center pt-[14px] pb-[14px]  md:h-12 border-b border-white'>
          <div
            className='justify-center items-center gap-3 inline-flex'
            onClick={(e) => setToggleCat(!toggleCat)}
          >
            <div className='text-white text-xl font-medium'>WORKS</div>
            <Icon type='arrowDown' dark={false} width={12} height={12} />
          </div>
          <div className='pl-5 text-white text-xl font-medium'>Q/A</div>
          <div className='pl-5 text-xl font-medium'>CONTACTS</div>
        </div>
        <div
          className={clsx(
            "pl-8 pr-8 pt-[14px] pb-[14px] w-full md:justify-between items-center border-b border-white flex-wrap",
            toggleCat ? "flex" : "hidden"
          )}
        >
          <div className='pr-5 text-white text-xl font-medium uppercase'>
            Studio
          </div>
          <div className='pr-5 text-white text-xl font-medium uppercase'>
            Street
          </div>
          <div className='pr-5 text-xl font-medium uppercase'>Landscape</div>
          <div className='text-xl font-medium uppercase'>Print</div>
        </div>
      </div>
    </header>
  );
}
