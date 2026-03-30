// app/layout.tsx
import type { Metadata } from "next";
import { Montserrat, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// import { Toaster } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import QueryProvider from "@/providers/query-provider";

// Brand fonts per guidelines: Montserrat (headlines), Inter (body), Roboto Mono (optional metrics) :contentReference[oaicite:1]{index=1}
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
  // Optional extras you can keep or remove:
  // icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <body className="min-h-screen  bg-(--cr-bg) text-(--cr-text) antialiased">
        <QueryProvider>
          <TooltipProvider>
            {children}

            {/* Global UI */}

            <Toaster />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
