import { MediaType } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";
import { useManagerContext } from "../ManagerContext";

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
        setLoadedMedia(loadedMedia);
      });
    setSelectedMedia(initSelected);
  }, [setLoadedMedia, initSelected, setSelectedMedia, fileType]);

  const findObjectByStr = (
    arr: MediaType[],
    url: string
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
    <div className='w-full h-full p-6 overflow-y-scroll'>
      {loadedMedia.length == 0 && "There's no loaded images in website :/"}
      <div className='masonry-sm sm:masonry-md md:masonry-xl w-full'>
        {loadedMedia.map((media) => (
          <div
            key={media.id}
            className={clsx(
              selectedMedia.indexOf(media.url) > -1 && "border-2 border-green",
              media.url == currentModify?.url && "border-orange",
              "box-border mb-6 break-inside relative cursor-pointer"
            )}
          >
            {selectedMedia.indexOf(media.url) > -1 && (
              <div
                className={clsx(
                  "w-8 h-8 flex items-center justify-center absolute right-[0px]",
                  media.url == currentModify?.url ? "bg-orange" : "bg-green"
                )}
                onClick={() => removeSelection(media)}
              >
                <Icon type='done' dark={true} width={20} height={20} />
              </div>
            )}
            {fileType == "image" && (
              <Image
                alt={media.caption}
                width={300}
                height={300}
                src={`/upload/${media.url}`}
                onClick={() => handleSelection(media)}
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
