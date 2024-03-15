"use client";

import { cn } from "@/app/lib/utils";
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
import { Swiper, SwiperSlide } from "swiper/react";

interface LightboxProps {
  active: (toggle: boolean) => void;
  currentImage: string;
  currentCaption: string;
  medias: {
    url: string;
    caption: string;
  }[];
}

export default function Lightbox({
  active,
  currentImage,
  currentCaption,
  medias,
}: LightboxProps) {
  const getMediaIndexByURL = (url: string) => {
    return medias.findIndex((media) => media.url === url);
  };

  const [caption, setCaption] = useState(currentCaption);
  const [isCaptionToggled, setIsCaptionToggled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    medias.findIndex((media) => media.url === currentImage)
  );
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [swiperConfig, setSwiperConfig] = useState({
    isBeginning: getMediaIndexByURL(currentImage) === 0,
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
      setSwiperConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (medias.length ?? 0) - 1,
      });
      setCaption(medias[activeIndex].caption);
    });

    return () => document.removeEventListener("keydown", handleEscape);
  }, [swiper, medias]);

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
              <button
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
              </button>
              <button onClick={toggleLightbox} className='cursor-pointer'>
                <Icon type='close' dark={false} width={25} height={25} />
              </button>
            </div>
          </div>
          {!isMobile && (
            <>
              {!swiperConfig.isEnd && (
                <div className='flex items-center justify-center absolute z-40 right-[0px] h-full px-8 opacity-0 hover:opacity-100 transition-opacity'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      swiper?.slideNext();
                    }}
                    className='z-50 cursor-pointer'
                  >
                    <Icon type='right' dark={false} width={25} height={25} />
                  </button>
                </div>
              )}
              {!swiperConfig.isBeginning && (
                <div className='flex items-center justify-center absolute z-40 left-[0px] h-full px-8 opacity-0 hover:opacity-100 transition-opacity'>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      swiper?.slidePrev();
                    }}
                    className='z-50 cursor-pointer'
                  >
                    <Icon type='back' dark={false} width={25} height={25} />
                  </button>
                </div>
              )}
            </>
          )}
          {caption && (
            <div
              className={cn(
                "absolute bottom-[0px] z-50 flex h-12 w-full items-center justify-center bg-gradient-to-t from-black from-10% transition-opacity",
                isMobile
                  ? isCaptionToggled
                    ? "opacity-100"
                    : "opacity-0"
                  : "opacity-0 hover:opacity-100"
              )}
            >
              <p className='text-xl text-white'>{caption}</p>
            </div>
          )}
        </div>
        {medias.map((image, index) => (
          <SwiperSlide
            zoom
            key={index}
            onClick={() => setIsCaptionToggled(!isCaptionToggled)}
          >
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
