import { PersonType } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import { linkStyle } from "@/app/ui/lib/linkStyle";
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
                className={cn("text-xl font-semibold", linkStyle)}
                href={link.url}
              >
                {link.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
