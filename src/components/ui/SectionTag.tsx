import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionTag({ children, className, centered }: SectionTagProps) {
  return (
    <div className={cn(
      "font-mono text-[0.78rem] text-accent uppercase tracking-[3px] mb-3 flex items-center gap-3",
      centered && "justify-center",
      className
    )}>
      {!centered && <div className="w-6 h-[1px] bg-accent" />}
      {children}
    </div>
  );
}
