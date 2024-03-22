"use client";

import { QNAForm } from "@/app/lib/definitions";
import mdComponents from "@/app/ui/lib/mdComponents";
import Markdown from "react-markdown";

export function Block({ data }: { data: QNAForm }) {
  return (
    <div className="border border-white p-6 break-inside md:mb-8 mb-4">
      <h1 className="text-4xl font-bold mb-3">{data.title}</h1>
      <div className="prose-xl prose-ul:list-disc prose-ol:list-decimal">
        <Markdown components={mdComponents}>{data.content}</Markdown>
      </div>
    </div>
  );
}
