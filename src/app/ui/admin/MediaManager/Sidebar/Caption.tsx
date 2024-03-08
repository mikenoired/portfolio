"use client";

import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

export default function Caption({ fileType }: { fileType: string }) {
  const { currentModify, setCurrentModify } = useManagerContext();
  const { setLoadedMedia } = useManagerContext();
  return (
    <div className="mb-8">
      <div className="text-2xl font-semibold text-white">Caption</div>
      <input type="text" hidden defaultValue={currentModify.url} />
      <textarea
        className="mt-4 h-[150px] w-full resize-none bg-white bg-opacity-65 p-4 text-black placeholder:text-black placeholder:opacity-50"
        value={currentModify.caption}
        autoFocus
        onChange={(e) =>
          setCurrentModify({
            ...currentModify,
            caption: e.target.value,
          })
        }
      />
      <button
        className="h-[50px] w-full items-center justify-center border border-white text-xl font-bold text-white hover:bg-white hover:text-black"
        onClick={async () => {
          await fetch("http://localhost:3000/api/updateCaption", {
            method: "POST",
            body: JSON.stringify({
              url: currentModify.url,
              caption: currentModify.caption,
            }),
          });
          await fetch("http://localhost:3000/api/getMedia", {
            method: "POST",
            body: JSON.stringify({ type: fileType }),
          })
            .then((r) => r.json())
            .then((loadedMedia) => {
              setLoadedMedia(loadedMedia);
            });
        }}
      >
        Save
      </button>
    </div>
  );
}
