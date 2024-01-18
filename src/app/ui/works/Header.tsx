import Image from "next/image";

export function Header({
  title,
  thumb,
}: {
  title: string;
  thumb: string | undefined;
}) {
  return (
    <div className='h-[90px] relative bg-center bg-no-repeat bg-cover overflow-hidden w-full border-b'>
      <div className='absolute px-8 text-[64px] font-bold h-full z-[1]'>
        {title}
      </div>
      <div className='bg-black absolute opacity-15 w-full h-[88px]'></div>
      <Image
        src={`/upload/${thumb as string}`}
        alt='thumb'
        fill
        objectFit='cover'
      />
    </div>
  );
}
