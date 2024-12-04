import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Auracles",
  description:
    "Auracles are ‘The Everything of Something’. Based on the physical concept of auras, an Auracle is a place for everything surrounding a person or a thing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased flex flex-col min-h-screen text-foreground bg-background`}
      >
        <main className="flex flex-col items-center justify-center flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
