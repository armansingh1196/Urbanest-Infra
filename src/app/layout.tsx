import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/layout/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Urbanest Infra | Premium Real Estate Advisory",
  description: "Your trusted channel partner for premium real estate projects in Dhanbad. Discover, compare, and purchase properties confidently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground relative">
        <SplashScreen />
        
        {/* Global Background Image */}
        <div className="fixed inset-0 z-[-2]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]" 
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80")` }}
          />
        </div>
        {/* Global Background Gradient Overlay */}
        <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-background/80 via-background to-background" />

        <Header />
        <main className="flex-1 z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
