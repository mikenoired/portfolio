import { fetchThumb } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";
import Image from "next/image";

export default async function Home() {
  const thumb = await fetchThumb();
  return (
    <>
      <Header transparent={true} />
      <main>
        <div className='w-screen h-screen relative'>
          <Image
            src={`/upload/${thumb?.media}`}
            alt='Video preview'
            className='object-cover'
            fill
          />
        </div>
      </main>
    </>
  );
}
