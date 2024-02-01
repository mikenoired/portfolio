"use client";

import { updateWorkCat } from "@/app/lib/actions";
import { WorkCat } from "@/app/lib/definitions";
import MediaManager from "@/app/ui/admin/MediaManager";
import Image from "next/image";
import { useState } from "react";
import { DeleteModal } from "./DeleteModal";

export function EditForm({ data }: { data: WorkCat }) {
  const editWorkCat = updateWorkCat.bind(null, data.url);
  const [title, setTitle] = useState(data.title);
  const [url, setUrl] = useState(data.url);
  const [preview, setPreview] = useState([data.thumbnail]);
  const [images, setImages] = useState(data.images);
  const [togglePreviewManager, setTogglePreviewManager] = useState(false);
  const [toggleImagesManager, setToggleImagesManager] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);

  return (
    <>
      {toggleImagesManager && (
        <MediaManager
          saveHandler={setImages}
          initSelected={images}
          active={setToggleImagesManager}
          multiple={true}
          fileType='image'
        />
      )}
      {togglePreviewManager && (
        <MediaManager
          saveHandler={setPreview}
          initSelected={preview}
          active={setTogglePreviewManager}
          multiple={false}
          fileType='image'
        />
      )}
      {toggleDelete && <DeleteModal toggleModal={setToggleDelete} url={url} />}
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
              <label className='text-xl font-medium mb-3'>Title</label>
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
              <label className='text-xl font-medium mb-3'>Page tag</label>
              <input
                className='border bg-black p-3'
                type='text'
                name='url'
                placeholder='Write tag without slash'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>
            <div className='flex flex-col mt-4'>
              <input
                type='text'
                name='thumbnail'
                hidden
                defaultValue={preview}
              />
              <button
                type='button'
                className='w-full h-9 bg-white text-black font-medium text-base mt-3'
                onClick={() => setTogglePreviewManager(true)}
              >
                Select thumbnail
              </button>
            </div>
            <button
              className='w-full mt-5 h-10 bg-white text-black'
              type='submit'
            >
              Update
            </button>
          </form>
        </div>
        <div className='w-[700px] ml-6'>
          <h1 className='text-2xl font-bold mb-3'>Preview</h1>
          <div
            className='h-[90px] relative bg-center bg-no-repeat bg-cover overflow-hidden w-full'
            style={{
              backgroundImage:
                preview[0] !== "" ? `url('/upload/${preview}')` : "none",
            }}
          >
            <div className='absolute px-8 text-[64px] font-bold h-full z-[1]'>
              {title}
            </div>
            <div className='bg-black absolute opacity-15 w-full h-[88px]'></div>
          </div>
          <button
            type='button'
            className='w-full mt-5 h-10 bg-white text-black'
            onClick={() => setToggleImagesManager(true)}
          >
            Change gallery
          </button>
          <button
            onClick={() => setToggleDelete(true)}
            type='button'
            className='w-full mt-5 h-10 bg-red text-black'
          >
            Delete category
          </button>
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
}
