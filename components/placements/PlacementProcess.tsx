"use client";

export function PlacementProcess() {
  const steps = [
    { num: "01", title: "Connect", desc: "Reach out to the placement cell." },
    { num: "02", title: "Engage", desc: "Conduct pre-placement talks." },
    { num: "03", title: "Assess", desc: "Administer evaluations." },
    { num: "04", title: "Select", desc: "Interview candidates." },
    { num: "05", title: "Onboard", desc: "Seamless transition." }
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-light">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-red"></span>
            <span className="text-xs font-bold tracking-widest text-red uppercase">Recruitment</span>
            <span className="w-8 h-[1px] bg-red"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight mb-4">From Campus to Career.</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-navy/10 z-0"></div>
          
          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col items-center text-center lg:w-1/5 mb-12 lg:mb-0 px-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-red mb-6 shadow-sm">
                {step.num}
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">{step.title}</h4>
              <p className="text-sm text-navy/60 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
