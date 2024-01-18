"use client";

import { QNAForm } from "@/app/lib/definitions";
import Markdown from "react-markdown";

export const Block = ({ data }: { data: QNAForm }) => {
  return (
    <div className='border border-white p-6 break-inside md:mb-8 mb-4'>
      <h1 className='text-4xl font-bold mb-3'>{data.title}</h1>
      <div className='prose-xl prose-ul:list-disc prose-ol:list-decimal'>
        <Markdown>{data.content}</Markdown>
      </div>
    </div>
  );
};
