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
      className='w-full h-[50px] bg-green text-black absolute bottom-[0px] flex items-center justify-center text-xl font-semibold cursor-pointer'
    >
      Save
    </div>
  );
}
