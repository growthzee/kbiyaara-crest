import type React from "react";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "KBIYARA CREST — Opening Soon",
  description:
    "Luxury café and resort opening soon. Celebration • Stay • Savor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen selection:bg-amber-100/20 font-inter">
        {children}
      </body>
    </html>
  );
}
