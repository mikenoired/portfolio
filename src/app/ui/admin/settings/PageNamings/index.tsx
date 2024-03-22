"use client";

import { LinkType } from "@/app/lib/definitions";
import { updatePageNames } from "@/server/settings";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import PageBlock from "./PageBlock";

export default function PageNamings({ data }: { data: LinkType[] }) {
  const [pages, setPages] = useState(data);
  const [changed, isChanged] = useState(false);

  useEffect(() => {
    isChanged(data !== pages);
  }, [data, pages]);

  const handleSubmit = async () => {
    await updatePageNames(pages);
    isChanged(false);
  };

  return (
    <form onSubmit={handleSubmit} className="pb-8">
      <h1 className="mb-6 text-4xl font-bold">Page naming</h1>
      <Reorder.Group
        axis="x"
        values={pages}
        onReorder={setPages}
        className="flex gap-4 flex-nowrap"
        as="div"
      >
        {pages?.map((page) => (
          <PageBlock key={page.url} data={page} onEdit={setPages} />
        ))}
      </Reorder.Group>
      {changed && (
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="h-[50px] w-[200px] items-center justify-center border border-white text-xl font-bold text-white hover:bg-white hover:text-black"
          >
            Save
          </button>
        </div>
      )}
    </form>
  );
}
