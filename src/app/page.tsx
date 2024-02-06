import { fetchSettings, fetchThumb, fetchWorks } from "@/app/lib/actions";
import { Header } from "@/app/ui/header";
import type { Metadata } from "next";
import { ISettings } from "./lib/definitions";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchSettings();
  const s = JSON.parse(data as string) as ISettings;
  const getSelectedData = (
    items: { data: string | number; selected: boolean }[]
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
          JSON.parse(s.metadata.robots.googleBot["max-video-preview"])
        ),
        "max-image-preview": getSelectedData(
          JSON.parse(s.metadata.robots.googleBot["max-image-preview"])
        ) as "none" | "standard" | "large",
        "max-snippet": getSelectedData(
          JSON.parse(s.metadata.robots.googleBot["max-snippet"])
        ) as number,
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
      statusBarStyle: getSelectedData(
        JSON.parse(s.metadata.appleWebApp.statusBarStyle)
      ) as "default" | "black" | "black-translucent",
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
  const data = await fetchSettings();
  const s = JSON.parse(data as string) as ISettings;
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
  const fetchWorksCats = await fetchWorks();
  let links: { title: string; url: string }[] = [];
  const workCats = () => {
    fetchWorksCats.map((cat) => {
      links.push({
        title: cat.title,
        url: cat.url,
      });
    });
  };
  workCats();
  return (
    <>
      <Header subMenu={links} transparent={true} />
      <main>
        <div className='w-screen h-screen relative'>
          <video
            src={`/upload/${thumb?.media}`}
            autoPlay
            controls={false}
            muted
            loop
            className='object-cover w-dvw h-dvh'
          />
        </div>
      </main>
    </>
  );
}
