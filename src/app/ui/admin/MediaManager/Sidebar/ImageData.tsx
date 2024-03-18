"use client";

import { formatDate } from "@/app/lib/utils";
import { formatBytes } from "@/server/prisma";

export default function ImageData({
  size,
  type,
  upd,
}: {
  size: string;
  type: string;
  upd: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-white text-2xl font-semibold">Image data</div>
      <div className="mt-5 font-medium text-base text-nowrap">
        <div className="flex items-center mb-4">
          <div>File size</div>
          <div className="h-2 bg-white w-full mx-4" />
          <div>{formatBytes(Number(size))}</div>
        </div>
        <div className="flex items-center mb-4">
          <div>Type</div>
          <div className="h-2 bg-white w-full mx-4" />
          <div>{type}</div>
        </div>
        <div className="flex items-center mb-4">
          <div>Upd.</div>
          <div className="h-2 bg-white w-full mx-4" />
          <div>
            <div>{`${formatDate(upd).hours}:${formatDate(upd).minutes}:${
              formatDate(upd).seconds
            }`}</div>
            <div>
              <div>{`${formatDate(upd).day}.${formatDate(upd).month}.${
                formatDate(upd).year
              }`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
