/* eslint-disable @next/next/no-img-element */
"use client";

import { mobileSwipe } from "@/app/lib/mobileSwipe";
import Icon from "@/app/ui/Icon";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

export default function Lightbox({
  urls,
  active,
  currentImage,
}: {
  urls: string[];
  active: (toggle: boolean) => void;
  currentImage: string;
}) {
  const [current, setCurrent] = useState<string>(currentImage);
  const [zoom, setZoom] = useState(false);
  const [activeDrags, setActiveDrags] = useState(0);
  const [dragging, isDragging] = useState(false);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [caption, setCaption] = useState("");
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
        case "z":
          zoomImage();
          break;
      }
    };

    const getCaption = async () => {
      const res = await fetch(`http://localhost:3000/api/getCaption`, {
        method: "POST",
        body: JSON.stringify({ url: caption }),
      })
        .then((r) => r.json())
        .then((caption) => setCaption(caption));
    };
    getCaption();

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
  }, [current]);
  const toggleLightbox = () => {
    active(!active);
  };

  const onDragStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onDragEnd = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onDragStart, onStop: onDragEnd };

  const resetImage = () => {
    setZoom(false);
    isDragging(false);
    setDragPos({ x: 0, y: 0 });
  };

  const leftImage = () => {
    if (current == urls[0]) {
      setCurrent(urls[urls.length - 1]);
    } else {
      setCurrent(urls[urls.indexOf(current) - 1]);
    }
    resetImage();
  };
  const rightImage = () => {
    if (current == urls[urls.length - 1]) {
      setCurrent(urls[0]);
    } else {
      setCurrent(urls[urls.indexOf(current) + 1]);
    }
    resetImage();
  };

  const zoomImage = () => {
    if (zoom) {
      setDragPos({ x: 0, y: 0 });
    }
    setZoom(!zoom);
  };
  return (
    <div className='w-full h-full fixed z-20 bg-black backdrop-blur-sm bg-opacity-50 top-[0px] left-[0px]'>
      <div className='w-full h-full absolute select-none'>
        <div className='absolute right-[0] px-6 top-[20px] flex justify-between w-full opacity-0 hover:opacity-100 pb-[50px] z-[60] transition-opacity'>
          <span className='relative font-medium text-lg'>
            {urls.indexOf(current) + 1}/{urls.length}
          </span>
          <div className='flex gap-8'>
            <div onClick={zoomImage} className='cursor-pointer'>
              <Icon
                type={zoom ? "zoomOut" : "zoomIn"}
                dark={false}
                width={25}
                height={25}
              />
            </div>
            <div onClick={toggleLightbox} className='cursor-pointer'>
              <Icon type='close' dark={false} width={25} height={25} />
            </div>
          </div>
        </div>
        <div className='absolute opacity-0 pl-6 flex items-center hover:opacity-100 w-[350px] h-full z-[50] transition-opacity'>
          <div onClick={leftImage} className='cursor-pointer'>
            <Icon type='back' dark={false} width={25} height={25} />
          </div>
        </div>
        <div className='absolute right-[0px] pr-6 flex items-center justify-end opacity-0 hover:opacity-100 w-[350px] h-full z-[50] transition-opacity'>
          <div onClick={rightImage} className='cursor-pointer'>
            <Icon type='right' dark={false} width={25} height={25} />
          </div>
        </div>
        {caption !== "" && (
          <div className='w-full h-12 flex items-center justify-center bottom-[0px] z-50 absolute bg-gradient-to-t from-black from-10% opacity-0 hover:opacity-100 transition-opacity'>
            <p className='text-white text-xl'>{caption}</p>
          </div>
        )}
      </div>
      <div
        className='w-screen h-screen z-30 absolute transition-all'
        style={{ scale: zoom ? 2 : 1 }}
      >
        <Draggable
          disabled={!zoom}
          {...dragHandlers}
          positionOffset={{ x: "-50%", y: "-50%" }}
          position={dragPos}
          onStart={() => {
            isDragging(true);
          }}
          onStop={(e, pos) => {
            setDragPos({ x: pos.x, y: pos.y });
            isDragging(false);
          }}
          scale={zoom ? 2 : 1}
        >
          <img
            src={`/upload/${current}`}
            alt=''
            className='z-[100] absolute max-w-full max-h-full top-1/2 left-1/2'
            draggable={false}
            style={{
              cursor: dragging ? "grabbing" : "grab",
            }}
          />
        </Draggable>
      </div>
    </div>
  );
}
