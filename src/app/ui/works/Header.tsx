"use client";

import Image from "next/image";

export function Header({
  title,
  thumb,
}: {
  title: string;
  thumb: string | undefined;
}) {
  return (
    <div className="relative h-[90px] w-full overflow-hidden border-b bg-cover bg-center bg-no-repeat">
      <div className="absolute z-[1] h-full px-8 text-[64px] font-bold">
        {title}
      </div>
      <div className="absolute h-[88px] w-full bg-black opacity-15"></div>
      <Image
        src={`/upload/${thumb as string}`}
        alt="thumb"
        fill
        className="object-cover"
      />
    </div>
  );
}
