import type { Metadata } from "next";
import { Work_Sans, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationProvider } from "@/context/LocationContext";

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-survey",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Urbanest Infra | Premium Real Estate Advisory",
  description: "Your trusted channel partner for premium real estate projects across India. Discover, compare, and purchase properties confidently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${fraunces.variable} ${spaceMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col text-foreground relative bg-background overflow-x-hidden w-full">
        {/* Global backdrop: a faint drafting-table grid instead of a stock photo */}
        <div className="fixed inset-0 z-[-2] blueprint-grid" />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,rgba(193,95,53,0.06),transparent_60%)]" />

        <LocationProvider>
          <Header />
          <main className="flex-1 z-0">
            {children}
          </main>
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
