import { useManagerContext } from "../ManagerContext";

export default function Caption() {
  const { currentModify, setCurrentModify } = useManagerContext();
  const { setLoadedImages } = useManagerContext();
  return (
    <div className='mb-8'>
      <div className='text-white text-2xl font-semibold'>Caption</div>
      <input type='text' hidden defaultValue={currentModify.url} />
      <textarea
        className='w-full resize-none h-[150px] p-4 mt-4 bg-white bg-opacity-65 text-black placeholder:text-black placeholder:opacity-50'
        value={currentModify.caption}
        autoFocus
        onChange={(e) =>
          setCurrentModify({
            ...currentModify,
            caption: e.target.value,
          })
        }
      />
      <button
        className='text-white border-white border w-full text-xl font-bold h-[50px] justify-center items-center hover:bg-white hover:text-black'
        onClick={async () => {
          await fetch("http://localhost:3000/api/updateCaption", {
            method: "POST",
            body: JSON.stringify({
              url: currentModify.url,
              caption: currentModify.caption,
            }),
          });
          await fetch("http://localhost:3000/api/getImages", {
            method: "GET",
          })
            .then((r) => r.json())
            .then((loadedImages) => {
              setLoadedImages(loadedImages);
            });
        }}
      >
        Save
      </button>
    </div>
  );
}
