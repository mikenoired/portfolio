"use client";

import { deleteQNAById, editQNA } from "@/app/lib/actions";
import { QNAForm } from "@/app/lib/definitions";
import { useState } from "react";
import Markdown from "react-markdown";

export default function EditForm({
  id,
  block,
}: {
  id: number;
  block: QNAForm;
}) {
  const updateQNA = editQNA.bind(null, Number(id));
  const [content, setContent] = useState(block.content);
  const [title, setTitle] = useState(block.title);
  return (
    <div className='mt-5 flex'>
      <div className='w-[500px] mr-7'>
        <h1 className='text-2xl font-bold mb-3'>Add new Q&A block</h1>
        <form className='p-4 border flex flex-col' action={updateQNA}>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-3'>Question</label>
            <input
              className='border bg-black p-3'
              type='text'
              name='title'
              placeholder='Who asked :P'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-xl font-semibold mb-3'>Answer</label>
            <textarea
              className='border bg-black p-3'
              name='content'
              placeholder='Bleh'
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>
          <button
            className='w-full mt-5 h-10 bg-white text-black'
            type='submit'
          >
            Update
          </button>
        </form>
        <form action={deleteQNAById}>
          <input type='text' hidden name='id' value={block.id} />
          <button className='w-full mt-5 h-10 bg-red text-black' type='submit'>
            Delete
          </button>
        </form>
      </div>
      <div className='w-[500px]'>
        <h1 className='text-2xl font-bold mb-3'>Preview</h1>
        <div className='border border-white p-6 break-inside md:mb-8 mb-4'>
          <h1 className='text-4xl font-bold mb-3'>{title}</h1>
          <div>
            <div className='prose-xl prose-ul:list-disc prose-ol:list-decimal'>
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
