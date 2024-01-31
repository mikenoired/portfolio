"use client";

import { updateThumb } from "@/app/lib/actions";
import { ThumbType } from "@/app/lib/definitions";
import Image from "next/image";
import { useState } from "react";
import ImageManager from "./ImageManager";

export default function EditThumb({ thumb }: { thumb: ThumbType }) {
  // const fileExt = /[^.]+$/.exec(thumb.media);
  const [image, setImage] = useState([""]);
  const [toggleManager, setToggleManager] = useState(false);
  const [preview, setPreview] = useState(thumb.media);
  const [changed, isChanged] = useState(false);
  const saveHandler = (image: string[]) => {
    setImage(image);
    setPreview(image[0]);
    isChanged(true);
  };
  return (
    <>
      {toggleManager && (
        <ImageManager
          saveHandler={saveHandler}
          initSelected={image}
          active={setToggleManager}
          multiple={false}
        />
      )}
      <div>
        <h1 className='font-semibold text-3xl mb-4'>Edit thumb</h1>
        <form
          className='border p-6'
          action={updateThumb}
          onSubmit={() => isChanged(false)}
        >
          <div
            className='w-full relative min-h-[300px] cursor-pointer'
            onClick={() => setToggleManager(true)}
          >
            <div className='absolute flex text-2xl font-bold items-center justify-center w-full h-full bg-black z-[1] bg-opacity-0 opacity-0 hover:bg-opacity-60 hover:opacity-100'>
              Change image
            </div>
            <Image
              src={`/upload/${preview}`}
              fill
              className='object-cover'
              alt=''
            />
          </div>
          <input type='text' hidden name='url' value={image[0]} />
          {changed && (
            <button
              className='mt-5 w-full block p-4 border hover:bg-white hover:text-black font-medium text-lg'
              type='submit'
            >
              Update
            </button>
          )}
        </form>
      </div>
    </>
  );
}
