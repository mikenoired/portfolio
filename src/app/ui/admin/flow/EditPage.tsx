"use client";

import MediaManager from "@/app/ui/admin/MediaManager";
import { updateFlow } from "@/server/pages/flow";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EditPageProps {
  images: string[];
  description: string;
}

export default function EditPage({ images, description }: EditPageProps) {
  const [toggleManager, setToggleManager] = useState(false);
  const [flowImages, setImages] = useState(images);
  const [flowDescription, setDescription] = useState(description);
  const [changed, isChanged] = useState(false);

  useEffect(() => {
    isChanged(images !== flowImages || description !== flowDescription);
  }, [images, flowImages, description, flowDescription]);

  return (
    <>
      {toggleManager && (
        <MediaManager
          saveHandler={setImages}
          initSelected={flowImages}
          active={setToggleManager}
          multiple
          fileType='image'
        />
      )}
      <div className='w-2/3 flex items-center flex-col'>
        <form
          className='w-full'
          action={updateFlow}
          onSubmit={() => isChanged(false)}
        >
          {changed && (
            <div className='w-full'>
              <button className='h-10 w-full bg-white text-black' type='submit'>
                Save
              </button>
            </div>
          )}
          <div className='w-full mt-5'>
            <h1 className='text-2xl font-semibold mb-3'>Description</h1>
            <textarea
              name='description'
              className='min-h-[200px] w-full border bg-black bg-opacity-0 p-3'
              value={flowDescription}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='What is this?'
            />
          </div>
          <div className='w-full mt-5'>
            <button
              type='button'
              className='h-10 w-full bg-white text-black'
              onClick={() => setToggleManager(true)}
            >
              Change images
            </button>
            <input
              type='text'
              hidden
              defaultValue={JSON.stringify(flowImages)}
              name='urls'
            />
          </div>
        </form>
        <div className='w-full mt-10'>
          <h1 className='text-2xl font-semibold mb-3'>flow.min</h1>
          <div className='flex flex-col items-center'>
            {!!flowImages.length ? (
              flowImages.map((image, index) => (
                <Image
                  key={index}
                  src={`/upload/${image}`}
                  alt=''
                  width={500}
                  height={500}
                />
              ))
            ) : (
              <p className='italic opacity-60'>There&apos;s too empty...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
