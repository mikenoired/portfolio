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
        <div className='absolute right-[20px] top-[20px] flex justify-end w-full opacity-0 hover:opacity-100 pb-[50px] z-[60]'>
          <span className='right-6 relative font-medium text-lg'>
            {urls.indexOf(current) + 1}/{urls.length}
          </span>
          <div onClick={toggleLightbox} className='cursor-pointer'>
            <Icon type='close' dark={false} width={25} height={25} />
          </div>
        </div>
        <div className='absolute opacity-0 pl-6 flex items-center hover:opacity-100 w-[350px] h-full'>
          <div onClick={leftImage} className='cursor-pointer'>
            <Icon type='back' dark={false} width={25} height={25} />
          </div>
        </div>
        <div className='absolute right-[0px] pr-6 flex items-center justify-end opacity-0 hover:opacity-100 w-[350px] h-full'>
          <div onClick={rightImage} className='cursor-pointer'>
            <Icon type='right' dark={false} width={25} height={25} />
          </div>
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
