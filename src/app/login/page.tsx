"use server";

import Status from "@/app/ui/login/Status";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Page() {
  const session = await getServerSession(options);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Status status={session} />
    </div>
  );
}
