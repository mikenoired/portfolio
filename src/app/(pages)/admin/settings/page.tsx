import { ISettings } from "@/app/lib/definitions";
import { fetchSettings } from "@/server/settings";
import Form from "@/app/ui/admin/settings/Form";
import Main from "@/app/ui/Main";

export default async function Page() {
  const data = await fetchSettings();
  return (
    <Main className="grid grid-cols-4 gap-6 p-6">
      <div className="fixed col-start-1 col-end-2 overflow-y-scroll">
        <a href="#main" className="block text-xl font-semibold">
          Main
        </a>
        <a href="#robots" className="block text-xl font-semibold">
          Robots
        </a>
        <a href="#google" className="ml-6 block text-xl font-semibold">
          Google Bot
        </a>
        <a href="#icons" className="block text-xl font-semibold">
          Icons
        </a>
        <a href="#apple" className="block text-xl font-semibold">
          Apple Web App
        </a>
        <a href="#viewport" className="block text-xl font-semibold">
          Viewport
        </a>
      </div>
      <div className="col-start-2 col-end-5">
        {data && <Form s={data as ISettings} />}
      </div>
    </Main>
  );
}
