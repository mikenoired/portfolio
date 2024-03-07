"use client";

import { useManagerContext } from "../ManagerContext";
import Caption from "./Caption";
import ExplorerButton from "./ExplorerButton";
import ImageData from "./ImageData";
import SaveButton from "./SaveButton";

export default function Sidebar({
  saveHandler,
  toggleManager,
  fileType,
}: {
  saveHandler: (selectedMedia: string[]) => void;
  toggleManager: (open: boolean) => void;
  fileType: string;
}) {
  const { currentModify } = useManagerContext();

  return (
    <div className="h-full w-[290px] shrink-0 overflow-y-scroll border-r pb-[70px]">
      <ExplorerButton fileType={fileType} />
      <div className="w-full p-6">
        {Object.keys(currentModify).length !== 0 && (
          <>
            <ImageData
              size={currentModify.size}
              upd={currentModify.lastModified}
              type={currentModify.type}
            />
            <Caption fileType={fileType} />
          </>
        )}
      </div>
      <SaveButton toggleManager={toggleManager} saveHandler={saveHandler} />
    </div>
  );
}
