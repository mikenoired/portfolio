"use server";

import prisma from "@/app/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
