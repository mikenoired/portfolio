"use client";

import Icon from "@/app/ui/Icon";
import { isMobile } from "@/app/ui/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Keyboard, Navigation, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export default function Lightbox({
  active,
  currentImage,
  currentCaption,
  medias,
}: {
  active: (toggle: boolean) => void;
  currentImage: string;
  currentCaption: string;
  medias: {
    url: string;
    caption: string;
  }[];
}) {
  const [caption, setCaption] = useState(currentCaption);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    medias.findIndex((media) => media.url === currentImage)
  );
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: medias.findIndex((media) => media.url === currentImage) === 0,
    isEnd: activeIndex === (medias.length ?? 0) - 1,
  });
  const toggleLightbox = () => {
    active(!active);
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      toggleLightbox();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (medias.length ?? 0) - 1,
      });
      setCaption(medias[activeIndex].caption);
    });

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [swiper, medias]);

  const getMediaIndexByURL = (url: string) => {
    return medias.findIndex((media) => media.url === url);
  };

  return (
    <div className='fixed left-[0px] top-[0px] z-20 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm'>
      <Swiper
        initialSlide={getMediaIndexByURL(currentImage)}
        slidesPerView={1}
        centeredSlides={true}
        zoom={{
          maxRatio: 2,
          minRatio: 1,
          toggle: true,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Zoom, Navigation]}
      >
        <div className='absolute h-full w-full select-none top-[0px]'>
          <div className='absolute right-[0] top-[30px] z-[60] flex w-full justify-between px-8 pb-[50px] opacity-0 transition-opacity hover:opacity-100'>
            <span className='relative text-lg font-medium'>
              {`${activeIndex + 1}/${medias.length}`}
            </span>
            <div className='flex gap-8'>
              <div
                onClick={() => {
                  isZoomed ? swiper?.zoom.out() : swiper?.zoom.in(2);
                  setIsZoomed(!isZoomed);
                }}
                className='right-[50px] cursor-pointer'
              >
                <Icon
                  type={isZoomed ? "zoomOut" : "zoomIn"}
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
          {!isMobile && (
            <>
              {!slideConfig.isEnd && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    swiper?.slideNext();
                  }}
                  className='absolute right-[30px] top-[50%] z-50 cursor-pointer'
                >
                  <Icon type='right' dark={false} width={25} height={25} />
                </button>
              )}
              {!slideConfig.isBeginning && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    swiper?.slidePrev();
                  }}
                  className='absolute left-[30px] top-[50%] z-50 cursor-pointer'
                >
                  <Icon type='back' dark={false} width={25} height={25} />
                </button>
              )}
            </>
          )}
          {caption !== "" && (
            <div className='absolute bottom-[0px] z-50 flex h-12 w-full items-center justify-center bg-gradient-to-t from-black from-10% opacity-0 transition-opacity hover:opacity-100'>
              <p className='text-xl text-white'>{caption}</p>
            </div>
          )}
        </div>
        {medias.map((image, index) => (
          <SwiperSlide zoom key={index}>
            <div className='w-screen h-screen flex items-center justify-center relative'>
              <Image
                src={`/upload/${image.url}`}
                alt={image.caption}
                objectFit='contain'
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const ToggleZoom = () => {
  const swiper = useSwiper();
  const [isZoomed, setIsZoomed] = useState(false);
  return (
    <div
      onClick={() => {
        isZoomed ? swiper.zoom.out() : swiper.zoom.in(2);
        setIsZoomed(!isZoomed);
      }}
      className='right-[50px] cursor-pointer'
    >
      <Icon
        type={isZoomed ? "zoomOut" : "zoomIn"}
        dark={false}
        width={25}
        height={25}
      />
    </div>
  );
};
