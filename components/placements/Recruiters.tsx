import Image from "next/image";
import {
  Building2,
  Cpu,
  Globe,
  Landmark,
  Lightbulb,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  RECRUITERS,
  RECRUITER_CATEGORIES,
  RECRUITER_LOGOS,
  TOTAL_STUDENTS,
} from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Globe,
  Building2,
  Cpu,
  Lightbulb,
  Landmark,
  Rocket,
};

/**
 * Seamless infinite marquee. Two identical copies of the 16-logos set are
 * animated by translateX(-50%); each logo carries its own uniform horizontal
 * margin so one copy (including its trailing gap) is exactly half the track —
 * no sub-pixel seam at the loop point.
 */
function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-line bg-cream/40">
      <div className="mask-fade-x">
        <div className="animate-marquee-slow flex w-max items-center will-change-transform hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center">
              {RECRUITER_LOGOS.map((logo, i) => (
                <div
                  key={`${logo.src}-${copy}-${i}`}
                  className="mx-6 flex h-14 items-center justify-center sm:mx-8"
                >
                  <Image
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ""}
                    width={110}
                    height={44}
                    className="max-h-10 w-auto max-w-[7.5rem] object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Recruiters() {
  return (
    <section id="recruiters" className="scroll-mt-24 bg-white">
      <div className="page-grid section-pad">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeader
                eyebrow={RECRUITERS.eyebrow}
                title={RECRUITERS.headline}
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:ml-auto lg:text-right">
                {RECRUITERS.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal>
        <LogoMarquee />
      </Reveal>

      <div className="page-grid pt-14 lg:pt-16">
        <Reveal delay={80}>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {RECRUITER_CATEGORIES.map((category) => {
              const Icon = CATEGORY_ICONS[category.icon] ?? Globe;
              return (
                <li
                  key={category.label}
                  className="flex flex-col items-center gap-3 border border-line bg-white px-4 py-7 text-center transition-colors duration-300 hover:border-gold hover:bg-gold-soft"
                >
                  <Icon
                    className="size-10 text-gold"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                    {category.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
            <span className="display-num text-lg text-gold">
              {TOTAL_STUDENTS.toLocaleString("en-IN")}
            </span>
            students currently eligible · Amenable to hiring across all schools
            &amp; domains
          </p>
        </Reveal>
      </div>
    </section>
  );
}