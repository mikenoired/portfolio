import { fetchWorks } from "@/app/lib/actions";
import List from "@/app/ui/admin/works/List";

export default async function Page() {
  const works = await fetchWorks();
  return (
    <main className='flex justify-center'>
      <List works={works} />
    </main>
  );
}
