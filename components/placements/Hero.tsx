import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { HERO } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute inset-y-0 left-[8%] w-px bg-line/60" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-line/60" />
        <div className="absolute left-0 right-0 top-[32%] h-px bg-line/40" />
      </div>

      <div className="page-grid relative pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
        {/* Breadcrumb */}
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-12 lg:mb-16">
            <ol className="flex items-center gap-2 text-xs">
              <li>
                <a
                  href="https://rvu.edu.in/"
                  className="font-medium text-muted-foreground transition-colors hover:text-gold"
                >
                  Home
                </a>
              </li>

              <li aria-hidden="true" className="text-gold">
                /
              </li>

              <li
                aria-current="page"
                className="font-semibold text-navy"
              >
                Placements
              </li>
            </ol>
          </nav>
        </Reveal>

        {/* Main hero content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="lg:col-span-8">
            <Reveal delay={70}>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <p className="eyebrow text-gold">
                  {HERO.eyebrow}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-ui mb-3 text-xs font-bold uppercase tracking-[0.3em] text-navy/70">
                {HERO.kicker}
              </p>

              <h1 className="headline max-w-5xl text-[3.25rem] leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[6.2rem]">
                {HERO.headline}
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
                  {HERO.body}
                </p>

                {/* Eligibility */}
                <div className="hidden border-l border-line pl-7 sm:block">
                  <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Eligibility
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="display-num text-4xl text-gold">
                      {HERO.eligible.value}
                    </span>

                    <span className="max-w-[9rem] text-xs leading-snug text-muted-foreground">
                      {HERO.eligible.label}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={HERO.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "gold",
                      size: "lg",
                    }),
                    "group min-h-12 px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  {HERO.primaryCta.label}

                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={HERO.secondaryCta.href}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "group min-h-12 px-6 transition-all duration-300 hover:-translate-y-0.5"
                  )}
                >
                  {HERO.secondaryCta.label}

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* Mobile eligibility */}
            <Reveal delay={280}>
              <div className="mt-10 border-t border-line pt-5 sm:hidden">
                <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Eligibility
                </p>

                <div className="mt-1 flex items-baseline gap-3">
                  <span className="display-num text-4xl text-gold">
                    {HERO.eligible.value}
                  </span>

                  <span className="text-xs leading-snug text-muted-foreground">
                    {HERO.eligible.label}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right-side visual marker */}
          <div className="relative hidden lg:col-span-4 lg:block">
            <Reveal delay={200}>
              <div className="absolute bottom-0 right-0 max-w-[15rem] border-l-2 border-gold pl-5">
                <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  RV University
                </p>

                <p className="mt-2 text-sm leading-relaxed text-navy">
                  Building pathways from education to meaningful careers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <Reveal delay={180}>
        <figure className="relative w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/8] lg:aspect-[21/9]">
            <Image
              src={HERO.image.src}
              alt={HERO.image.alt}
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              priority
            />

            {/* Image overlays */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-navy/20 via-transparent to-transparent"
            />

            {/* Image top border */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-px bg-white/30"
            />
          </div>

          {/* Featured statistic */}
          <figcaption className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-auto sm:right-8 lg:bottom-10 lg:right-12">
            <div className="relative w-full border border-white/30 bg-navy/95 p-5 text-white shadow-2xl backdrop-blur-md sm:w-[18rem] sm:p-6">
              {/* Decorative corner */}
              <span
                aria-hidden="true"
                className="absolute -right-px -top-px h-3 w-3 border-r border-t border-gold"
              />

              <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                {HERO.featuredStat.label}
              </p>

              <p className="display-num mt-1 text-[2.8rem] leading-none text-white sm:text-[3.2rem]">
                {HERO.featuredStat.value}
              </p>

              <div className="my-4 h-px w-full bg-white/15" />

              <p className="text-xs leading-relaxed text-white/70">
                {HERO.featuredStat.note}
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>

      {/* Bottom edge detail */}
      <div
        aria-hidden="true"
        className="flex h-8 items-center justify-between border-t border-line bg-cream px-5 sm:px-8 lg:px-12"
      >
        <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Placements
        </span>

        <span className="font-ui text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          RVU
        </span>
      </div>
    </section>
  );
}