import { fetchWorks } from "@/app/server/pages/works";
import { Header } from "@/app/ui/header";
import { NavButton } from "@/app/ui/works/nav-button";

export default async function Page() {
  const data = await fetchWorks();
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
      <main className='md:pt-[200px] pt-[180px] flex flex-col items-end'>
        {data.map((link, index) => (
          <NavButton
            key={index}
            title={link.title}
            thumb={link.thumbnail}
            url={link.url}
          />
        ))}
      </main>
    </>
  );
}
