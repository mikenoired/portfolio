"use client";

import Image from "next/image";
import { useState } from "react";
import MediaManager from "../MediaManager";

export default function File({
  name,
  title,
  value,
}: {
  title: string;
  name: string;
  value: string;
}) {
  const [managerOpened, isManagerOpened] = useState(false);
  const [file, selectFile] = useState([value]);
  return (
    <>
      {managerOpened && (
        <MediaManager
          initSelected={[value]}
          multiple={false}
          active={isManagerOpened}
          fileType='image'
          saveHandler={selectFile}
        />
      )}
      <div className='m-4'>
        <input name={name} type='text' value={file[0]} hidden />
        <button
          onClick={() => isManagerOpened(true)}
          className='bg-white text-black p-4'
        >
          Change {title}
        </button>
        {["jpg", "png", "jpeg"].includes(
          file[0].split(".").pop() as string
        ) && (
          <Image
            src={`/upload/${file[0]}`}
            alt={title}
            width={100}
            height={100}
            className='inline-block ml-7'
          />
        )}
      </div>
    </>
  );
}
