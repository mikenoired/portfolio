"use server";

import Heading from "@/app/ui/flow/Heading";
import Main from "@/app/ui/Main";
import { fetchFlow } from "@/server/pages/flow";
import Image from "next/image";

const pageTitle = "Поток".toUpperCase().split("");

export default async function Page() {
  const flow = await fetchFlow();
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
