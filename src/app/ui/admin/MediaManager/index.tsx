"use client";

import { FileType } from "@/app/lib/definitions";
import { useEffect } from "react";
import Grid from "./Grid";
import { ManagerProvider } from "./ManagerContext";
import Sidebar from "./Sidebar";

export default function MediaManager({
  active,
  initSelected,
  saveHandler,
  multiple,
  fileType,
}: {
  active: (active: boolean) => void;
  initSelected: string[];
  saveHandler: (selectedMedia: string[]) => void;
  multiple: boolean;
  fileType: FileType["type"];
}) {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        active(false);
      }
    });
  });
  return (
    <ManagerProvider>
      <div className="fixed left-[0px] top-[0px] z-20 h-full w-full bg-black bg-opacity-50 p-6">
        <div className="flex h-full w-full border bg-black">
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
