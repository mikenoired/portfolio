"use client";

import { NotificationContext } from "@/app/context/NotificationProvider";
import { ThumbType } from "@/app/lib/definitions";
import { updateThumb } from "@/server/thumbnail";
import { useContext, useState } from "react";
import MediaManager from "./MediaManager";

export default function EditThumb({ thumb }: { thumb: ThumbType }) {
  const { setSettings } = useContext(NotificationContext);
  // const fileExt = /[^.]+$/.exec(thumb.media);
  const [video, setVideo] = useState([""]);
  const [toggleManager, setToggleManager] = useState(false);
  const [preview, setPreview] = useState(thumb.media);
  const [changed, isChanged] = useState(false);
  const saveHandler = (image: string[]) => {
    setVideo(image);
    setPreview(image[0]);
    isChanged(true);
  };
  return (
    <>
      {toggleManager && (
        <MediaManager
          saveHandler={saveHandler}
          initSelected={video}
          active={setToggleManager}
          multiple={false}
          fileType='video'
        />
      )}
      <div>
        <h1 className='mb-4 text-3xl font-semibold'>Edit thumb</h1>
        <form
          className='border p-6'
          action={async (data: FormData) => {
            try {
              await updateThumb(data);
              setSettings({
                text: "Video saved",
                status: "success",
              });
            } catch (error) {
              setSettings({
                text: "Failed to save video",
                status: "error",
              });
            }
          }}
          onSubmit={() => isChanged(false)}
        >
          <div
            className='relative min-h-[300px] w-full cursor-pointer'
            onClick={() => setToggleManager(true)}
          >
            <div className='absolute z-[1] flex h-full w-full items-center justify-center bg-black bg-opacity-0 text-2xl font-bold opacity-0 hover:bg-opacity-60 hover:opacity-100'>
              Change video
            </div>
            <video
              autoPlay
              controls={false}
              muted
              loop
              src={`/upload/${preview}`}
              className='object-cover'
            />
          </div>
          <input type='text' hidden name='url' defaultValue={video[0]} />
          {changed && (
            <button
              className='mt-5 block w-full border p-4 text-lg font-medium hover:bg-white hover:text-black'
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
