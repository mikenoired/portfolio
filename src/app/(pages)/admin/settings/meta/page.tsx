import { ISettings } from "@/app/lib/definitions";
import { fetchSettings } from "@/server/settings";
import Form from "@/app/ui/admin/settings/Form";

export default async function Page() {
  const data = await fetchSettings();
  return <div className="p-6">{data && <Form s={data as ISettings} />}</div>;
}
