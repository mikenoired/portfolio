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
    title: "Settings",
    link: "/admin/settings",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className='h-12 flex relative items-center justify-center border-b mb-8'>
      <div className='absolute left-[30px] flex'>
        <div
          className='flex items-center cursor-pointer mr-4'
          onClick={() => router.back()}
        >
          <Icon dark={false} width={22} height={22} type='back' />
        </div>
      </div>
      <div
        className='text-2xl font-semibold pr-4 last:pl-[0px] cursor-pointer'
        onClick={() => router.push("/admin")}
      >
        Dashboard
      </div>
      {routes.map((route, index) => (
        <Link
          key={index}
          className='text-2xl font-semibold pr-4 last:pl-[0px]'
          href={route.link}
        >
          {route.title}
        </Link>
      ))}
      <div className='absolute right-[30px] flex'>
        <div
          className='text-xl font-semibold cursor-pointer'
          onClick={() => router.push("/")}
        >
          Homepage
        </div>
      </div>
    </header>
  );
}
