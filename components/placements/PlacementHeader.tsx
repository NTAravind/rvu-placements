"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function PlacementHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
        <a href="https://rvu.edu.in" className="flex items-center">
          <Image
            src="/images/rvu-logo.svg"
            alt="RV University"
            width={120}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {["Placements", "Outcomes", "Talent", "Process"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-navy/70 hover:text-navy transition-colors">
              {item}
            </a>
          ))}
          <a href="https://forms.gle/4cPjVjPosbaw8b9QA" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-navy-muted transition-colors">
            Recruit With RVU
          </a>
        </nav>

        <button className="lg:hidden text-navy" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden flex flex-col py-4 px-6 border-t border-gray-100">
          {["Placements", "Outcomes", "Talent", "Process"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium text-navy/70 hover:text-navy border-b border-gray-50 last:border-0">
              {item}
            </a>
          ))}
          <a href="https://forms.gle/4cPjVjPosbaw8b9QA" target="_blank" rel="noopener noreferrer" className="mt-4 bg-navy text-white text-center px-5 py-3 rounded-md text-sm font-semibold uppercase">
            Recruit With RVU
          </a>
        </div>
      )}
    </header>
  );
}
