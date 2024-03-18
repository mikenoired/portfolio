import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

export default function DeleteButton({
  fileType,
  saveHandler,
}: {
  fileType: string;
  saveHandler: (selectedMedia: string[]) => void;
}) {
  const { currentModify, setLoadedMedia, loadedMedia, selectedMedia } =
    useManagerContext();
  return (
    <div
      onClick={async () => {
        await fetch("http://localhost:3000/api/deleteMedia", {
          method: "DELETE",
          body: JSON.stringify({
            url: currentModify.url,
          }),
        }).then(() => {
          setLoadedMedia(
            loadedMedia.filter((obj) => obj.url !== currentModify.url),
          );
          saveHandler(selectedMedia.filter((e) => e !== currentModify.url));
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
      className="bg-red flex h-[50px] w-full cursor-pointer items-center justify-center text-xl font-semibold text-black"
    >
      Delete
    </div>
  );
}
