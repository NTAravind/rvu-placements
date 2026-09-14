import type { Metadata } from "next";
import { Cantarell, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const cantarell = Cantarell({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-ui-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Placements | RV University",
  description:
    "RV University produces ambitious, industry-ready talent — 1,600+ graduates across engineering, business, design, media, liberal arts and law, recruited by 250+ organisations.",
  keywords: [
    "RV University placements",
    "RVU recruitment",
    "campus placements Bengaluru",
    "hire RV University graduates",
    "placement outcomes",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${cantarell.variable} ${playfair.variable} ${montserrat.variable} min-h-full bg-white font-sans text-body`}
      >
        {children}
      </body>
    </html>
  );
}
