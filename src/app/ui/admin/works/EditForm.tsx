"use client";

import { WorkCat } from "@/app/lib/definitions";
import MediaManager from "@/app/ui/admin/MediaManager";
import { updateWorkCat } from "@/server/pages/works";
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
          fileType="image"
        />
      )}
      {togglePreviewManager && (
        <MediaManager
          saveHandler={setPreview}
          initSelected={preview}
          active={setTogglePreviewManager}
          multiple={false}
          fileType="image"
        />
      )}
      {toggleDelete && <DeleteModal toggleModal={setToggleDelete} url={url} />}
      <div className="flex">
        <div>
          <h1 className="mb-3 text-2xl font-bold">Edit work category</h1>
          <form
            className="flex w-[400px] flex-col border p-4"
            action={editWorkCat}
          >
            <input
              type="text"
              name="images"
              hidden
              value={JSON.stringify({ data: images })}
            />
            <div className="flex flex-col">
              <label className="mb-3 text-xl font-medium">Title</label>
              <input
                className="border bg-black p-3"
                type="text"
                name="title"
                placeholder="Print, urban, B&W, or smth else"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="mb-3 text-xl font-medium">Page tag</label>
              <input
                className="border bg-black p-3"
                type="text"
                name="url"
                placeholder="Write tag without slash"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <input type="text" name="thumbnail" hidden value={preview} />
              <button
                type="button"
                className="mt-3 h-9 w-full bg-white text-base font-medium text-black"
                onClick={() => setTogglePreviewManager(true)}
              >
                Select thumbnail
              </button>
            </div>
            <button
              className="mt-5 h-10 w-full bg-white text-black"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
        <div className="ml-6 w-[700px]">
          <h1 className="mb-3 text-2xl font-bold">Preview</h1>
          <div
            className="relative h-[90px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                preview[0] !== "" ? `url('/upload/${preview}')` : "none",
            }}
          >
            <div className="absolute z-[1] h-full px-8 text-[64px] font-bold mix-blend-exclusion">
              {title}
            </div>
            <div className="absolute h-[88px] w-full bg-black opacity-15"></div>
          </div>
          <button
            type="button"
            className="mt-5 h-10 w-full bg-white text-black"
            onClick={() => setToggleImagesManager(true)}
          >
            Change gallery
          </button>
          <button
            onClick={() => setToggleDelete(true)}
            type="button"
            className="bg-red mt-5 h-10 w-full text-black"
          >
            Delete category
          </button>
        </div>
      </div>
      <div className="masonry-xl mt-8">
        {images.map((url, index) => (
          <Image
            key={index}
            src={`/upload/${url}`}
            className="mb-5"
            alt=""
            width={300}
            height={300}
          />
        ))}
      </div>
    </>
  );
}
