"use client";

export const Block = ({
  data,
}: {
  data: { title: string; text: (string | string[])[] };
}) => {
  return (
    <div className='border border-white p-6 break-inside md:mb-8 mb-4'>
      <h1 className='text-4xl font-bold mb-3'>{data.title}</h1>
      <div>
        {data.text.map((p, index) => (
          <div key={index} className='mb-5 last:mb-auto'>
            <div className='text-xl font-semibold'>
              {Array.isArray(p)
                ? (p as string[]).map((listItem, index) => (
                    <div key={index}>{listItem}</div>
                  ))
                : p}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
