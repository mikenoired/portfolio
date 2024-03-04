"use client";

import { useManagerContext } from "../ManagerContext";
import Caption from "./Caption";
import Delete from "./Delete";
import ExplorerButton from "./ExplorerButton";
import ImageData from "./ImageData";
import SaveButton from "./SaveButton";

export default function Sidebar({
  saveHandler,
  toggleManager,
  fileType,
  deleteHandler,
}: {
  saveHandler: (selectedMedia: string[]) => void;
  toggleManager: (open: boolean) => void;
  fileType: string;
  deleteHandler: (selectedMedia: string) => void;
}) {
  const { currentModify } = useManagerContext();

  return (
    <div className='w-[290px] shrink-0 h-full border-r overflow-y-scroll pb-[70px]'>
      <ExplorerButton fileType={fileType} />
      <div className='w-full p-6'>
        {Object.keys(currentModify).length !== 0 && (
          <>
            <ImageData
              size={currentModify.size}
              upd={currentModify.lastModified}
              type={currentModify.type}
            />
            <Caption fileType={fileType} />
            <Delete
              deleteHandler={deleteHandler}
              selectedMedia={currentModify.url}
            />
          </>
        )}
      </div>
      <SaveButton toggleManager={toggleManager} saveHandler={saveHandler} />
    </div>
  );
}
