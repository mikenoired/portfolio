import { fetchSettings } from "@/app/lib/actions";
import { ISettings } from "@/app/lib/definitions";
import Form from "@/app/ui/admin/settings/Form";

export default async function Page() {
  const data = await fetchSettings();
  return (
    <main className='grid grid-cols-4 px-6 gap-6 relative'>
      <div className='col-start-1 col-end-2 fixed overflow-y-scroll'>
        <div className='font-semibold text-xl'>Main</div>
        <div className='font-semibold text-xl'>
          Robots
          <div className='ml-6 font-semibold text-xl'>Google Bot</div>
        </div>
        <div className='font-semibold text-xl'>Icons</div>
        <div className='font-semibold text-xl'>Apple Web App</div>
        <div className='font-semibold text-xl'>Viewport</div>
      </div>
      <div className='col-start-2 col-end-5'>
        {data && (
          <Form metaSettings={JSON.parse(data as string) as ISettings} />
        )}
      </div>
    </main>
  );
}
