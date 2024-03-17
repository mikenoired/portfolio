"use server";
import prisma from "@/server/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchFlow() {
  const data = await prisma.flow.findFirst();
  return data;
}

export async function updateFlow(data: FormData) {
  const res = await prisma.flow.update({
    where: {
      id: 1,
    },
    data: {
      urls: JSON.parse(data.get("urls") as string),
      description: data.get("description") as string,
    },
  });
  if (res) {
    revalidatePath("/admin/flow");
    redirect("/admin/flow");
  }
  return res;
}
