import { Header } from "@/app/ui/header";
import { NavButton } from "@/app/ui/works/nav-button";
import { fetchWorks } from "../lib/actions";

export default async function Page() {
  const data = await fetchWorks();
  return (
    <>
      <Header transparent={false} />
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
