"use client";

import Icon from "@/app/ui/Icon";
import { useManagerContext } from "@/app/ui/admin/MediaManager/ManagerContext";
import Caption from "./Caption";
import ExplorerButton from "./ExplorerButton";
import ImageData from "./ImageData";
import SaveButton from "./SaveButton";

interface SidebarProps {
  saveHandler: (selectedMedia: string[]) => void;
  toggleManager: (open: boolean) => void;
  fileType: string;
}

export default function Sidebar({
  saveHandler,
  toggleManager,
  fileType,
}: SidebarProps) {
  const { currentModify, selectedMedia, loadedMedia } = useManagerContext();

  return (
    <div className="h-full w-[290px] shrink-0 overflow-y-scroll border-r pb-[70px]">
      <div className="w-full flex justify-between">
        <button
          className="h-8 w-8 bg-red flex justify-center items-center"
          type="button"
          onClick={() => toggleManager(false)}
        >
          <Icon type="close" dark={true} width={15} height={15} />
        </button>
        <div className="text-md font-medium text-white flex items-center justify-center px-4 w-full">
          <span className="mr-4">Selected: {selectedMedia.length}</span>
          <span>Total: {loadedMedia.length}</span>
        </div>
      </div>
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
