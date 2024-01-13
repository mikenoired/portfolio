"use client";

import { useState } from "react";
import { newWorkCat } from "@/app/lib/actions";
import Image from "next/image";

export const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState<string>();

  return (
    <div className='flex'>
      <div>
        <h1 className='text-2xl font-bold mb-3'>Add new work category</h1>
        <form
          className='p-4 border flex flex-col w-[400px]'
          action={newWorkCat}
        >
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-3'>Title</label>
            <input
              className='border bg-black p-3'
              type='text'
              name='title'
              placeholder='Print, urban, B&W, or smth else'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-xl font-semibold mb-3'>Custom address</label>
            <input
              className='border bg-black p-3'
              type='text'
              name='url'
              placeholder='Example: "print" eqals /works/print'
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              autoFocus
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
                  reader.onloadend = () => setPreview(reader.result as string);
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
              autoFocus
            />
          </div>
          <input type='submit' value='Save' />
        </form>
      </div>
      <div className='w-[700px] ml-6'>
        <h1>Preview</h1>
        <div
          className='h-[90px] overflow-hidden w-full relative bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: preview ? `url(${preview})` : "none" }}
        >
          <div className='px-8 text-[64px] font-bold h-full z-1'>{title}</div>
          <div className='bg-black absolute opacity-15 w-full h-[88px]'></div>
        </div>
      </div>
    </div>
  );
};
