"use client";

import { NotificationProvider } from "@/app/context/NotificationProvider";
import Header from "@/app/ui/admin/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NotificationProvider>
        <Header />
        {children}
      </NotificationProvider>
    </>
  );
}
