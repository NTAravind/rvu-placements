"use client";

export function PlacementPerformance() {
  return (
    <section id="outcomes" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-red"></span>
              <span className="text-xs font-bold tracking-widest text-red uppercase">Placement Outcomes</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight mb-6">
              Numbers that<br />tell the story.
            </h2>
            <p className="text-lg text-navy/60 leading-relaxed mb-12">
              Our graduates are consistently securing top-tier positions across industries, reflecting the strength of our rigorous academic programs.
            </p>

            <div className="p-8 bg-light rounded-2xl">
              <span className="text-6xl font-bold text-navy tracking-tighter block mb-2">₹43.5L</span>
              <span className="text-sm font-bold text-navy/50 uppercase tracking-widest">Highest Compensation</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-navy mb-8 border-b border-gray-100 pb-4">Salary Distribution by Offer</h3>
            <div className="space-y-8">
              
              <div className="relative">
                <div className="flex justify-between text-sm font-bold text-navy mb-2">
                  <span>₹20L+</span>
                  <span className="text-navy/50">Top Tier</span>
                </div>
                <div className="h-6 w-full bg-light rounded-full overflow-hidden flex">
                  <div className="h-full bg-red w-[15%] rounded-full relative z-10 shadow-[2px_0_10px_rgba(218,41,28,0.3)]"></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between text-sm font-bold text-navy mb-2">
                  <span>₹10L – ₹20L</span>
                  <span className="text-navy/50">Mid Tier</span>
                </div>
                <div className="h-6 w-full bg-light rounded-full overflow-hidden flex">
                  <div className="h-full bg-navy w-[40%] rounded-full relative z-10"></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex justify-between text-sm font-bold text-navy mb-2">
                  <span>Below ₹10L</span>
                  <span className="text-navy/50">Entry Tier</span>
                </div>
                <div className="h-6 w-full bg-light rounded-full overflow-hidden flex">
                  <div className="h-full bg-navy/20 w-[65%] rounded-full relative z-10"></div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-gray-100">
              <div>
                <span className="text-4xl font-bold text-navy block mb-2">25%</span>
                <span className="text-xs font-bold text-navy/50 uppercase tracking-wider">Multiple Offers</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-navy block mb-2">20+</span>
                <span className="text-xs font-bold text-navy/50 uppercase tracking-wider">Offers Above ₹20 LPA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
