import { MetaSettings } from "@/app/lib/definitions.js";
import Form from "@/app/ui/admin/settings/Form";
import { settings } from "./data.js";

export default async function Page() {
  const metaSettings = JSON.parse(settings) as MetaSettings;
  return (
    <main className='grid grid-cols-4 px-6 gap-6 relative'>
      <div className='col-start-1 col-end-2 fixed overflow-y-scroll'>
        <div className='font-semibold text-xl'>Main</div>
        <div className='font-semibold text-xl'>
          Robots
          <div className='ml-6 font-semibold text-xl'>Google Bot</div>
        </div>
        <div className='font-semibold text-xl'>Icons</div>
        <div className='font-semibold text-xl'>Manifest</div>
        <div className='font-semibold text-xl'>Apple Web App</div>
      </div>
      <div className='col-start-2 col-end-5'>
        <Form metaSettings={metaSettings} />
      </div>
    </main>
  );
}
