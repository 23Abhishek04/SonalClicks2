import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// TODO: verify --font-geist-sans / --font-geist-mono are actually
// referenced in globals.css or tailwind.config before keeping these.
// If unused, delete both — every unused font is a wasted network request
// on every single page.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonal Clicks",
  description: "Wedding, maternity, baby, and portrait photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LazyMotion features={domAnimation}>
          <Navbar />
          {children}
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}