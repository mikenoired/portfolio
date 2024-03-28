"use client";

import { fetchPagesName } from "@/server/settings";

import { useSession } from "next-auth/react";
import { createContext, useCallback, useEffect, useState } from "react";
import { LinkType } from "../lib/definitions";

export const HeaderContext = createContext<LinkType[] | undefined>(undefined);

export default function HeaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [names, setNames] = useState<LinkType[]>();
  const { data: session, status } = useSession();

  const fetchData = useCallback(async () => {
    const data = await fetchPagesName();
    // @ts-ignore-next-line
    if (session?.user?.role !== "admin") {
      setNames(data?.filter((e) => e.url !== "admin"));
    } else setNames(data);
  }, [session?.user]);

  useEffect(() => {
    fetchData();
  }, [session, fetchData]);

  return (
    <HeaderContext.Provider value={names}>{children}</HeaderContext.Provider>
  );
}
