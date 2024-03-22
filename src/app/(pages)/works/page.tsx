import Header from "@/app/ui/Header";
import Main from "@/app/ui/Main";
import { NavButton } from "@/app/ui/works/NavButton";
import { fetchWorks } from "@/server/pages/works";

export default async function Page() {
  const data = await fetchWorks();
  return (
    <>
      <Header />
      <Main className="flex flex-col items-end pt-[140px] md:pt-[160px]">
        {data.map((link, index) => (
          <NavButton
            key={index}
            title={link.title}
            thumb={link.thumbnail}
            url={link.url}
          />
        ))}
      </Main>
    </>
  );
}
