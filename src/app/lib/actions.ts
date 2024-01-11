'use server';

import { db } from '@/app/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from "zod";

const createQNASchema = z.object({
  title: z.string(),
  content: z.string(),
});

export async function newQNA(data: FormData) {
  const createBlock = createQNASchema.parse({
    title: data.get("title"),
    content: data.get("content"),
  });

  const block = await db.answerBlock.create({
    data: createBlock,
  });
}

export async function deleteQNAById(currentId: number) {
  const action = await db.answerBlock.delete({
    where: {
      id: currentId
    }
  });

  revalidatePath('/admin/qna');
  redirect('/admin/qna');
}