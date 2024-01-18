"use client";

import { useState } from "react";
import { updateWorkCat } from "@/app/lib/actions";
import { WorkCat } from "@/app/lib/definitions";
import ImageManager from "@/app/ui/admin/ImageManager";
import Image from "next/image";

export const EditForm = ({ data }: { data: WorkCat }) => {
  const editWorkCat = updateWorkCat.bind(null, data.url);
  const [title, setTitle] = useState(data.title);
  const [url, setUrl] = useState(data.url);
  const [preview, setPreview] = useState(`/upload/${data.thumbnail}`);
  const [images, setImages] = useState(data.images);
  const [toggleManager, setToggleManager] = useState(false);

  return (
    <>
      {toggleManager && (
        <ImageManager
          saveHandler={setImages}
          initSelected={images}
          active={setToggleManager}
        />
      )}
      <div className='flex'>
        <div>
          <h1 className='text-2xl font-bold mb-3'>Edit work category</h1>
          <form
            className='p-4 border flex flex-col w-[400px]'
            action={editWorkCat}
          >
            <input
              type='text'
              name='images'
              hidden
              value={JSON.stringify({ data: images })}
            />
            <div className='flex flex-col'>
              <label className='text-xl font-semibold mb-3'>Title</label>
              <input
                className='border bg-black p-3'
                type='text'
                name='title'
                placeholder='Print, urban, B&W, or smth else'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-xl font-semibold mb-3'>
                Custom address
              </label>
              <input
                className='border bg-black p-3'
                type='text'
                name='url'
                placeholder='Example: "print" eqals /works/print'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='text-xl font-semibold mb-3'>Thumbnail</label>
              <input
                className='border bg-black p-3'
                type='file'
                name='thumbnail'
                accept='image/*'
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    const reader = new FileReader();
                    reader.onloadend = () =>
                      setPreview(reader.result as string);
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </div>
            <button
              type='button'
              className='w-full h-10 bg-white text-black'
              onClick={() => setToggleManager(!toggleManager)}
            >
              Open image manager
            </button>
            <input type='submit' value='Update' />
          </form>
        </div>
        <div className='w-[700px] ml-6'>
          <h1>Preview</h1>
          <div className='h-[90px] relative bg-center bg-no-repeat bg-cover overflow-hidden w-full'>
            <div className='absolute px-8 text-[64px] font-bold h-full z-[1]'>
              {title}
            </div>
            <div className='bg-black absolute opacity-15 w-full h-[88px]'></div>
          </div>
        </div>
      </div>
      <div className='masonry-xl mt-8'>
        {images.map((url, index) => (
          <Image
            key={index}
            src={`/upload/${url}`}
            className='mb-5'
            alt=''
            width={300}
            height={300}
          />
        ))}
      </div>
    </>
  );
};
