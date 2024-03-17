"use client";

import { FileType } from "@/app/lib/definitions";
import { useEffect } from "react";
import Grid from "./Grid";
import { ManagerProvider } from "./ManagerContext";
import Sidebar from "./Sidebar";

interface MediaManagerParams {
  active: (active: boolean) => void;
  initSelected: string[];
  saveHandler: (selectedMedia: string[]) => void;
  multiple: boolean;
  fileType: FileType["type"];
}

/**
 * @description Component for managing media files.
 * @param {function} active - Function to set the active state
 * @param {string[]} initSelected - Array of initial selected media
 * @param {function} saveHandler - Function to handle saving selected media
 * @param {boolean} multiple - Allow multiple files to be selected
 * @param {string} fileType - Type of file
 * @return {JSX.Element} The TSX element representing the media manager component
 */
export default function MediaManager({
  active,
  initSelected,
  saveHandler,
  multiple,
  fileType,
}: MediaManagerParams): JSX.Element {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      active(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => handleEscape);
    return () => {
      document.removeEventListener("keydown", (e) => handleEscape);
    };
  });
  return (
    <ManagerProvider>
      <div className='fixed left-[0px] top-[0px] z-20 h-full w-full bg-black bg-opacity-50 p-6'>
        <div className='flex h-full w-full border bg-black'>
          <Sidebar
            fileType={fileType}
            toggleManager={active}
            saveHandler={saveHandler}
          />
          <Grid
            fileType={fileType}
            multiple={multiple}
            initSelected={initSelected}
          />
        </div>
      </div>
    </ManagerProvider>
  );
}
