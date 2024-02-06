import { ThumbType } from "@/app/lib/definitions";
import { fetchThumb } from "@/app/server/thumbnail";
import EditThumb from "@/app/ui/admin/EditThumb";

export default async function Page() {
  const thumb = (await fetchThumb()) as ThumbType;
  return (
    <main className='flex flex-col items-center mt-10'>
      <h1 className='text-4xl font-bold mb-4'>Admin panel</h1>
      <div className='grid-cols-2 grid w-full p-6'>
        {thumb ? (
          <EditThumb thumb={thumb} />
        ) : (
          <EditThumb
            thumb={{
              id: 1,
              media: "placeholder.jpg",
            }}
          />
        )}
      </div>
    </main>
  );
}
