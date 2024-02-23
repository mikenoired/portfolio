"use client";

import { MediaType } from "@/app/lib/definitions";
import Lightbox from "@/app/ui/lightbox";
import { useState } from "react";

export function ImagesGrid({ images }: { images: MediaType[] }) {
  const [activeLightbox, setActive] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  return (
    <>
      {activeLightbox && (
        <Lightbox
          currentImage={currentImage}
          active={setActive}
          urls={images.map((image) => `/upload/${image.url}`)}
        />
      )}
      <div className='w-full p-8 masonry-sm'>
        {images.map((image, index) => (
          <div
            onClick={() => {
              setActive(true);
              setCurrentImage(images[index].url);
            }}
            key={index}
            className='mb-5 relative w-full h-full cursor-pointer'
          >
            <img src={`/upload/${image.url}`} alt='' />
          </div>
        ))}
      </div>
    </>
  );
}
