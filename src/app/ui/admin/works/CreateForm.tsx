"use client";

import MediaManager from "@/app/ui/admin/MediaManager";
import { newWorkCat } from "@/server/pages/works";
import { useState } from "react";

export function CreateForm() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState([""]);
  const [toggleManager, setToggleManager] = useState(false);

  return (
    <>
      {toggleManager && (
        <MediaManager
          active={setToggleManager}
          initSelected={preview}
          saveHandler={setPreview}
          multiple={false}
          fileType="image"
        />
      )}
      <div className="flex">
        <div>
          <h1 className="mb-3 text-2xl font-bold">Add new work category</h1>
          <form
            className="flex w-[400px] flex-col border p-4"
            action={newWorkCat}
          >
            <div className="flex flex-col">
              <label className="mb-3 text-xl font-semibold">Title</label>
              <input
                className="border bg-black p-3"
                type="text"
                name="title"
                placeholder="Print, urban, B&W, or smth else"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label className="mb-3 text-xl font-semibold">
                Custom address
              </label>
              <input
                className="border bg-black p-3"
                type="text"
                name="url"
                placeholder='Example: "print" eqals /works/print'
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                autoFocus
              />
            </div>
            <div className="mt-4 flex flex-col">
              <input type="text" name="thumbnail" hidden value={preview} />
              <button
                type="button"
                className="mt-3 h-9 w-full bg-white text-base font-medium text-black"
                onClick={() => setToggleManager(true)}
              >
                Select thumbnail
              </button>
            </div>
            <button
              className="mt-5 h-10 w-full bg-white text-lg font-semibold text-black"
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
        <div className="ml-6 w-[700px]">
          <h1>Preview</h1>
          <div
            className="relative h-[90px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                preview[0] !== "" ? `url('/upload/${preview}')` : "none",
            }}
          >
            <div className="z-1 h-full px-8 text-[64px] font-bold mix-blend-difference">
              {title}
            </div>
            <div className="absolute h-[88px] w-full bg-black opacity-15"></div>
          </div>
        </div>
      </div>
    </>
  );
}
