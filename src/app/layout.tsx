import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina | Specialty Coffee",
  description: "High-end minimal specialty coffee shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${cormorant.variable} antialiased bg-[#F9F8F6] text-[#1A1918] font-sans selection:bg-[#C4A484] selection:text-white`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
