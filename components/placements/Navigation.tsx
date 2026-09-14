"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS, UPDATES } from "@/lib/placements-data";
import { cn } from "cn";
import { buttonVariants } from "@/lib/button-variants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="bg-navy text-white">
        <div className="page-grid relative flex h-8 items-center gap-3 overflow-hidden">
          <span className="z-10 shrink-0 bg-gold px-2 py-0.5 font-ui text-[10px] font-bold uppercase tracking-wider text-heading">
            {UPDATES.label}
          </span>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="animate-marquee-slow flex w-max whitespace-nowrap">
              {[...UPDATES.items, ...UPDATES.items].map((item, i) => (
                <span
                  key={`${item.text}-${i}`}
                  className="inline-flex items-center px-5 font-ui text-[11px] text-white/80 sm:text-xs"
                >
                  {item.text}
                  {item.linkText && item.href ? (
                    <a
                      href={item.href}
                      className="ml-1 font-semibold text-gold underline-offset-2 hover:underline"
                    >
                      {item.linkText}
                    </a>
                  ) : null}
                  {item.suffix}
                  <span className="ml-5 text-gold/70" aria-hidden="true">
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-line bg-white/92 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-[0_10px_28px_-20px_rgb(35_48_57_/_0.45)]"
        )}
      >
        <div
          className={cn(
            "page-grid flex items-center justify-between gap-6 transition-[height] duration-300",
            scrolled ? "h-14" : "h-16 lg:h-[4.25rem]"
          )}
        >
          <a
            href="https://rvu.edu.in"
            className="shrink-0"
            aria-label="RV University — home"
          >
            <Image
              src="/images/rvu-logo.svg"
              alt="RV University"
              width={150}
              height={58}
              className="h-8 w-auto lg:h-9"
              priority
            />
          </a>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 font-ui text-[13px] font-medium tracking-wide transition-colors",
                    isActive
                      ? "text-heading"
                      : "text-muted-foreground hover:text-heading"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 bottom-0 h-px origin-left bg-gold transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BRAND.recruitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "gold", size: "sm" }),
                "hidden font-ui uppercase tracking-[0.12em] sm:inline-flex"
              )}
            >
              Recruit with RVU
              <ArrowUpRight className="size-3.5" />
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="inline-flex size-10 items-center justify-center border border-line text-navy lg:hidden"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h10" />
                </svg>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className="w-full gap-0 border-l-line bg-navy p-0 text-white sm:max-w-sm"
              >
                <SheetTitle className="sr-only">
                  RV University Placements menu
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation for the RV University placements experience
                </SheetDescription>

                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <Image
                      src="/images/rvu-logo-white.png"
                      alt="RV University"
                      width={130}
                      height={48}
                      className="h-8 w-auto object-contain"
                    />
                    <SheetClose
                      aria-label="Close menu"
                      className="inline-flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        className="size-5"
                        aria-hidden="true"
                      >
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </SheetClose>
                  </div>

                  <nav aria-label="Mobile" className="flex flex-col px-6 py-2">
                    {NAV_LINKS.map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-white/10 py-4"
                      >
                        <span className="flex items-baseline gap-4 font-heading text-xl text-white transition-colors group-hover:text-gold">
                          <span className="font-ui text-[11px] tracking-[0.16em] text-gold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {link.label}
                        </span>
                        <ArrowUpRight className="size-4 text-white/35 group-hover:text-gold" />
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto space-y-6 px-6 pb-8 pt-6">
                    <a
                      href={BRAND.recruitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "gold", size: "lg" }),
                        "w-full"
                      )}
                    >
                      Recruit with RVU
                      <ArrowUpRight className="size-4" />
                    </a>
                    <div className="space-y-1 font-ui text-sm text-white/70">
                      <a
                        href={`mailto:${BRAND.placementsEmail}`}
                        className="block hover:text-gold"
                      >
                        {BRAND.placementsEmail}
                      </a>
                      <a
                        href="tel:+918951179896"
                        className="block hover:text-gold"
                      >
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
