import clsx from "clsx";
import Sidebar from "./Sidebar";
import Grid from "./Grid";
import { ManagerProvider, useManagerContext } from "./ManagerContext";

export default function ImageManager({
  active,
  initSelected,
  saveHandler,
}: {
  active: (active: boolean) => void;
  initSelected: string[];
  saveHandler: (selectedImages: string[]) => void;
}) {
  return (
    <ManagerProvider>
      <div className='w-full h-full fixed z-20 bg-black bg-opacity-50 top-[0px] p-6'>
        <div className='w-full h-full border bg-black flex'>
          <Sidebar toggleManager={active} saveHandler={saveHandler} />
          <Grid initSelected={initSelected} />
        </div>
      </div>
    </ManagerProvider>
  );
}