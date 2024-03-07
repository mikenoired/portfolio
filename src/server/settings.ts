"use server";

import prisma from "@/server/prisma";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ISettings } from "@/app/lib/definitions";

export async function updateSettings(data: any) {
  const toggleStatus = (toggle: "on" | "off"): boolean => toggle === "on";
  const settings: ISettings = {
    metadata: {
      title: data["metadata.title"],
      description: data["metadata.description"],
      locale: data["metadata.locale"],
      category: data["metadata.category"],
      keywords: data["metadata.keywords"].split(","),
      creator: data["metadata.creator"],
      manifest: data["metadata.manifest"],
      robots: {
        index: toggleStatus(data["metadata.robots.index"]),
        follow: toggleStatus(data["metadata.robots.follow"]),
        nocache: toggleStatus(data["metadata.robots.nocache"]),
        googleBot: {
          index: toggleStatus(data["metadata.robots.googleBot.index"]),
          follow: toggleStatus(data["metadata.robots.googleBot.follow"]),
          noimageindex: toggleStatus(
            data["metadata.robots.googleBot.noimageindex"],
          ),
          "max-video-preview":
            data['metadata.robots.googleBot["max-video-preview"]'],
          "max-image-preview":
            data['metadata.robots.googleBot["max-image-preview"]'],
          "max-snippet": data['metadata.robots.googleBot["max-snippet"]'],
        },
      },
      icons: {
        icon: data["metadata.icons.icon"],
        apple: data["metadata.icons.apple"],
        other: {
          rel: data["metadata.icons.other.rel"],
          url: data["metadata.icons.other.url"],
        },
      },
      appleWebApp: {
        title: data["metadata.appleWebApp.title"],
        statusBarStyle: data["metadata.appleWebApp.statusBarStyle"],
        startupImage: [
          data["metadata.appleWebApp.startupImage[0]"],
          {
            url: data["metadata.appleWebApp.startupImage[1].url"],
            media: data["metadata.appleWebApp.startupImage[1].media"],
          },
        ],
      },
    },
    viewport: {
      themeColor: data["viewport.themeColor"],
      width: data["viewport.width"],
      initialScale: Number(data["viewport.initialScale"]),
      maximumScale: Number(data["viewport.maximumScale"]),
      userScalable: toggleStatus(data["viewport.userScalable"]),
    },
  };

  const del = await prisma.siteSettings.deleteMany();
  const create = await prisma.siteSettings.create({
    data: {
      settings: JSON.stringify(settings),
    },
  });
  revalidatePath("/admin/settings");
  redirect("/admin/settings");
}

export async function fetchSettings() {
  const res = (await prisma.siteSettings.findFirst()) as {
    id: 1;
    settings: {};
  };
  return res?.settings;
}
