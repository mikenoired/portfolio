"use client";

import { mobileSwipe } from "@/app/lib/mobileSwipe";
import Icon from "@/app/ui/Icon";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Lightbox({
  urls,
  active,
  currentImage,
}: {
  urls: string[];
  active: (toggle: boolean) => void;
  currentImage: string;
}) {
  const lightboxContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          active(false);
          break;
        case "ArrowLeft":
          leftImage();
          break;
        case "ArrowRight":
          rightImage();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    mobileSwipe(
      () => leftImage(),
      () => rightImage(),
      () => toggleLightbox(),
      () => toggleLightbox()
    );
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
  const toggleLightbox = () => {
    active(!active);
  };
  const [current, setCurrent] = useState<string>(currentImage);

  const leftImage = () => {
    if (lightboxContainer.current) {
      lightboxContainer.current.style.transform = `translateX(0%)`;
      lightboxContainer.current.style.transition = "transform 0.3s ease-in-out";
    }
    setTimeout(() => {
      current == urls[0]
        ? setCurrent(urls[urls.length - 1])
        : setCurrent(urls[urls.indexOf(current) - 1]);
      if (lightboxContainer.current) {
        lightboxContainer.current.style.transition = "none";
        lightboxContainer.current.style.transform = `translateX(-33.33333333333%)`;
      }
    }, 300);
  };
  const rightImage = () => {
    if (lightboxContainer.current) {
      lightboxContainer.current.style.transform = `translateX(-${
        100 - 100 / 3
      }%)`;
      lightboxContainer.current.style.transition = "transform 0.3s ease-in-out";
    }
    setTimeout(() => {
      current == urls[urls.length - 1]
        ? setCurrent(urls[0])
        : setCurrent(urls[urls.indexOf(current) + 1]);
      if (lightboxContainer.current) {
        lightboxContainer.current.style.transition = "none";
        lightboxContainer.current.style.transform = `translateX(-33.33333333333%)`;
      }
    }, 300);
  };
  return (
    <div className='w-full h-full fixed z-20 bg-black backdrop-blur-sm bg-opacity-50 top-[0px] left-[0px]'>
      <div className='w-full h-full absolute z-40 select-none'>
        <div className='absolute right-[20px] top-[20px] flex justify-end items-center w-full opacity-0 hover:opacity-100 pb-[50px] z-[60]'>
          <span className='right-6 relative font-medium text-lg'>
            {urls.indexOf(current) + 1}/{urls.length}
          </span>
          <div onClick={toggleLightbox} className='cursor-pointer'>
            <Icon type='close' dark={false} width={20} height={20} />
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
      <div
        className='w-[300%] h-screen z-30 absolute my-[0px] mx-auto flex'
        style={{
          transform: `translateX(-${100 / 3}%)`,
        }}
        ref={lightboxContainer}
      >
        <div className='w-1/3 h-full relative'>
          <Image
            src={`/upload/${
              urls[urls.indexOf(current) - 1]
                ? urls[urls.indexOf(current) - 1]
                : urls[urls.length - 1]
            }`}
            alt=''
            fill
            className='object-contain'
          />
        </div>
        <div className='w-1/3 h-full relative'>
          <Image
            src={`/upload/${current}`}
            alt=''
            fill
            className='object-contain'
          />
        </div>
        <div className='w-1/3 h-full relative'>
          <Image
            src={`/upload/${
              urls[urls.indexOf(current) + 1]
                ? urls[urls.indexOf(current) + 1]
                : urls[0]
            }`}
            alt=''
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
