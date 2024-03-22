import { AboutType, PersonType } from "@/app/lib/definitions";
import EditForm from "@/app/ui/admin/about/EditForm";
import Main from "@/app/ui/Main";
import { fetchAboutContent, fetchPersonCard } from "@/server/pages/about";

export default async function Page() {
  const personData = await fetchPersonCard();
  const aboutContent = await fetchAboutContent();
  return (
    <Main className="p-8">
      <EditForm
        personData={personData as PersonType}
        aboutContent={aboutContent as AboutType}
      />
    </Main>
  );
}
