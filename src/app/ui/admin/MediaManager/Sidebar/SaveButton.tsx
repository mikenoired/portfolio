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
      className='w-full h-[50px] absolute bg-green text-black bottom-[0px] flex items-center justify-center text-xl font-semibold cursor-pointer'
    >
      Save
    </div>
  );
}
