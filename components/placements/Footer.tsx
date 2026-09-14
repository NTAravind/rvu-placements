import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER, SOCIAL_LINKS } from "@/lib/placements-data";

const SOCIAL_ICONS: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
> = {
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),

  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),

  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),

  youtube: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const FOOTER_SOCIAL_ICONS = new Set([
  "facebook",
  "youtube",
  "linkedin",
  "instagram",
]);

function ColumnHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold">
      <span
        aria-hidden="true"
        className="h-px w-6 shrink-0 bg-gold"
      />
      <span>{children}</span>
    </p>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <ColumnHeader>{title}</ColumnHeader>

      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-white/85 transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SchoolsColumn({
  schools,
}: {
  schools: { label: string; href: string }[];
}) {
  return (
    <div>
      <ColumnHeader>Schools</ColumnHeader>

      <ul className="mt-5 space-y-3 text-sm">
        {schools.map((school) => (
          <li key={school.label}>
            <a
              href={school.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 transition-colors duration-200 hover:text-gold"
            >
              {school.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const helpful = FOOTER.columns.find(
    (c) => c.title === "Helpful Links"
  );

  const [mainNav, admissions] = FOOTER.columns.filter(
    (c) => c.title !== "Helpful Links"
  );

  const socials = SOCIAL_LINKS.filter((s) =>
    FOOTER_SOCIAL_ICONS.has(s.icon)
  );

  return (
    <footer className="bg-navy text-white">
      {/* ─────────────────────────────────────────────
          Brand / Tagline
      ───────────────────────────────────────────── */}
      <div className="page-grid pt-14 lg:pt-20">
        <Image
          src="/images/rvu-tagline.png"
          alt="RVU – Go, change the world"
          width={600}
          height={85}
          className="mx-auto h-auto w-full max-w-xs object-contain sm:max-w-sm"
        />

        {/* ───────────────────────────────────────────
            Contact Bar
        ─────────────────────────────────────────── */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-y border-white/10 py-10 lg:grid-cols-12 lg:items-center">
          {/* Logo */}
          <div className="lg:col-span-2">
            <a
              href="https://rvu.edu.in"
              aria-label="RV University — home"
              className="inline-block"
            >
              <Image
                src="/images/rvu-logo-white.png"
                alt="RV University"
                width={160}
                height={58}
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-3 lg:col-span-7">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />

              <span className="leading-relaxed text-white/80">
                {FOOTER.address}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />

              <a
                href={FOOTER.phone.href}
                className="text-white/85 transition-colors duration-200 hover:text-gold"
              >
                {FOOTER.phone.label}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" />

              <a
                href={FOOTER.email.href}
                className="text-white/85 transition-colors duration-200 hover:text-gold"
              >
                {FOOTER.email.label}
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="lg:col-span-3 lg:justify-self-end">
            <ul className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];

                if (!Icon) return null;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center border border-white/15 text-white/65 transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ───────────────────────────────────────────
            Footer Navigation
        ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:py-16">
          <LinkColumn
            title={mainNav.title}
            links={mainNav.links}
          />

          {FOOTER.schoolsGroups.map((group, i) => (
            <SchoolsColumn
              key={`schools-${i}`}
              schools={group}
            />
          ))}

          <LinkColumn
            title={admissions.title}
            links={admissions.links}
          />

          {/* Helpful Links */}
          <div>
            <ColumnHeader>Helpful Links</ColumnHeader>

            <ul className="mt-5 space-y-3 text-sm">
              {helpful?.links.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/85 transition-colors duration-200 hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Approvals */}
            <p className="mt-10 flex items-center gap-3 font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold">
              <span
                aria-hidden="true"
                className="h-px w-6 shrink-0 bg-gold"
              />
              <span>Approvals</span>
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER.approvals.map((approval) => (
                <li key={approval.label}>
                  <a
                    href={approval.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors duration-200 hover:text-gold"
                  >
                    {approval.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          Copyright / Legal
      ───────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="page-grid flex flex-col items-start justify-between gap-5 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/55 sm:text-sm">
            {FOOTER.copyright}
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm">
            {FOOTER.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}