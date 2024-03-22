"use client";

import Icon from "@/app/ui/Icon";
import Link from "next/link";
import { useRouter } from "next/navigation";

const routes = [
  {
    title: "Q&A",
    link: "/admin/qna",
  },
  {
    title: "Works",
    link: "/admin/works",
  },
  {
    title: "About",
    link: "/admin/about",
  },
  {
    title: "Flow",
    link: "/admin/flow",
  },
  {
    title: "Settings",
    link: "/admin/settings",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className="absolute mb-8 flex h-12 w-full items-center justify-center border-b">
      <div className="absolute left-[30px] flex">
        <div
          className="mr-4 flex cursor-pointer items-center"
          onClick={() => router.back()}
        >
          <Icon dark={false} width={22} height={22} type="left" />
        </div>
      </div>
      <div
        className="cursor-pointer pr-4 text-2xl font-semibold last:pl-[0px]"
        onClick={() => router.push("/admin")}
      >
        Dashboard
      </div>
      {routes.map((route, index) => (
        <Link
          key={index}
          className="pr-4 text-2xl font-semibold last:pl-[0px]"
          href={route.link}
        >
          {route.title}
        </Link>
      ))}
      <div className="absolute right-[30px] flex">
        <div
          className="cursor-pointer text-xl font-semibold"
          onClick={() => router.push("/")}
        >
          Homepage
        </div>
        <Link
          className="pl-4 text-xl font-semibold"
          href="/api/auth/signout?callbackUrl=/"
        >
          Logout
        </Link>
      </div>
    </header>
  );
}
