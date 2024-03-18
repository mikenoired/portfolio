import { ThumbType } from "@/app/lib/definitions";
import Main from "@/app/ui/Main";
import EditThumb from "@/app/ui/admin/EditThumb";
import { fetchThumb } from "@/server/thumbnail";

export default async function Page() {
  const thumb = (await fetchThumb()) as ThumbType;
  return (
    <Main className="mt-10 flex flex-col items-center">
      <h1 className="mb-4 text-4xl font-bold">Admin panel</h1>
      <div className="grid w-full grid-cols-2 p-6">
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
    </Main>
  );
}
