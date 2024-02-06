import { fetchSettings } from "@/app/lib/actions";
import { ISettings } from "@/app/lib/definitions";
import Form from "@/app/ui/admin/settings/Form";

export default async function Page() {
  const data = await fetchSettings();
  return (
    <main className='grid grid-cols-4 px-6 gap-6 relative'>
      <div className='col-start-1 col-end-2 fixed overflow-y-scroll'>
        <a href='#main' className='font-semibold text-xl block'>
          Main
        </a>
        <a href='#robots' className='font-semibold text-xl block'>
          Robots
          <a href='#google' className='ml-6 font-semibold text-xl block'>
            Google Bot
          </a>
        </a>
        <a href='#icons' className='font-semibold text-xl block'>
          Icons
        </a>
        <a href='#apple' className='font-semibold text-xl block'>
          Apple Web App
        </a>
        <a href='#viewport' className='font-semibold text-xl block'>
          Viewport
        </a>
      </div>
      <div className='col-start-2 col-end-5'>
        {data && <Form s={JSON.parse(data as string) as ISettings} />}
      </div>
    </main>
  );
}
