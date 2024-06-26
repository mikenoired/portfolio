import Header from "@/app/ui/Header";
import { fetchMeta } from "@/server/settings";
import { fetchThumb } from "@/server/thumbnail";
import type { Metadata } from "next";
import { ISettings } from "./lib/definitions";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchMeta();
  const s = data as ISettings;
  const getSelectedData = (
    items: { data: string | number | undefined; selected: boolean }[],
  ) => {
    return items.find((item) => item.selected)?.data;
  };
  return {
    title: {
      template: `%s | ${s.metadata.title}`,
      default: s.metadata.title,
    },
    description: s.metadata.description,
    keywords: s.metadata.keywords,
    category: s.metadata.category,
    creator: s.metadata.creator,
    manifest: s.metadata.manifest,
    robots: {
      index: s.metadata.robots.index,
      follow: s.metadata.robots.follow,
      nocache: s.metadata.robots.nocache,
      googleBot: {
        index: s.metadata.robots.googleBot.index,
        follow: s.metadata.robots.googleBot.follow,
        noimageindex: s.metadata.robots.googleBot.noimageindex,
        "max-video-preview": getSelectedData(
          s.metadata.robots.googleBot.maxVideoPreview,
        ),
        "max-image-preview": getSelectedData(
          s.metadata.robots.googleBot.maxSnippet,
        ) as "none" | "standard" | "large",
        "max-snippet": getSelectedData(
          s.metadata.robots.googleBot.maxSnippet,
        ) as number | undefined,
      },
    },
    icons: {
      icon: `/upload/${s.metadata.icons.icon}`,
      apple: `/upload/${s.metadata.icons.apple}`,
      other: {
        rel: s.metadata.icons.other.rel,
        url: `/upload/${s.metadata.icons.other.url}`,
      },
    },
    appleWebApp: {
      title: s.metadata.appleWebApp.title,
      statusBarStyle: getSelectedData(s.metadata.appleWebApp.statusBarStyle) as
        | "default"
        | "black"
        | "black-translucent",
      startupImage: [
        `/upload/${s.metadata.appleWebApp.startupImage[0]}`,
        {
          url: `/upload/${s.metadata.appleWebApp.startupImage[1].url}`,
          media: s.metadata.appleWebApp.startupImage[1].media,
        },
      ],
    },
  };
}

export async function generateViewport() {
  const data = await fetchMeta();
  const s = data as ISettings;
  return {
    themeColor: s.viewport.themeColor,
    width: s.viewport.width,
    initialScale: s.viewport.initialScale,
    maximumScale: s.viewport.maximumScale,
    userScalable: s.viewport.userScalable,
  };
}

export default async function Home() {
  const thumb = await fetchThumb();
  return (
    <>
      <Header invert />
      <main>
        <div className="relative screen">
          {thumb && (
            <video
              src={`/upload/${thumb?.media}`}
              autoPlay
              controls={false}
              role="presentation"
              muted
              loop
              className="h-dvh w-dvw object-cover"
            />
          )}
        </div>
      </main>
    </>
  );
}
