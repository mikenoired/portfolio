"use server";

import prisma from "@/app/lib/utils";
import { writeFile } from "fs/promises";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { ISettings, SocLinksType } from "./definitions";

const QNASchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

const newQNAData = QNASchema.omit({ id: true });

export async function newQNA(data: FormData) {
  const createBlock = newQNAData.parse({
    title: data.get("title"),
    content: data.get("content"),
  });

  const block = await prisma.answerBlock.create({
    data: createBlock,
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function editQNA(id: number, data: FormData) {
  const editBlock = QNASchema.parse({
    id: id,
    title: data.get("title"),
    content: data.get("content"),
  });

  const block = await prisma.answerBlock.update({
    where: {
      id: editBlock.id,
    },
    data: {
      title: editBlock.title,
      content: editBlock.content,
    },
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function deleteQNAById(data: FormData) {
  const action = await prisma.answerBlock.delete({
    where: {
      id: Number(data.get("id")),
    },
  });

  revalidatePath("/admin/qna");
  redirect("/admin/qna");
}

export async function fetchQNAById(id: number) {
  noStore();
  const data = await prisma.answerBlock.findUnique({
    where: {
      id: Number(id),
    },
  });

  return data;
}

export async function fetchQNA() {
  noStore();
  const data = await prisma.answerBlock.findMany();
  return data;
}

const WorksType = z.object({
  title: z.string(),
  url: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
});

const newWorkCatData = WorksType.omit({ images: true });

export async function loadMedia(imageValue: FormDataEntryValue | null) {
  const image = imageValue as File;
  if (image.size !== 0) {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const filename = `${Date.now()}-${image.name.replaceAll(" ", "_")}`;
    const uploadDir = `./public/upload/${filename}`;

    writeFile(uploadDir, buffer);

    const fileType = (type: string) => {
      switch (type) {
        case "image/jpeg":
        case "image/png":
        case "image/gif":
        case "image/webp":
          return "image";
        case "image/x-icon":
          return "icon";
        case "video/mpeg":
        case "video/mp4":
        case "video/webm":
          return "video";
        case "audio/webm":
        case "audio/wav":
        case "audio/ogg":
        case "audio/mp4":
        case "audio/mp3":
        case "audio/mpeg":
        case "audio/flac":
          return "audio";
        default:
          return "undefined";
      }
    };

    const data = {
      url: filename,
      caption: "",
      size: String(image.size),
      lastModified: String(image.lastModified),
      type: fileType(image.type),
    };

    const res = await prisma.media.create({ data });

    return data;
  } else {
    return { url: "" };
  }
}

export async function newWorkCat(data: FormData) {
  const createCat = newWorkCatData.parse({
    title: data.get("title"),
    url: data.get("url"),
    thumbnail: data.get("thumbnail"),
  });

  const res = await prisma.work.create({
    data: createCat,
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}

export async function fetchWorkCat(url: string) {
  noStore();
  const data = await prisma.work.findUnique({
    where: {
      url,
    },
  });

  return data;
}

export async function fetchWorks() {
  noStore();
  const data = await prisma.work.findMany();
  return data;
}

export async function updateWorkCat(url: string, data: FormData) {
  const editCat = WorksType.parse({
    title: data.get("title"),
    url: data.get("url"),
    thumbnail: data.get("thumbnail"),
    images: JSON.parse(data.get("images") as string).data,
  });

  const res = await prisma.work.update({
    where: {
      url,
    },
    data: {
      title: editCat.title,
      url: editCat.url,
      thumbnail: editCat.thumbnail,
      images: editCat.images,
    },
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}

export async function deleteWorkByURL(data: FormData) {
  const url = data.get("url") as string;

  const res = await prisma.work.delete({
    where: {
      url,
    },
  });

  revalidatePath("/admin/works");
  redirect("/admin/works");
}

export async function fetchMedia(type: { type: "" }) {
  noStore();
  const res = await prisma.media.findMany({
    where: {
      type: type.type,
    },
  });
  return res;
}

export async function updateCaption(url: string, caption: string) {
  const res = await prisma.media.update({
    where: { url },
    data: {
      caption,
    },
  });
  return res;
}

export async function fetchThumb() {
  noStore();
  const res = prisma.siteThumbnail.findFirst();
  return res;
}

export async function updateThumb(data: FormData) {
  const thumb = data.get("url") as string;
  const res = prisma.siteThumbnail.deleteMany().then(() =>
    prisma.siteThumbnail.create({
      data: {
        media: thumb,
      },
    })
  );

  revalidatePath("/admin");
  redirect("/admin");
}

export async function fetchPersonCard() {
  noStore();
  const personData = await prisma.personCard.findFirst();
  const personLinks = await prisma.socLink.findMany({
    where: {
      personCardId: personData?.id,
    },
  });
  const res = {
    ...personData,
    socials: personLinks,
  };
  return res;
}

export async function fetchAboutContent() {
  noStore();
  const res = await prisma.aboutPage.findFirst();
  return res;
}

export async function updateAboutPage(data: FormData) {
  const updatePerson = await prisma.personCard.update({
    where: {
      id: 1,
    },
    data: {
      avatar: data.get("avatar") as string,
      name: data.get("name") as string,
      job: data.get("job") as string,
      place: data.get("place") as string,
    },
  });

  const updateContent = await prisma.aboutPage.update({
    where: {
      id: 1,
    },
    data: {
      content: data.get("content") as string,
    },
  });

  const deleteSocials = await prisma.socLink.deleteMany();
  (JSON.parse(data.get("socials") as string) as []).map(
    async (link: SocLinksType) => {
      const addSocial = await prisma.socLink.create({
        data: {
          name: link.name,
          url: link.url,
        },
      });
    }
  );
}

export async function updateSettings(data: any) {
  const toggleStatus = (toggle: "on" | "off"): boolean => {
    console.log(`Toggle status: ${toggle}`);
    return toggle === "on";
  };

  const getSelected = (
    data: { data: string | number; selected: boolean }[]
  ) => {
    console.log("Getting selected data:", data);
    return data.find((item) => item.selected)?.data;
  };

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
            data["metadata.robots.googleBot.noimageindex"]
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

  const del = await prisma.siteSettings.delete({
    where: {
      id: 1,
    },
  });
  const create = await prisma.siteSettings.create({
    data: {
      settings: JSON.stringify(settings),
    },
  });

  console.log("Site settings created:", create);
  revalidatePath("/admin/settings");
  redirect("/admin/settings");
}

export async function fetchSettings() {
  noStore();
  const res = (await prisma.siteSettings.findFirst()) as {
    id: 1;
    settings: {};
  };
  console.log("Site settings fetched:", res?.settings);
  return res?.settings;
}
