"use server";

import prisma from "@/server/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const WorksType = z.object({
  title: z.string(),
  url: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
});

const newWorkCatData = WorksType.omit({ images: true });

export async function newWorkCat(data: FormData) {
  const createCat = newWorkCatData.parse({
    title: data.get("title"),
    url: data.get("url"),
    thumbnail: data.get("thumbnail"),
  });

  const res = await prisma.work.create({
    data: createCat,
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}

export async function fetchWorkCat(url: string) {
  const data = await prisma.work.findUnique({
    where: {
      url,
    },
  });

  return data;
}

export async function fetchWorks() {
  const data = await prisma.work.findMany();
  return data;
}

export async function fetchWorkCats() {
  const data = await prisma.work.findMany({
    select: {
      title: true,
      url: true,
    },
  });
  return data;
}

export async function updateWorkCat(url: string, data: FormData) {
  const editCat = WorksType.parse({
    title: data.get("title"),
    url: data.get("url"),
    thumbnail: data.get("thumbnail"),
    images: JSON.parse(data.get("images") as string).data,
  });

  const res = await prisma.work.update({
    where: {
      url,
    },
    data: {
      title: editCat.title,
      url: editCat.url,
      thumbnail: editCat.thumbnail,
      images: editCat.images,
    },
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}

export async function deleteWorkByURL(data: FormData) {
  const url = data.get("url") as string;

  const res = await prisma.work.delete({
    where: {
      url,
    },
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}
