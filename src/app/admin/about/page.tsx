import { AboutType, PersonType } from "@/app/lib/definitions";
import { fetchAboutContent, fetchPersonCard } from "@/app/server/pages/about";
import EditForm from "@/app/ui/admin/about/EditForm";

export default async function Page() {
  const personData = await fetchPersonCard();
  const aboutContent = await fetchAboutContent();
  return (
    <main className='px-8'>
      <EditForm
        personData={personData as PersonType}
        aboutContent={aboutContent as AboutType}
      />
    </main>
  );
}
