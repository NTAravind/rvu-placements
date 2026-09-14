"use client";

export function ContactCTA() {
  return (
    <section className="bg-red py-24 lg:py-32 text-center px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
          READY TO BUILD<br />YOUR NEXT TEAM?
        </h2>
        <p className="text-lg lg:text-xl text-white/80 mb-12">
          Connect with RV University&apos;s premium talent pool today.
        </p>
        <a href="https://forms.gle/4cPjVjPosbaw8b9QA" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-red px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-light transition-colors shadow-xl hover:shadow-2xl">
          Recruit With RVU
        </a>
      </div>
    </section>
  );
}
