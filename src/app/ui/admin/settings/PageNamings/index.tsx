import PageBlock from "./PageBlock";

export default function PageNamings({
  data,
}: {
  data: {
    about: string;
    admin: string;
    qna: string;
    works: string;
    id: number;
  } | null;
}) {
  return (
    <div className="pb-8">
      <h1 className="mb-6 text-4xl font-bold">Page naming</h1>
      {data !== null && (
        <div className="grid grid-cols-4 gap-4">
          <PageBlock name={data.about} url="about" />
          <PageBlock name={data.admin} url="admin" />
          <PageBlock name={data.qna} url="qna" />
          <PageBlock name={data.works} url="works" />
        </div>
      )}
    </div>
  );
}
