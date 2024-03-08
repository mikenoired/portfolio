"use client";

import { useState } from "react";
import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

export default function ExplorerButton({ fileType }: { fileType: string }) {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const { setLoadedMedia } = useManagerContext();

  const files = fileList ? [...fileList] : [];

  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }

    const data = new FormData();
    files.forEach((file) => {
      data.append(`file`, file, file.name);
    });

    await fetch("http://localhost:3000/api/fileUpload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));

    await fetch("http://localhost:3000/api/getMedia", {
      method: "POST",
      body: JSON.stringify({ type: fileType }),
    })
      .then((r) => r.json())
      .then((loadedMedia) => {
        setLoadedMedia(loadedMedia);
      });
  };

  const acceptFiles = (type: string) => {
    switch (type) {
      case "image":
        return "image/jpeg,image/png,image/gif,image/webp";
      case "icon":
        return "image/x-icon";
      case "video":
        return "video/mpeg,video/mp4,video/webm";
      case "audio":
        return "audio/webm,audio/wav,audio/ogg,audio/mp4,audio/mp3,audio/mpeg,audio/flac";
    }
  };
  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className="flex h-[50px] cursor-pointer flex-col items-center justify-center bg-white text-xl font-bold text-black"
      >
        Open explorer
      </label>
      <input
        type="file"
        required
        id="file-upload"
        className="hidden"
        accept={acceptFiles(fileType)}
        multiple
        onChange={(e) => setFileList(e.target.files)}
      />
      {files.length >= 1 && (
        <button
          className="bg-orange flex h-[50px] w-full cursor-pointer items-center justify-center text-xl font-bold text-black"
          onClick={handleUploadClick}
        >
          Upload
        </button>
      )}
    </div>
  );
}
