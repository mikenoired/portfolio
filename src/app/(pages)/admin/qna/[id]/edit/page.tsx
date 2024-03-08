import { QNAForm } from "@/app/lib/definitions";
import { fetchQNAById } from "@/server/pages/QNA";
import EditForm from "@/app/ui/admin/qna/EditForm";
import Main from "@/app/ui/Main";

export default async function Page({ params }: { params: { id: number } }) {
  const block = await fetchQNAById(params.id);
  return (
    <Main className="mt-12 flex justify-center">
      <EditForm block={block as QNAForm} id={params.id} />
    </Main>
  );
}
