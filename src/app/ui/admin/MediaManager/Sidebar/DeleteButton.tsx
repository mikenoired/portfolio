import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

interface DeleteButtonProps {
  fileType: string;
  saveHandler: (selectedMedia: string[]) => void;
}

export default function DeleteButton({
  fileType,
  saveHandler,
}: DeleteButtonProps) {
  const { currentModify, setLoadedMedia, loadedMedia, selectedMedia } =
    useManagerContext();

  const handleDelete = async () => {
    await fetch(`/api/deleteMedia`, {
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
    await fetch(`/api/getMedia`, {
      method: "POST",
      body: JSON.stringify({ type: fileType }),
    })
      .then((r) => r.json())
      .then((loadedMedia) => {
        setLoadedMedia(loadedMedia);
      });
  };

  return (
    <div
      onClick={handleDelete}
      className="bg-red flex h-[50px] w-full cursor-pointer items-center justify-center text-xl font-semibold text-black"
    >
      Delete
    </div>
  );
}
