"use client";

import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";

interface SaveButtonProps {
  saveHandler: (selectedMedia: string[]) => void;
  toggleManager: (open: boolean) => void;
}

export default function SaveButton({
  saveHandler,
  toggleManager,
}: SaveButtonProps) {
  const { selectedMedia } = useManagerContext();

  const handleSave = () => {
    saveHandler(selectedMedia);
    toggleManager(false);
  };

  return (
    <div
      onClick={handleSave}
      className="bg-green fixed bottom-[20px] flex h-[50px] w-[290px] grow-0 cursor-pointer items-center justify-center text-xl font-semibold text-black"
    >
      Save
    </div>
  );
}
