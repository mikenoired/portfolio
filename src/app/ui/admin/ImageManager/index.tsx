import Grid from "./Grid";
import { ManagerProvider } from "./ManagerContext";
import Sidebar from "./Sidebar";

export default function ImageManager({
  active,
  initSelected,
  saveHandler,
  multiple,
}: {
  active: (active: boolean) => void;
  initSelected: string[];
  saveHandler: (selectedImages: string[]) => void;
  multiple: boolean;
}) {
  return (
    <ManagerProvider>
      <div className='w-full h-full fixed z-20 bg-black bg-opacity-50 top-[0px] p-6'>
        <div className='w-full h-full border bg-black flex'>
          <Sidebar toggleManager={active} saveHandler={saveHandler} />
          <Grid multiple={multiple} initSelected={initSelected} />
        </div>
      </div>
    </ManagerProvider>
  );
}
