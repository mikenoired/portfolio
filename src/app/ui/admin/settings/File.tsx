"use client";

import MediaManager from "@/app/ui/admin/MediaManager";
import Image from "next/image";
import { useState } from "react";

interface FileProps {
  title: string;
  name: string;
  value: string;
}

export default function File({ name, title, value }: FileProps) {
  const [managerOpened, isManagerOpened] = useState(false);
  const [file, selectFile] = useState([value]);
  return (
    <>
      {managerOpened && (
        <MediaManager
          initSelected={[value]}
          multiple={false}
          active={isManagerOpened}
          fileType="image"
          saveHandler={selectFile}
        />
      )}
      <div className="m-4">
        <input name={name} type="text" value={file[0]} hidden />
        <button
          onClick={() => isManagerOpened(true)}
          className="bg-white p-4 text-black"
        >
          Change {title}
        </button>
        {["jpg", "png", "jpeg"].includes(
          file[0].split(".").pop() as string,
        ) && (
          <Image
            src={`/upload/${file[0]}`}
            alt={title}
            width={100}
            height={100}
            className="ml-7 inline-block"
          />
        )}
      </div>
    </>
  );
}
