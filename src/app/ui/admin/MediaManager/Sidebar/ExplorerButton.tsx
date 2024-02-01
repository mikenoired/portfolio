import { useState } from "react";
import { useManagerContext } from "../ManagerContext";

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
    <div className='w-full'>
      <label
        htmlFor='file-upload'
        className='text-black text-xl font-bold h-[50px] bg-white justify-center items-center flex-col flex cursor-pointer'
      >
        Open explorer
      </label>
      <input
        type='file'
        required
        id='file-upload'
        className='hidden'
        accept={acceptFiles(fileType)}
        multiple
        onChange={(e) => setFileList(e.target.files)}
      />
      {files.length >= 1 && (
        <button
          className='text-black text-xl font-bold h-[50px] bg-orange justify-center items-center flex cursor-pointer w-full'
          onClick={handleUploadClick}
        >
          Upload
        </button>
      )}
    </div>
  );
}