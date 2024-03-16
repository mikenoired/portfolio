"use client";

import { QNAForm } from "@/app/lib/definitions";
import { linkStyle } from "@/app/ui/lib/linkStyle";
import Link from "next/link";
import Markdown from "react-markdown";

export function Block({ data }: { data: QNAForm }) {
  return (
    <div className='border border-white p-6 break-inside md:mb-8 mb-4'>
      <h1 className='text-4xl font-bold mb-3'>{data.title}</h1>
      <div className='prose-xl prose-ul:list-disc prose-ol:list-decimal'>
        <Markdown
          components={{
            a: (props) => (
              <Link className={linkStyle} href={props.href as string}>
                {props.children}
              </Link>
            ),
          }}
        >
          {data.content}
        </Markdown>
      </div>
    </div>
  );
}
