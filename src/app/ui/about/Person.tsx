import { PersonType } from "@/app/lib/definitions";
import Icon from "@/app/ui/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Person({ data }: { data: PersonType }) {
  return (
    <div className='max-w-[400px]'>
      <div className='w-[300px] h-[300px] relative'>
        <Image
          alt=''
          fill
          className='object-cover'
          src={`/upload/${data.avatar}`}
        />
      </div>
      <div className='text-[28px] font-bold mt-3'>{data.name}</div>
      <div className='text-2xl font-semibold mt-3'>{data.job}</div>
      <div className='text-xl font-semibold mt-3'>{data.place}</div>
      <div className='mt-6 flex flex-col'>
        {data.socials &&
          data.socials.map((link, index) => (
            <div key={index} className='mb-3'>
              <Link
                className='text-xl font-semibold relative pr-6'
                href={link.url}
              >
                {link.name}
                <Icon
                  className='absolute top-[4px] right-[0]'
                  type='link'
                  width={14}
                  height={14}
                  dark={false}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
