import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="screen flex flex-col justify-center items-center">
      <p className="text-2xl">Page not found</p>
      <p className="text-xl mt-5">
        Go back to{" "}
        <Link className="underline" href="/">
          home
        </Link>
      </p>
      <div className="screen -z-10 fixed opacity-20">
        <Image alt="404" src={"/404.svg"} fill objectFit="contain" />
      </div>
    </div>
  );
}
