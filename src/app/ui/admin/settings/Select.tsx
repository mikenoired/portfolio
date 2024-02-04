export default function Select({
  name,
  value,
  title,
}: {
  value: { data: string | number; selected: boolean }[];
  title: string;
  name: string;
}) {
  return (
    <label className='block m-4'>
      <span className='text-lg'>{title}</span>
      <select
        className='block appearance-none bg-black bg-opacity-0 border-2 py-2 px-4 rounded-none'
        name={name}
      >
        {value.map((item, index) => (
          <option value={item.data} key={index} selected={item.selected}>
            {item.data}
          </option>
        ))}
      </select>
    </label>
  );
}
