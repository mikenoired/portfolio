"use server";
import prisma from "@/server/prisma";

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
  return res;
}
