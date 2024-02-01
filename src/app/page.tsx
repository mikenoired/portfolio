import { fetchThumb, fetchWorks } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";

export default async function Home() {
  const thumb = await fetchThumb();
  const fetchWorksCats = await fetchWorks();
  let links: { title: string; url: string }[] = [];
  const workCats = () => {
    fetchWorksCats.map((cat) => {
      links.push({
        title: cat.title,
        url: cat.url,
      });
    });
    console.log(links);
  };
  workCats();
  return (
    <>
      <Header subMenu={links} transparent={true} />
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
