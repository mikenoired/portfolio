import { deleteWorkByURL } from "@/app/lib/actions";
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
          <svg viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M11.2929 12.4142L20.5858 21.7071L22 20.2929L12.7071 11L22 1.70712L20.5858 0.292908L11.2929 9.5858L2 0.292908L0.585785 1.70712L9.87868 11L0.585785 20.2929L2 21.7071L11.2929 12.4142Z'
              fill='#000000'
            />
          </svg>
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
