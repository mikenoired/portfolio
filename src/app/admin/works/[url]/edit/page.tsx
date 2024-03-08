import { WorkCat } from "@/app/lib/definitions";
import { fetchWorkCat } from "@/server/pages/works";
import { EditForm } from "@/app/ui/admin/works/EditForm";
import Main from "@/app/ui/Main";

export default async function Page({ params }: { params: { url: string } }) {
  const data = (await fetchWorkCat(params.url)) as WorkCat;

  return (
    <Main className="mt-12 flex flex-col items-center">
      {data && <EditForm data={data} />}
    </Main>
  );
}
