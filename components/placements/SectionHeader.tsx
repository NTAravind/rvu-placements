import { cn } from "cn";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  body,
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2
        className={cn(
          "headline text-3xl sm:text-4xl lg:text-[2.85rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {body ? (
        <div className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {body}
        </div>
      ) : null}
    </header>
  );
}
