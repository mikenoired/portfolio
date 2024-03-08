"use server";

import { fetchMediaByURLs } from "@/server/media";
import { fetchWorkCat } from "@/server/pages/works";
import { Header } from "@/app/ui/works/Header";
import { ImagesGrid } from "@/app/ui/works/ImagesGrid";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchWorkCat(params.slug);
  const images = await fetchMediaByURLs(data?.images as string[]);
  return (
    <>
      <Header title={data?.title as string} thumb={data?.thumbnail} />
      <ImagesGrid images={images} />
    </>
  );
}
