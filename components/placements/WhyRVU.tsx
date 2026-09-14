"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WHY_RVU } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { cn } from "cn";

export function WhyRVU() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const mid = window.innerHeight * 0.48;
        let best = 0;
        let bestDist = Infinity;
        itemsRef.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top + rect.height / 2 - mid);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setActive(best);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="why-rvu" className="scroll-mt-24 bg-cream">
      <div className="page-grid section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                {WHY_RVU.items.map((item, i) => (
                  <div
                    key={item.image}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700",
                      active === i ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden={active !== i}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-navy/75 p-6 text-white">
                  <p className="display-num text-4xl text-gold">
                    {String(active + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-heading text-xl">
                    {WHY_RVU.items[active].title}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeader
              eyebrow={WHY_RVU.eyebrow}
              title={WHY_RVU.headline}
              body={WHY_RVU.body}
            />
          </Reveal>

          <ol className="mt-12">
            {WHY_RVU.items.map((item, i) => {
              const isActive = active === i;
              return (
                <li
                  key={item.title}
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      itemsRef.current[i]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      setActive(i);
                    }}
                    className={cn(
                      "grid w-full grid-cols-[auto_1fr] gap-x-6 border-t border-line py-7 text-left transition-colors",
                      isActive && "border-t-gold"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "display-num text-3xl",
                        isActive ? "text-gold" : "text-line-strong"
                      )}
                    >
                      {item.index}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block font-heading text-xl font-semibold sm:text-2xl",
                          isActive ? "text-heading" : "text-navy"
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
