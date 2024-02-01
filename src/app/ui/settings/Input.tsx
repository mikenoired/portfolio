export default function Input({
  value,
  title,
  name,
}: {
  value: string | number;
  title: string;
  name: string;
}) {
  return (
    <label className='block m-4'>
      <span className='text-lg'>{title}</span>
      <input
        className='bg-opacity-0 bg-black p-2 border-2 block'
        type='text'
        name={name}
        defaultValue={value}
      />
    </label>
  );
}
