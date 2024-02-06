import {
  fetchAboutContent,
  fetchPersonCard,
  fetchWorks,
} from "@/app/lib/actions";
import { PersonType } from "@/app/lib/definitions";
import Content from "@/app/ui/about/Content";
import Person from "@/app/ui/about/Person";
import { Header } from "@/app/ui/header";

export default async function Page() {
  const personData = await fetchPersonCard();
  const aboutContent = await fetchAboutContent();
  const fetchWorksCats = await fetchWorks();
  let links: { title: string; url: string }[] = [];
  const workCats = () => {
    fetchWorksCats.map((cat) => {
      links.push({
        title: cat.title,
        url: cat.url,
      });
    });
  };
  workCats();
  return (
    <>
      <Header subMenu={links} transparent={false} />
      <main className='md:pt-12 pt-10'>
        <div className='md:p-8 p-4 w-full flex'>
          <Person data={personData as PersonType} />
          <Content data={aboutContent?.content as string} />
        </div>
      </main>
    </>
  );
}
