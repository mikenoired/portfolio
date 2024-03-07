"use client";

import { deleteWorkByURL } from "@/server/pages/works";
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
    <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-50 pt-11">
      <form
        action={deleteWorkByURL}
        className="relative ml-auto mr-auto w-[400px] bg-white p-9 text-black"
      >
        <div
          onClick={() => toggleModal(false)}
          className="absolute right-[15px] top-[15px] h-6 w-6 cursor-pointer"
        >
          <Icon type="close" dark={true} width={20} height={20} />
        </div>
        <span className="block text-lg font-semibold">
          Do you really want to delete this work category?
        </span>
        <label className="mt-4 block">Type the URL of work:</label>
        <input
          onChange={(e) => {
            e.target.value == url
              ? setActiveButton(true)
              : setActiveButton(false);
          }}
          className="mt-4 block w-full border-b-2 bg-white p-3"
          type="text"
          name="url"
        />
        {!activeButton ? (
          <button
            type="button"
            disabled
            className="mt-6 block h-10 w-full cursor-not-allowed border-2 font-semibold opacity-35"
          >
            Yes, I do!
          </button>
        ) : (
          <button
            type="submit"
            className="mt-6 block h-10 w-full border-2 font-semibold"
          >
            Yes, I do!
          </button>
        )}
      </form>
    </div>
  );
}
