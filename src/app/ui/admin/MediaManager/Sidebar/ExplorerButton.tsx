import { ChangeEvent, useState } from "react";
import { useManagerContext } from "../ManagerContext";

export default function ExplorerButton() {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const { setLoadedImages } = useManagerContext();

  const files = fileList ? [...fileList] : [];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

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
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    await fetch("http://localhost:3000/api/getImages", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
      });
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
        accept='image/jpeg'
        multiple
        onChange={handleFileChange}
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
