import type { Metadata } from "next";
import { Caveat, Hanken_Grotesk, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/footer";
import GrainOverlay from "@/components/layout/grain-overlay";
import Navbar from "@/components/layout/navbar";
import { site } from "@/data/site";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// Accent fonts are only used on some pages, so they are not preloaded.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: false,
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [hanken, jetbrains, playfair, caveat].map((font) => font.variable).join(" ");

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${fontVariables} flex min-h-dvh flex-col antialiased`}>
        <GrainOverlay />
        <Navbar />

        <main id="main" className="mx-auto w-full max-w-360 flex-1 px-5 py-12 md:px-16 print:max-w-none print:p-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
