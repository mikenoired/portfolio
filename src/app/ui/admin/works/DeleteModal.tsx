import { deleteWorkByURL } from "@/app/lib/actions";
import Icon from "@/app/ui/Icon";
import { useState } from "react";

export function DeleteModal({
  url,
  toggleModal,
}: {
  url: string;
  toggleModal: (toggle: boolean) => void;
}) {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <div className='fixed w-screen h-screen pt-11 bg-black bg-opacity-50 z-10'>
      <form
        action={deleteWorkByURL}
        className='bg-white text-black p-9 w-[400px] ml-auto mr-auto relative'
      >
        <div
          onClick={() => toggleModal(false)}
          className='w-6 h-6 absolute right-[15px] top-[15px] cursor-pointer'
        >
          <Icon type='close' dark={true} width={20} height={20} />
        </div>
        <span className='block font-semibold text-lg'>
          Do you really want to delete this work category?
        </span>
        <label className='block mt-4'>Type the URL of work:</label>
        <input
          onChange={(e) => {
            e.target.value == url
              ? setActiveButton(true)
              : setActiveButton(false);
          }}
          className='block w-full border-b-2 bg-white p-3 mt-4'
          type='text'
          name='url'
        />
        {!activeButton ? (
          <button
            type='button'
            disabled
            className='block h-10 border-2 w-full font-semibold mt-6 opacity-35 cursor-not-allowed'
          >
            Yes, I do!
          </button>
        ) : (
          <button
            type='submit'
            className='block h-10 border-2 w-full font-semibold mt-6'
          >
            Yes, I do!
          </button>
        )}
      </form>
    </div>
  );
}
