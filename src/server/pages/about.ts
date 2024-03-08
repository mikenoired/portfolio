"use server";

import { SocLinksType } from "@/app/lib/definitions";
import prisma from "@/server/prisma";

export async function fetchPersonCard() {
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
    },
  );
}
