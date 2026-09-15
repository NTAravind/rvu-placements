import {
  CTA,
  Footer,
  Hero,
  Highlights,
  Industry,
  Internships,
  MidPageCTA,
  Navigation,
  Outcomes,
  Process,
  Recruiters,
  StatsStrip,
  Talent,
  WhyRVU,
} from "@/components/placements";

export default function PlacementsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <Highlights />
        <Recruiters />
        <WhyRVU />
        <Talent />
        <Process />
        <Internships />
        <Industry />
        <Outcomes />
        <MidPageCTA />
        <CTA />
      </main>
      <Footer />
    </>
  );
}