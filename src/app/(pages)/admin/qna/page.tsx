import { fetchQNA } from "@/server/pages/QNA";
import List from "@/app/ui/admin/qna/List";
import Main from "@/app/ui/Main";

export default async function Page() {
  const qnas = await fetchQNA();
  return (
    <Main className="mt-12 flex justify-center">
      <List qnas={qnas} />
    </Main>
  );
}
