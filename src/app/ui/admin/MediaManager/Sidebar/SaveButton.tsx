"use client";

import { useManagerContext } from "../ManagerContext";

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
      className='w-[290px] h-[50px] fixed bg-green text-black bottom-[20px] grow-0 flex items-center justify-center text-xl font-semibold cursor-pointer'
    >
      Save
    </div>
  );
}
