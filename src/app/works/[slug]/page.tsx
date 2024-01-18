import { fetchWorkCat } from "@/app/lib/actions";
import { Header } from "@/app/ui/works/Header";
import { useRouter } from "next/router";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchWorkCat(params.slug);
  return (
    <>
      <Header title={data?.title as string} thumb={data?.thumbnail} />
    </>
  );
}
