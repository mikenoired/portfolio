"use server";

import prisma from "@/app/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { writeFile } from "fs/promises";

const QNASchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

const newQNAData = QNASchema.omit({ id: true });

export async function newQNA(data: FormData) {
  const createBlock = newQNAData.parse({
    title: data.get("title"),
    content: data.get("content"),
  });

  const block = await prisma.answerBlock.create({
    data: createBlock,
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function editQNA(id: number, data: FormData) {
  const editBlock = QNASchema.parse({
    id: id,
    title: data.get("title"),
    content: data.get("content"),
  });

  const block = await prisma.answerBlock.update({
    where: {
      id: editBlock.id,
    },
    data: {
      title: editBlock.title,
      content: editBlock.content,
    },
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function deleteQNAById(currentId: number) {
  const action = await prisma.answerBlock.delete({
    where: {
      id: currentId,
    },
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function fetchQNAById(id: number) {
  const data = await prisma.answerBlock.findUnique({
    where: {
      id: Number(id),
    },
  });

  return data;
}

const WorkImageType = z.object({
  id: z.number(),
  url: z.string(),
  caption: z.string(),
});

const WorksType = z.object({
  title: z.string(),
  url: z.string(),
  thumbnail: z.string(),
  images: z.array(WorkImageType),
});

const newWorkCatData = WorksType.omit({ images: true });

export async function newWorkCat(data: FormData) {
  const image = data.get("thumbnail") as File;
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const filename = `${Date.now()}-${image.name}`;
  const uploadDir = `./public/upload/${filename}`;

  writeFile(uploadDir, buffer);

  const createCat = newWorkCatData.parse({
    title: data.get("title"),
    url: data.get("url"),
    thumbnail: filename,
  });

  const action = await prisma.work.create({
    data: createCat,
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}
