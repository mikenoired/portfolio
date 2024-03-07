"use client";

import { newQNA } from "@/server/pages/QNA";
import { useState } from "react";
import Markdown from "react-markdown";

export function CreateForm() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div className="mt-5 flex">
      <div className="mr-7 w-[500px]">
        <h1 className="mb-3 text-2xl font-bold">Add new Q&A block</h1>
        <form className="flex flex-col border p-4" action={newQNA}>
          <div className="flex flex-col">
            <label className="mb-3 text-xl font-semibold">Question</label>
            <input
              className="border bg-black p-3"
              type="text"
              name="title"
              placeholder="Who asked :P"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus
            />
          </div>
          <div className="mt-4 flex flex-col">
            <label className="mb-3 text-xl font-semibold">Answer</label>
            <textarea
              className="min-h-[200px] border bg-black p-3"
              name="content"
              placeholder="Bleh"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>
          <button
            className="mt-5 h-10 w-full bg-white text-black"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
      <div className="w-[500px]">
        <h1 className="mb-3 text-2xl font-bold">Preview</h1>
        <div className="break-inside mb-4 border border-white p-6 md:mb-8">
          <h1 className="mb-3 text-4xl font-bold">{title}</h1>
          <div>
            <div className="prose-xl prose-ul:list-disc prose-ol:list-decimal">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
