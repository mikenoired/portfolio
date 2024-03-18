"use client";

import { Reorder } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface PageBlockProps {
  data: {
    name: string;
    url: string;
  };
  onEdit: Dispatch<SetStateAction<{ name: string; url: string }[]>>;
}

export default function PageBlock({ data, onEdit }: PageBlockProps) {
  return (
    <Reorder.Item
      value={data}
      id={data.url}
      className="border"
      as="div"
      whileDrag={{ backgroundColor: "#101010" }}
    >
      <input
        className="block h-8 w-full border-0 bg-black bg-opacity-0 px-6 py-8 text-3xl font-semibold"
        type="text"
        defaultValue={data.name}
        name={data.url}
        placeholder="Page name"
        onChange={(e) =>
          onEdit((prev) =>
            prev.map((page) =>
              page.url === data.url ? { ...page, name: e.target.value } : page,
            ),
          )
        }
      />
      <span className="block border-t bg-white bg-opacity-20 px-6 py-3">
        /{data.url}
      </span>
    </Reorder.Item>
  );
}
