"use server";

import Icon from "@/app/ui/Icon";
import { AnswerBlock } from "@prisma/client";
import Link from "next/link";

export default async function List({ qnas }: { qnas: AnswerBlock[] }) {
  return (
    <div className="w-full px-4 md:w-[700px]">
      {qnas.length !== 0 ? (
        qnas.map((block, index) => (
          <div key={index} className="mb-5 flex justify-between border p-5">
            <div className="max-w-fit">{block.title}</div>
            <div className="flex">
              <Link
                href={`qna/${block.id}/edit`}
                className="cursor-pointer pl-4"
              >
                <Icon
                  className="-mt-[3px]"
                  width={25}
                  height={25}
                  type="edit"
                  dark={false}
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="py-5 text-center text-2xl font-bold">
          There is no blocks :(
        </div>
      )}
      <Link
        href="qna/new"
        className="flex justify-center border p-5 hover:bg-white hover:text-black"
      >
        Add new
      </Link>
    </div>
  );
}
