import { useManagerContext } from "../ManagerContext";

export default function SaveButton({
  saveHandler,
  toggleManager,
}: {
  saveHandler: (selectedImages: string[]) => void;
  toggleManager: (open: boolean) => void;
}) {
  const { selectedImages } = useManagerContext();
  return (
    <div
      onClick={() => {
        saveHandler(selectedImages);
        toggleManager(false);
      }}
      className='w-full h-[50px] bg-green text-black absolute bottom-[0px] flex items-center justify-center text-xl font-semibold cursor-pointer'
    >
      Save
    </div>
  );
}
