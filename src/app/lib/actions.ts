"use server";

import prisma from "@/app/lib/utils";
import { writeFile } from "fs/promises";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { SocLinksType } from "./definitions";

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
