"use server";

import Main from "@/app/ui/Main";
import EditPage from "@/app/ui/admin/flow/EditPage";

export default async function Page() {
  return (
    <>
      <Main className='mt-12 flex justify-center'>
        <EditPage images={[]} />
      </Main>
    </>
  );
}
