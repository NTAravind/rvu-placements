"use client";
import { WHY_RVU } from "@/lib/placements-data";
import Image from "next/image";
import { useState } from "react";

export function WhyRecruit() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="py-24 lg:py-32 bg-navy text-white relative">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="inline-flex items-center gap-2 mb-16">
          <span className="w-8 h-[1px] bg-red"></span>
          <span className="text-xs font-bold tracking-widest text-red uppercase">Why RVU?</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          
          <div className="hidden lg:block relative h-[600px] rounded-2xl overflow-hidden sticky top-32">
            <Image
              src={WHY_RVU.items[activeIndex].image}
              alt="Why RVU"
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          <div className="flex flex-col gap-12 py-8">
            {WHY_RVU.items.slice(0, 4).map((card, i) => (
              <div 
                key={card.title} 
                className={`flex gap-6 transition-all duration-500 cursor-pointer ${activeIndex === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <span className="text-3xl font-bold text-red">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
