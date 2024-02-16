"use client";

import Icon from "@/app/ui/Icon";
import Image from "next/image";
import { useState } from "react";

export default function Lightbox({
  urls,
  active,
  currentImage,
}: {
  urls: string[];
  active: (toggle: boolean) => void;
  currentImage: string;
}) {
  const toggleLightbox = () => {
    active(!active);
  };
  const [current, setCurrent] = useState<string>(currentImage);

  const leftImage = () => {
    if (current == urls[0]) {
      setCurrent(urls[urls.length - 1]);
    } else {
      setCurrent(urls[urls.indexOf(current) - 1]);
    }
  };
  const rightImage = () => {
    if (current == urls[urls.length - 1]) {
      setCurrent(urls[0]);
    } else {
      setCurrent(urls[urls.indexOf(current) + 1]);
    }
  };
  return (
    <div className='w-full h-full fixed z-20 bg-black backdrop-blur-sm bg-opacity-50 top-[0px] left-[0px]'>
      <div className='w-full h-full absolute z-40 select-none'>
        <div
          onClick={toggleLightbox}
          className='cursor-pointer absolute right-[20px] top-[20px]'
        >
          <Icon type='close' dark={false} width={25} height={25} />
        </div>
        <div
          onClick={leftImage}
          className='cursor-pointer absolute left-[20px] top-1/2'
        >
          <Icon type='back' dark={false} width={30} height={30} />
        </div>
        <div
          onClick={rightImage}
          className='cursor-pointer absolute right-[20px] top-1/2'
        >
          <Icon type='right' dark={false} width={30} height={30} />
        </div>
      </div>
      <div className='w-screen h-screen z-30 absolute'>
        <div className='w-full h-full'>
          <Image
            src={`/upload/${current}`}
            alt=''
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
