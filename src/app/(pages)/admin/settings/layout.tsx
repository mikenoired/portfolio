import Main from "@/app/ui/Main";
import Sidebar from "@/app/ui/admin/settings/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Main className="flex">
      <Sidebar />
      <div className="w-full md:pl-[250px]">{children}</div>
    </Main>
  );
}
