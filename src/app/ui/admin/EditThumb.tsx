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
  const saveHandler = (image: string[]) => {
    setImage(image);
    setPreview(image[0]);
    console.log(preview);
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
        <form className='border p-6' action={updateThumb}>
          <div
            className='w-full relative min-h-[300px] mb-5 cursor-pointer'
            onClick={() => setToggleManager(true)}
          >
            <Image src={`/upload/${preview}`} fill objectFit='contain' alt='' />
          </div>
          <input type='text' hidden name='url' value={image[0]} />
          <button
            className='w-full block p-4 border hover:bg-white hover:text-black font-medium text-lg'
            type='submit'
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
