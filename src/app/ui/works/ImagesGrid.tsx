import Image from "next/image";

export function ImagesGrid({ images }: { images: string[] }) {
  return (
    <div className='w-full p-8 masonry-sm'>
      {images.map((image, index) => (
        <div key={index} className='relative w-full h-12'>
          <Image src={`/upload/${image}`} fill objectFit='contain' alt='' />
        </div>
      ))}
    </div>
  );
}
