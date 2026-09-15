"use client";

import { SCHOOLS, TOTAL_STUDENTS } from "@/lib/placements-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Talent() {
  return (
    <section id="talent" className="scroll-mt-24 bg-white">
      <div className="page-grid section-pad">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionHeader
                eyebrow="Talent Pool"
                title="Schools Eligible for Recruitment"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={80}>
              <p className="text-sm font-semibold leading-snug text-navy lg:pb-1 lg:text-right lg:text-base">
                <span className="display-num text-gold">
                  {TOTAL_STUDENTS.toLocaleString("en-IN")}
                </span>{" "}
                Total Students Eligible for Recruitment
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <Accordion
            defaultValue={[SCHOOLS[0].abbr]}
            keepMounted
            className="mt-12 border-t border-line"
          >
            {SCHOOLS.map((school) => (
              <AccordionItem
                key={school.abbr}
                value={school.abbr}
                className="border-b border-line"
              >
                <AccordionTrigger className="w-full rounded-none py-6 hover:no-underline data-open:bg-cream/60">
                  <span className="flex w-full items-center gap-5">
                    <span className="display-num text-2xl text-gold">
                      {school.index}
                    </span>
                    <span className="font-heading text-lg font-semibold tracking-tight text-heading sm:text-xl">
                      {school.fullName}
                    </span>
                  </span>
                  <span className="rounded-full border border-gold bg-gold-soft px-3 py-1 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                    {school.abbr}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="overflow-x-auto py-6">
                    <table className="w-full min-w-[22rem] border-collapse">
                      <thead>
                        <tr className="bg-navy text-left">
                          <th className="px-5 py-3 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                            Course
                          </th>
                          <th className="px-5 py-3 text-right font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                            Student Strength
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {school.courses.map((course) => (
                          <tr
                            key={course.title}
                            className="border-b border-line last:border-b-0"
                          >
                            <td className="px-5 py-3.5 text-sm text-navy">
                              {course.title}
                            </td>
                            <td className="px-5 py-3.5 text-right text-sm font-semibold tabular-nums text-heading">
                              {course.strength}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}