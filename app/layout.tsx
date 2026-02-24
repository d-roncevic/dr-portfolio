import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://darianroncevic.vercel.app"),
  title: {
    default: "Darian Rončević | Frontend Developer",
    template: "%s | Darian Rončević",
  },
  description:
    "Frontend Developer specialized in React, Next.js and modern web architecture. I build fast, scalable and user-focused web applications with clean and maintainable code.",
  keywords: [
    "Darian Roncevic",
    "Darian Rončević",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Web Development Portfolio",
  ],
  authors: [{ name: "Darian Rončević" }],
  creator: "Darian Rončević",
  openGraph: {
    title: "Darian Rončević | Frontend Developer",
    description:
      "Frontend Developer specialized in React, Next.js and modern web architecture. Building fast and scalable applications.",
    url: "https://darianroncevic.vercel.app",
    siteName: "Darian Rončević Portfolio",
    images: [
      {
        url: "https://darianroncevic.vercel.app/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Darian Rončević Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
