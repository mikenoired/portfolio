/* eslint-disable @next/next/no-img-element */
"use client";

import { mobileSwipe } from "@/app/lib/mobileSwipe";
import Icon from "@/app/ui/Icon";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

function windowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Lightbox({
  urls,
  active,
  currentImage,
}: {
  urls: string[];
  active: (toggle: boolean) => void;
  currentImage: string;
}) {
  const [dimensions, setDimensions] = useState(windowDimensions());
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [current, setCurrent] = useState<string>(currentImage);
  const [zoom, setZoom] = useState(false);
  const [activeDrags, setActiveDrags] = useState(0);
  const [dragging, isDragging] = useState(false);
  useEffect(() => {
    function handleResize() {
      setDimensions(windowDimensions());
    }
    window.addEventListener("resize", handleResize);
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
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyPress);
    };
  });
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

  const leftImage = () => {
    if (current == urls[0]) {
      setCurrent(urls[urls.length - 1]);
    } else {
      setCurrent(urls[urls.indexOf(current) - 1]);
    }
    setZoom(false);
    isDragging(false);
  };
  const rightImage = () => {
    if (current == urls[urls.length - 1]) {
      setCurrent(urls[0]);
    } else {
      setCurrent(urls[urls.indexOf(current) + 1]);
    }
    setZoom(false);
    isDragging(false);
  };

  const zoomImage = () => {
    setZoom(!zoom);
  };
  return (
    <div className='w-full h-full fixed z-20 bg-black backdrop-blur-sm bg-opacity-50 top-[0px] left-[0px]'>
      <div className='w-full h-full absolute select-none'>
        <div className='absolute right-[0] px-6 top-[20px] flex justify-between w-full opacity-0 hover:opacity-100 pb-[50px] z-[60]'>
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
        <div className='absolute opacity-0 pl-6 flex items-center hover:opacity-100 w-[350px] h-full z-[50]'>
          <div onClick={leftImage} className='cursor-pointer'>
            <Icon type='back' dark={false} width={25} height={25} />
          </div>
        </div>
        <div className='absolute right-[0px] pr-6 flex items-center justify-end opacity-0 hover:opacity-100 w-[350px] h-full z-[50]'>
          <div onClick={rightImage} className='cursor-pointer'>
            <Icon type='right' dark={false} width={25} height={25} />
          </div>
        </div>
      </div>
      <div
        className='w-screen h-screen z-30 absolute transition-all'
        style={{ scale: zoom ? 2 : 1 }}
      >
        <Draggable
          disabled={!zoom}
          {...dragHandlers}
          positionOffset={{ x: "-50%", y: "-50%" }}
          onStart={() => {
            isDragging(true);
          }}
          onStop={() => {
            isDragging(false);
          }}
          scale={zoom ? 2 : 1}
        >
          <img
            onLoad={(e) => {
              setImageDimensions({
                width: e.currentTarget.width,
                height: e.currentTarget.height,
              });
            }}
            src={`/upload/${current}`}
            alt=''
            className='z-[100] absolute'
            draggable={false}
            style={{
              // transform: `translate3d(${
              //   dimensions.width / 2 - imageDimensions.width / 2 + imagePos.x
              // }px, ${
              //   dimensions.height / 2 - imageDimensions.height / 2 + imagePos.y
              // }px, 0)`,
              maxWidth: "100%",
              maxHeight: "100%",
              top: "50%",
              left: "50%",
              cursor: dragging ? "grabbing" : "grab",
            }}
          />
        </Draggable>
      </div>
    </div>
  );
}
