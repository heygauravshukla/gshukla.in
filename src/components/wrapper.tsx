import { cn } from "@/lib/utils";

export function Wrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-5xl px-4 md:px-6", className)}>
      {children}
    </div>
  );
}
