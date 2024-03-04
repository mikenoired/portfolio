import { fetchWorks } from "@/app/server/pages/works";
import { Header } from "@/app/ui/header";
import { NavButton } from "@/app/ui/works/nav-button";
import Main from "../ui/Main";

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
      <Header subMenu={links} transparent={true} />
      <Main>
        <div className="flex flex-col items-end pt-[140px] md:pt-[160px]">
          {data.map((link, index) => (
            <NavButton
              key={index}
              title={link.title}
              thumb={link.thumbnail}
              url={link.url}
            />
          ))}
        </div>
      </Main>
    </>
  );
}
