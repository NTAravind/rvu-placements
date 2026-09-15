import { ArrowUpRight } from "lucide-react";
import { MID_PAGE_CTA } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";

/**
 * Slim mid-page CTA sitting directly after the outcomes data. Deliberately
 * lighter than the hero and final contact section — it keeps the conversion
 * path alive without competing for visual weight.
 */
export function MidPageCTA() {
  return (
    <section aria-label="Start recruiting" className="border-y border-line bg-white">
      <div className="page-grid">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center lg:py-12">
            <div className="max-w-2xl">
              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {MID_PAGE_CTA.eyebrow}
              </p>
              <p className="mt-2 text-lg leading-snug text-navy sm:text-xl">
                {MID_PAGE_CTA.text}
              </p>
            </div>
            <a
              href={MID_PAGE_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "gold", size: "lg" }),
                "group min-h-12 shrink-0 px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              )}
            >
              {MID_PAGE_CTA.button}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}