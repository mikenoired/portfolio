import Image from 'next/image';
import { Header } from './ui/header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='w-screen h-screen relative'>
        <Image src='/video-blank.jpg' alt='Video preview' objectFit='cover' fill />
      </div>
    </main>
  );
}
