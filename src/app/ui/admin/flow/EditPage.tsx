"use client";

import MediaManager from "@/app/ui/admin/MediaManager";
import Image from "next/image";
import { useState } from "react";

export default function EditPage({ images }: { images: string[] }) {
  const [toggleManager, setToggleManager] = useState(false);
  const [flowImages, setImages] = useState(images);
  return (
    <>
      {toggleManager && (
        <MediaManager
          saveHandler={setImages}
          initSelected={images}
          active={setToggleManager}
          multiple
          fileType='image'
        />
      )}
      <div className='w-2/3 flex items-center flex-col'>
        <div className='w-full'>
          <h1 className='text-2xl font-semibold mb-3'>Description</h1>
          <textarea className='min-h-[200px] w-full border bg-black bg-opacity-0 p-3' />
        </div>
        <div className='w-full mt-5'>
          <button
            type='button'
            className='h-10 w-full bg-white text-black'
            onClick={() => setToggleManager(true)}
          >
            Change images
          </button>
        </div>
        <div className='w-full mt-10'>
          <h1 className='text-2xl font-semibold mb-3'>flow.min</h1>
          <div className='flex flex-col items-center'>
            {flowImages.map((image, index) => (
              <Image
                key={index}
                src={`/upload/${image}`}
                alt=''
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
