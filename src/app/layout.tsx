import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const commitMono = localFont({
  src: "../fonts/CommitMono-Regular.woff2",
  variable: "--font-commit-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hayden's Portfolio",
  description: "Personal portfolio of Hayden — Computer Science @ McMaster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${satoshi.variable} ${commitMono.variable} font-sans bg-bg text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
