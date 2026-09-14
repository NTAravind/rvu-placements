import Image from "next/image";
import { HIGHLIGHTS } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { cn } from "cn";

export function Highlights() {
  return (
    <section aria-label="What defines RVU placements" className="bg-cream">
      <div className="page-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className={cn(
                "flex flex-col gap-3 py-10 lg:py-12",
                i < HIGHLIGHTS.length - 1 &&
                  "border-b border-line sm:border-b-0 lg:border-r lg:pr-8",
                i % 2 === 0 && "sm:border-r sm:pr-8 lg:border-r",
                i < 2 && "sm:border-b lg:border-b-0",
                i > 0 && "lg:pl-8"
              )}
            >
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
                aria-hidden="true"
              />
              <h3 className="font-heading text-lg font-semibold text-heading">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
