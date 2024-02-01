export default function File({ name, title }: { title: string; name: string }) {
  return (
    <label className='m-4'>
      <span className='text-lg ml-4'>{title}</span>
      <input type='file' accept='*' multiple={false} name={name} />
    </label>
  );
}
