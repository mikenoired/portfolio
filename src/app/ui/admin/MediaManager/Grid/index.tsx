"use client";

import { MediaType } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import Icon from "@/app/ui/Icon";
import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";
import Image from "next/image";
import { useEffect } from "react";

export default function Grid({
  initSelected,
  multiple,
  fileType,
}: {
  initSelected: string[];
  multiple: boolean;
  fileType: string;
}) {
  const { loadedMedia, setLoadedMedia } = useManagerContext();
  const { currentModify, setCurrentModify } = useManagerContext();
  const { selectedMedia, setSelectedMedia } = useManagerContext();

  useEffect(() => {
    fetch("http://localhost:3000/api/getMedia", {
      method: "POST",
      body: JSON.stringify({ type: fileType }),
    })
      .then((r) => r.json())
      .then((loadedMedia) => {
        setLoadedMedia(loadedMedia.reverse());
      });
    setSelectedMedia(initSelected);
  }, [setLoadedMedia, initSelected, setSelectedMedia, fileType]);

  const findObjectByStr = (
    arr: MediaType[],
    url: string,
  ): MediaType | undefined => {
    return arr.find((obj) => obj.url.includes(url));
  };

  const handleSelection = (media: MediaType) => {
    if (currentModify.url == media.url) {
      setCurrentModify({} as MediaType);
    } else {
      multiple
        ? setSelectedMedia([...selectedMedia, media.url])
        : setSelectedMedia([media.url]);
      setCurrentModify(findObjectByStr(loadedMedia, media.url) as MediaType);
    }
  };

  const removeSelection = (media: MediaType) => {
    setSelectedMedia(selectedMedia.filter((e) => e !== media.url));
    setCurrentModify({} as MediaType);
  };

  return (
    <div className="h-full w-full overflow-y-scroll p-6">
      {loadedMedia.length == 0 &&
        "There's no loaded media in website(fix it quickly!)"}
      <div className="masonry-sm sm:masonry-md md:masonry-xl w-full">
        {loadedMedia.map((media) => (
          <div
            key={media.id}
            className={cn(
              selectedMedia.indexOf(media.url) > -1 && "border-green border-2",
              media.url == currentModify?.url && "border-orange",
              "break-inside relative mb-6 box-border cursor-pointer",
            )}
          >
            {selectedMedia.indexOf(media.url) > -1 && (
              <div
                className={cn(
                  "absolute right-[0px] flex h-8 w-8 items-center justify-center",
                  media.url == currentModify?.url ? "bg-orange" : "bg-green",
                )}
                onClick={() => removeSelection(media)}
              >
                <Icon type="done" dark={true} width={20} height={20} />
              </div>
            )}
            {fileType == "image" && (
              <Image
                alt={media.caption}
                width={300}
                height={300}
                src={`/upload/${media.url}`}
                onClick={() => handleSelection(media)}
                sizes="(max-width: 640px) 100w, 640px"
              />
            )}
            {fileType == "video" && (
              <video
                src={`/upload/${media.url}`}
                onClick={() => handleSelection(media)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
