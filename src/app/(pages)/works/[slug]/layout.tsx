import Header from "@/app/ui/Header";
import Main from "@/app/ui/Main";
import { Sidebar } from "@/app/ui/works/Sidebar";
import { fetchWorkCats } from "@/server/pages/works";

export default async function SlugPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const workCats = await fetchWorkCats();
  return (
    <>
      <Header border />
      <Main className="flex">
        <Sidebar data={workCats} />
        <div className="w-full md:pl-[250px]">{children}</div>
      </Main>
    </>
  );
}
