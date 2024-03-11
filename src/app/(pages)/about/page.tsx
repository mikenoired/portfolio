import { PersonType } from "@/app/lib/definitions";
import { Header } from "@/app/ui/Header";
import Main from "@/app/ui/Main";
import Content from "@/app/ui/about/Content";
import Person from "@/app/ui/about/Person";
import { fetchAboutContent, fetchPersonCard } from "@/server/pages/about";
import { fetchWorks } from "@/server/pages/works";

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
      <Header subMenu={links} transparent border />
      <Main className='flex w-full p-4 md:p-8'>
        <Person data={personData as PersonType} />
        <Content data={aboutContent?.content as string} />
      </Main>
    </>
  );
}
