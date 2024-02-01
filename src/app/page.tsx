import { fetchThumb } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";

export default async function Home() {
  const thumb = await fetchThumb();
  return (
    <>
      <Header transparent={true} />
      <main>
        <div className='w-screen h-screen relative'>
          <video
            src={`/upload/${thumb?.media}`}
            autoPlay
            controls={false}
            muted
            loop
            className='object-cover w-dvw h-dvh'
          />
        </div>
      </main>
    </>
  );
}
