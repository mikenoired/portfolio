import { fetchWorkCat } from "@/app/lib/actions";
import { WorkCat } from "@/app/lib/definitions";
import { EditForm } from "@/app/ui/admin/works/EditForm";

export default async function Page({ params }: { params: { url: string } }) {
  const data = (await fetchWorkCat(params.url)) as WorkCat;

  return (
    <main className='flex justify-center'>
      {data && <EditForm data={data} />}
    </main>
  );
}
