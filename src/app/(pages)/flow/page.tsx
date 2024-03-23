"use server";

import { formatBytes } from "@/app/lib/utils";
import Heading from "@/app/ui/flow/Heading";
import Main from "@/app/ui/Main";
import { fetchMediaByURLs } from "@/server/media";
import { fetchFlow } from "@/server/pages/flow";
import Image from "next/image";

const pageTitle = "Поток".toUpperCase().split("");

export default async function Page() {
  const flow = await fetchFlow();
  const images = await fetchMediaByURLs(flow?.urls as string[]);
  return (
    <>
      <Main moveTop={true}>
        {flow ? (
          <>
            <Heading name={pageTitle} />
            <p className="w-full p-6 md:p-10 sm:p-8 text-xl">
              {flow.description}
            </p>
            <div className="w-full">
              {flow.urls.reverse().map((url, index) => (
                <div className="flex">
                  <div
                    className="rotate-180 p-3 py-5"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    <span className="pb-5">{images[index]?.url}</span>
                    <span>{formatBytes(Number(images[index]?.size))}</span>
                  </div>
                  <Image
                    key={index}
                    src={`/upload/${url}`}
                    alt={url}
                    width={200}
                    height={200}
                    sizes="2680w"
                    className="w-full"
                    quality={80}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>Loading...</>
        )}
      </Main>
    </>
  );
}
