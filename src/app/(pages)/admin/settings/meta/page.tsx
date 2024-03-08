import { ISettings } from "@/app/lib/definitions";
import { fetchMeta } from "@/server/settings";
import Form from "@/app/ui/admin/settings/Form";

export default async function Page() {
  const data = await fetchMeta();
  return <div className="p-6">{data && <Form s={data as ISettings} />}</div>;
}
