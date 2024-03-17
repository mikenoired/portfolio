"use server";

import Main from "@/app/ui/Main";
import EditPage from "@/app/ui/admin/flow/EditPage";
import { fetchFlow } from "@/server/pages/flow";

export default async function Page() {
  const flow = await fetchFlow();
  return (
    <>
      <Main className='mt-12 flex justify-center'>
        <EditPage
          images={flow?.urls || []}
          description={flow?.description || ""}
        />
      </Main>
    </>
  );
}
