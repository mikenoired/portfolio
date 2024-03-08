"use client";

import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

export default function SaveButton({
  saveHandler,
  toggleManager,
}: {
  saveHandler: (selectedMedia: string[]) => void;
  toggleManager: (open: boolean) => void;
}) {
  const { selectedMedia } = useManagerContext();
  return (
    <div
      onClick={() => {
        saveHandler(selectedMedia);
        toggleManager(false);
      }}
      className="bg-green fixed bottom-[20px] flex h-[50px] w-[290px] grow-0 cursor-pointer items-center justify-center text-xl font-semibold text-black"
    >
      Save
    </div>
  );
}
