'use client';

import Link from 'next/link';
import { useState } from 'react';

export const NavButton =
  ({
    title,
    thumb,
  }:
  {
    title: string,
    thumb: string,
  }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
      href='#'
      className='flex items-center xl:w-[1240px] w-full border-y h-[90px] overflow-hidden bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: hover ? `url(${thumb})` : 'none' }}
    >
      <div className='px-8 text-[64px] font-bold h-full z-[1]'>{title}</div>
      <div className='bg-black absolute opacity-15 w-full h-[88px]'></div>
    </Link>
  );
};