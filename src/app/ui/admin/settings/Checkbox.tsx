"use client";

import { useState } from "react";

export default function Checkbox({
  name,
  value,
  title,
}: {
  value: boolean;
  title: string;
  name: string;
}) {
  const [isChecked, setChecked] = useState(value);
  return (
    <label className='flex items-center m-4'>
      <input type='text' name={name} hidden value={isChecked ? "on" : "off"} />
      <input
        className='appearance-none relative w-6 h-6 bg-black bg-opacity-0 border-2 cursor-pointer checked:before:content-[""] checked:before:w-4 checked:before:h-4 checked:before:block checked:before:absolute checked:before:top-[3px] checked:before:left-[3px] checked:before:bg-white'
        type='checkbox'
        onChange={() => setChecked(!isChecked)}
        defaultChecked={value}
      />
      <span className='text-lg ml-4'>{title}</span>
    </label>
  );
}
