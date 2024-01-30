import Markdown from "react-markdown";

export default function Content({ data }: { data: string }) {
  return (
    <div className='prose-xl prose-ul:list-disc prose-ol:list-decimal pl-6'>
      <Markdown>{data}</Markdown>
    </div>
  );
}
