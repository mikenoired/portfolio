import { fetchWorks } from "@/server/pages/works";
import List from "@/app/ui/admin/works/List";
import Main from "@/app/ui/Main";

export default async function Page() {
  const works = await fetchWorks();
  return (
    <Main className="mt-12 flex justify-center">
      <List works={works} />
    </Main>
  );
}
