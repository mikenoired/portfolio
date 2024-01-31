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
  const { loadedImages, setLoadedImages } = useManagerContext();
  const { currentModify, setCurrentModify } = useManagerContext();
  const { selectedMedia, setSelectedMedia } = useManagerContext();

  useEffect(() => {
    fetch("http://localhost:3000/api/getMedia", {
      method: "POST",
      body: JSON.stringify({ type: fileType }),
    })
      .then((r) => r.json())
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
      });
    setSelectedMedia(initSelected);
  }, [setLoadedImages, initSelected, setSelectedMedia, fileType]);

  const findObjectByStr = (
    arr: MediaType[],
    url: string
  ): MediaType | undefined => {
    return arr.find((obj) => obj.url.includes(url));
  };

  const handleSelection = (image: MediaType) => {
    if (currentModify.url == image.url) {
      setCurrentModify({} as MediaType);
    } else {
      multiple
        ? setSelectedMedia([...selectedMedia, image.url])
        : setSelectedMedia([image.url]);
      setCurrentModify(findObjectByStr(loadedImages, image.url) as MediaType);
    }
  };

  const removeSelection = (image: MediaType) => {
    setSelectedMedia(selectedMedia.filter((e) => e !== image.url));
    setCurrentModify({} as MediaType);
  };

  return (
    <div className='w-full h-full p-6 overflow-y-scroll'>
      {loadedImages.length == 0 && "There's no loaded images in website :/"}
      <div className='masonry-sm sm:masonry-md md:masonry-xl w-full'>
        {loadedImages.map((image) => (
          <div
            key={image.id}
            className={clsx(
              selectedMedia.indexOf(image.url) > -1 && "border-2 border-green",
              image.url == currentModify?.url && "border-orange",
              "box-border mb-6 break-inside relative cursor-pointer"
            )}
          >
            {selectedMedia.indexOf(image.url) > -1 && (
              <div
                className={clsx(
                  "w-8 h-8 flex items-center justify-center absolute right-[0px]",
                  image.url == currentModify?.url ? "bg-orange" : "bg-green"
                )}
                onClick={() => removeSelection(image)}
              >
                <Icon type='done' dark={true} width={20} height={20} />
              </div>
            )}
            <Image
              alt={image.caption}
              width={300}
              height={300}
              src={`/upload/${image.url}`}
              onClick={() => handleSelection(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
