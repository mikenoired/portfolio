"use client";

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
        {file[0]}
      </div>
    </>
  );
}
