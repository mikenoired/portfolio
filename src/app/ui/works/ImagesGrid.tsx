export function ImagesGrid({ images }: { images: string[] }) {
  return (
    <div className='w-full p-8 masonry-sm'>
      {images.map((image, index) => (
        <div key={index} className='mb-5 relative w-full h-full'>
          <img src={`/upload/${image}`} alt='' />
        </div>
      ))}
    </div>
  );
}
