import { useManagerContext } from "../ManagerContext";
import ImageData from "./ImageData";
import Caption from "./Caption";
import ExplorerButton from "./ExplorerButton";
import SaveButton from "./SaveButton";

export default function Sidebar({
  saveHandler,
  toggleManager,
}: {
  saveHandler: (selectedImages: string[]) => void;
  toggleManager: (open: boolean) => void;
}) {
  const { currentModify } = useManagerContext();

  return (
    <div className='w-[290px] h-full border-r overflow-y-scroll relative'>
      <ExplorerButton />
      <div className='w-full p-6'>
        {Object.keys(currentModify).length !== 0 && (
          <>
            <ImageData
              size={currentModify.size}
              upd={currentModify.lastModified}
              type={currentModify.type}
            />
            <Caption />
          </>
        )}
      </div>
      <SaveButton toggleManager={toggleManager} saveHandler={saveHandler} />
    </div>
  );
}
