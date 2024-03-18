import PageNamings from "@/app/ui/admin/settings/PageNamings";
import { fetchPagesName } from "@/server/settings";

export default async function Page() {
  const data = await fetchPagesName();
  return (
    <div className="p-6">
      <PageNamings data={data} />
    </div>
  );
}
