"use server";

import prisma from "@/app/lib/utils";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchThumb() {
  noStore();
  const res = prisma.siteThumbnail.findFirst();
  return res;
}

export async function updateThumb(data: FormData) {
  const thumb = data.get("url") as string;
  const res = prisma.siteThumbnail.deleteMany().then(() =>
    prisma.siteThumbnail.create({
      data: {
        media: thumb,
      },
    })
  );

  revalidatePath("/admin");
  redirect("/admin");
}
