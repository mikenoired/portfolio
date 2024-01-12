import EditForm from "@/app/ui/admin/qna/EditForm";
import { fetchQNAById } from "@/app/lib/actions";
import { QNAForm } from "@/app/lib/definitions";

export default async function Page({ params }: { params: { id: number } }) {
  const block = await fetchQNAById(params.id);
  return (
    <main className='flex justify-center'>
      <EditForm block={block as QNAForm} id={params.id} />
    </main>
  );
}
