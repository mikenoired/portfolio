"use client";

import Link from "next/link";

export default function Status({ status }: { status: boolean }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {!status ? (
        <Link href="/api/auth/signin" className="text-8xl font-bold">
          Login
        </Link>
      ) : (
        <Link
          href="/api/auth/signout?callbackUrl=/"
          className="text-8xl font-bold"
        >
          Logout
        </Link>
      )}
    </div>
  );
}
