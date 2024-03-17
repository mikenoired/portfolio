import { cn } from "@/app/lib/utils";

interface MainProps {
  children: React.ReactNode;
  className?: string;
  moveTop?: boolean;
}

export default function Main({ children, className, moveTop }: MainProps) {
  return (
    <main
      className={cn(
        "absolute mt-10 h-screen w-screen overflow-y-scroll pb-10 md:mt-12 md:pb-12",
        moveTop && "mt-[0px] md:mt-[0px]"
      )}
    >
      <div className={className}>{children}</div>
    </main>
  );
}
