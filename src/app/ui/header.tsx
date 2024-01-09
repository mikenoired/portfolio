export const Header = () => {
  return (
    <header className='w-full flex justify-between pl-8 pr-8 items-center h-12 border-b border-white bg-black fixed'>
      <div className='text-2xl font-semibold uppercase'>Mikenoired</div>
      <nav className='flex items-center text-xl'>
        <div className='cursor-pointer'>WORKS</div>
        <div className='pl-5 cursor-pointer'>Q/A</div>
        <div className='pl-5 cursor-pointer'>ABOUT</div>
      </nav>
    </header>
  );
}