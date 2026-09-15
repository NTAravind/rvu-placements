import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { CTA as CTA_DATA, BRAND } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";

/**
 * Single unified contact/CTA section (merges the old "Ready to build your next
 * team?" banner and the "Contact the CAR Office" block). One primary CTA,
 * one mailto fallback — no competing buttons.
 */
export function CTA() {
  return (
    <section
      id="contact-us"
      className="relative scroll-mt-24 overflow-hidden bg-navy text-white"
    >
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute -right-32 -top-32 size-[28rem] rounded-full border border-gold/10" />
        <div className="absolute -right-20 -top-20 size-[24rem] rounded-full border border-gold/[0.06]" />
      </div>

      <div className="page-grid relative section-pad">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <Reveal>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-gold" />
                <p className="font-ui text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                  {CTA_DATA.eyebrow}
                </p>
                <span aria-hidden="true" className="h-px w-10 bg-gold" />
              </div>

              <h2 className="headline mt-6 text-[2.8rem] leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
                {CTA_DATA.headline}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-white/70 sm:text-lg">
                {CTA_DATA.body}
              </p>
            </div>
          </Reveal>

          {/* Single CTA */}
          <Reveal delay={80}>
            <div className="mt-10 flex justify-center">
              <a
                href={CTA_DATA.recruitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "gold", size: "lg" }),
                  "group min-h-13 px-8 text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                )}
              >
                {CTA_DATA.button}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-4 text-center text-xs text-white/40">
              {CTA_DATA.formNote}
            </p>
          </Reveal>

          {/* Direct contact channels */}
          <Reveal delay={140}>
            <div className="mt-12 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">
              <a
                href={`mailto:${BRAND.placementsEmail}`}
                className="group relative flex min-h-[150px] flex-col items-center justify-center border-b border-white/10 px-6 py-8 text-center transition-colors duration-300 hover:bg-white/[0.035] sm:border-b-0 sm:border-r"
              >
                <Mail className="size-5 text-gold transition-transform duration-300 group-hover:-translate-y-1" />
                <p className="font-ui mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Email
                </p>
                <span className="mt-2 break-all text-sm text-white/85 transition-colors duration-200 group-hover:text-gold">
                  {BRAND.placementsEmail}
                </span>
              </a>

              <a
                href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                className="group relative flex min-h-[150px] flex-col items-center justify-center border-b border-white/10 px-6 py-8 text-center transition-colors duration-300 hover:bg-white/[0.035] sm:border-b-0 sm:border-r"
              >
                <Phone className="size-5 text-gold transition-transform duration-300 group-hover:-translate-y-1" />
                <p className="font-ui mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Phone
                </p>
                <span className="mt-2 text-sm text-white/85 transition-colors duration-200 group-hover:text-gold">
                  {BRAND.phone}
                </span>
              </a>

              <div className="flex min-h-[150px] flex-col items-center justify-center px-6 py-8 text-center">
                <MapPin className="size-5 text-gold" />
                <p className="font-ui mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Campus
                </p>
                <span className="mt-2 text-sm leading-relaxed text-white/75">
                  {CTA_DATA.office}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 flex items-center justify-between">
              <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                {CTA_DATA.kicker}
              </span>
              <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                RV University
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}