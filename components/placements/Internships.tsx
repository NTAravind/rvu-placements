import Image from "next/image";
import { INTERNSHIPS } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";

const COLLAGE = [
  {
    src: "/images/internship_img1.jpg",
    alt: "RV University students during a summer internship",
    className: "col-span-2 aspect-[4/3]",
  },
  {
    src: "/images/internship_img2.jpg",
    alt: "Industry mentoring session at RV University",
    className: "aspect-square",
  },
  {
    src: "/images/internship_img3.jpg",
    alt: "Students collaborating on a live industry project",
    className: "aspect-square",
  },
];

export function Internships() {
  return (
    <section id="internships" className="scroll-mt-24 bg-cream">
      <div className="page-grid section-pad grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {COLLAGE.map((image) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeader
              eyebrow={INTERNSHIPS.eyebrow}
              title={INTERNSHIPS.headline}
              body={INTERNSHIPS.body}
            />
          </Reveal>

          <ol className="mt-12">
            {INTERNSHIPS.items.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[3.25rem_1fr] gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="display-num text-xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Reveal delay={80}>
            <a
              href="https://forms.gle/4cPjVjPosbaw8b9QA"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "gold", size: "lg" }), "mt-10")}
            >
              Recruit Now
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
