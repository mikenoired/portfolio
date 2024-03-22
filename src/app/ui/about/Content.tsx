import mdComponents from "@/app/ui/lib/mdComponents";
import { globalProse } from "@/app/ui/lib/prose";
import Markdown from "react-markdown";

export default function Content({ data }: { data: string }) {
  return (
    <div className={`prose-lg pl-6 ${globalProse}`}>
      <Markdown components={mdComponents}>{data}</Markdown>
    </div>
  );
}
