import type { Metadata } from "next";
import { Inter, Montserrat, Roboto_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Code Red — Safer Schools Initiative",
  description:
    "Proactive threat prevention, preparedness, and collaboration for K–12 school safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} m-0 w-full bg-black p-0`}>
      <body className="m-0 min-h-screen w-full overflow-x-clip bg-black p-0 antialiased">
        <Suspense fallback={null}>
          <NavBar />
        </Suspense>

        <main className="m-0 w-full max-w-none p-0">{children}</main>

        <Footer />
        <Toaster />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        <Analytics />
      </body>
    </html>
  );
}
