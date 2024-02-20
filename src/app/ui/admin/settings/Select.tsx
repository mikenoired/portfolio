"use client";

import { useState } from "react";

export default function Select({
  name,
  value,
  title,
}: {
  value: { data: string | number; selected: boolean }[];
  title: string;
  name: string;
}) {
  const [selected, setSelected] = useState(value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedSelected = selected.map((item) => ({
      ...item,
      selected: item.data === e.target.value,
    }));
    setSelected(updatedSelected);
  };
  return (
    <label className='block m-4'>
      <span className='text-lg'>{title}</span>
      <input type='text' hidden value={JSON.stringify(selected)} name={name} />
      <select
        onChange={handleSelectChange}
        className='block appearance-none bg-black bg-opacity-0 border-2 py-2 px-4 rounded-none'
      >
        {selected.map((item, index) => (
          <option value={item.data} key={index} selected={item.selected}>
            {item.data}
          </option>
        ))}
      </select>
    </label>
  );
}
