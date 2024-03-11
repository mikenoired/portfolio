"use client";

import { fetchPagesName } from "@/server/settings";

import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext<
  { id: number; name: string; url: string }[] | undefined
>(undefined);

export default function HeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [names, setNames] =
    useState<{ id: number; name: string; url: string }[]>();
  const { data: session, status } = useSession();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPagesName();
      if (session?.user?.role !== "admin") {
        setNames(data.filter((e) => e.url !== "admin"));
      } else setNames(data);
    }
    fetchData();
  }, [session]);
  return (
    <HeaderContext.Provider value={names}>{children}</HeaderContext.Provider>
  );
}
