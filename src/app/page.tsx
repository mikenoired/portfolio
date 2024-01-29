import Image from "next/image";
import { Header } from "./ui/header";

export default function Home() {
  return (
    <>
      <Header transparent={true} />
      <main>
        <div className='w-screen h-screen relative'>
          <Image
            src='/upload/video-blank.jpg'
            alt='Video preview'
            objectFit='cover'
            fill
          />
        </div>
      </main>
    </>
  );
}
