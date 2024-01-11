"use client";

import { deleteQNAById } from "@/app/lib/actions";

export const DeleteQNA = ({ id }: { id: number }) => {
  return (
    <div className='pl-4 cursor-pointer' onClick={() => deleteQNAById(id)}>
      Delete
    </div>
  );
};
