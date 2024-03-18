"use server";

import Main from "@/app/ui/Main";
import { fetchFlow } from "@/server/pages/flow";
import Image from "next/image";

export default async function Page() {
  const flow = await fetchFlow();
  return (
    <>
      <Main moveTop={true}>
        {flow ? (
          <>
            <div className="w-full p-11">{flow.description}</div>
            <div className="w-full">
              {flow.urls.map((url, index) => (
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
