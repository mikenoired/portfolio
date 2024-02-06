import { WorkCat } from "@/app/lib/definitions";
import { fetchWorkCat } from "@/app/server/pages/works";
import { EditForm } from "@/app/ui/admin/works/EditForm";

export default async function Page({ params }: { params: { url: string } }) {
  const data = (await fetchWorkCat(params.url)) as WorkCat;

  return (
    <main className='flex flex-col items-center'>
      {data && <EditForm data={data} />}
    </main>
  );
}
