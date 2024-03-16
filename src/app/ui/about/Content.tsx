import { linkStyle } from "@/app/ui/lib/linkStyle";
import { globalProse } from "@/app/ui/lib/prose";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Content({ data }: { data: string }) {
  return (
    <div className={`prose-lg pl-6 ${globalProse}`}>
      <Markdown
        components={{
          a: (props) => (
            <Link className={linkStyle} href={props.href as string}>
              {props.children}
            </Link>
          ),
        }}
      >
        {data}
      </Markdown>
    </div>
  );
}
