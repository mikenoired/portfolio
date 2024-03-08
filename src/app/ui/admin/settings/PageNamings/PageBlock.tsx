import Icon from "@/app/ui/Icon";

export default function PageBlock({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <div className="border">
      <input
        className="block h-8 w-full border-0 bg-black bg-opacity-0 px-6 py-8 text-3xl font-semibold"
        type="text"
        defaultValue={name}
        name=""
        placeholder="Page name"
      />
      <span className="block border-y bg-white bg-opacity-20 px-6 py-3">
        /{url}
      </span>
      <div className="flex h-8">
        <button className="flex h-full w-1/2 items-center justify-center border-r bg-white bg-opacity-0 transition-all hover:bg-opacity-20">
          <Icon dark={false} width={15} height={15} type="back" />
        </button>
        <button className="flex h-full w-1/2 items-center justify-center bg-white bg-opacity-0 transition-all hover:bg-opacity-20">
          <Icon dark={false} width={15} height={15} type="right" />
        </button>
      </div>
    </div>
  );
}
