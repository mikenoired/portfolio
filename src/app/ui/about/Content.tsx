import { globalProse } from "@/app/ui/lib/prose";
import Markdown from "react-markdown";

export default function Content({ data }: { data: string }) {
  return (
    <div className={`prose-lg pl-6 ${globalProse}`}>
      <Markdown>{data}</Markdown>
    </div>
  );
}
