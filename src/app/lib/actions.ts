'use server';

import { db } from '@/app/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteQNAById(currentId: number) {
  const action = await db.answerBlock.delete({
    where: {
      id: currentId
    }
  });

  revalidatePath('/admin/qna');
  redirect('/admin/qna');
}