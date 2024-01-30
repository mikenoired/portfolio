import { PersonType } from "@/app/lib/definitions";
import Person from "@/app/ui/about/Person";
import { Header } from "@/app/ui/header";

const personalData: PersonType = {
  avatar: "",
  name: "John Doe",
  job: "Portrait photographer, Frontend Web developer",
  place: "Hamburg, Germany",
  socials: [
    {
      name: "Telegram",
      url: "t.me",
    },
    {
      name: "VK",
      url: "vk.com",
    },
    {
      name: "unkstd@mail.ru",
      url: "mailto:unkstd@mail.ru",
    },
  ],
};

export default async function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-12 pt-10'>
        <div className='md:p-8 p-4 w-full flex'>
          <Person data={personalData} />
        </div>
      </main>
    </>
  );
}
