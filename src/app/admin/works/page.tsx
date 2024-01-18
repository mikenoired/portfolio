import List from "@/app/ui/admin/works/List";
import { fetchWorks } from "@/app/lib/actions";

export default async function Page() {
  const works = await fetchWorks();
  return (
    <main className='flex justify-center'>
      <List works={works} />
    </main>
  );
}
