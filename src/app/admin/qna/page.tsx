import { fetchQNA } from "@/server/pages/QNA";
import List from "@/app/ui/admin/qna/List";

export default async function Page() {
  const qnas = await fetchQNA();
  return (
    <main className="flex justify-center">
      <List qnas={qnas} />
    </main>
  );
}
