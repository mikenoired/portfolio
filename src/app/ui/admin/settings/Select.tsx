"use client";

import { useState } from "react";

interface SelectProps {
  value: { data: string | number; selected: boolean }[];
  title: string;
  name: string;
}

export default function Select({ name, value, title }: SelectProps) {
  const [selected, setSelected] = useState(value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedSelected = selected.map((item) => ({
      ...item,
      selected: item.data === e.target.value,
    }));
    setSelected(updatedSelected);
  };
  return (
    <label className="m-4 block">
      <span className="text-lg">{title}</span>
      <input type="text" hidden value={JSON.stringify(selected)} name={name} />
      <select
        onChange={handleSelectChange}
        className="block appearance-none rounded-none border-2 bg-black bg-opacity-0 px-4 py-2"
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
