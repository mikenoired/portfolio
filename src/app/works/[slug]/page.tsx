import { fetchWorkCat } from "@/app/server/pages/works";
import { Header } from "@/app/ui/works/Header";
import { ImagesGrid } from "@/app/ui/works/ImagesGrid";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchWorkCat(params.slug);
  return (
    <>
      <Header title={data?.title as string} thumb={data?.thumbnail} />
      <ImagesGrid images={data?.images as string[]} />
    </>
  );
}
