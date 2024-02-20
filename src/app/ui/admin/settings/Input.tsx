"use client";

export default function Input({
  value,
  title,
  name,
  numeric,
  big,
}: {
  value: string | number;
  title: string;
  name: string;
  numeric?: boolean;
  big?: boolean;
}) {
  return (
    <label className='block m-4'>
      <span className='text-lg'>{title}</span>
      {big ? (
        <textarea
          className='bg-opacity-0 bg-black py-2 px-3 border-2 block'
          name={name}
          defaultValue={value}
        />
      ) : (
        <input
          className='bg-opacity-0 bg-black py-2 px-3 border-2 block'
          type='text'
          name={name}
          defaultValue={value}
          pattern={numeric ? "[0-9]" : ".*"}
        />
      )}
    </label>
  );
}
