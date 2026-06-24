import type { Metadata } from "next";
import {Inter, Geist } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./navbar/Footer";
import { Toaster } from "sonner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({subsets:["latin"],weight:["400","500","600","700","800","900"]})
export const metadata: Metadata = {
  title: "Saketh Kusuma - Software Developer",
  description: "Software Developer focused on building scalable web applications with Java, React.js, Node.js, MongoDB, and AWS. Passionate about problem-solving, clean code, and delivering impactful digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ViewTransitions>
      <html
        lang="en"
        className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable)}
      >
        <body className="relative min-h-full flex flex-col select-none">
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer/>
          <Toaster position="bottom-right" richColors />
        </body>
      </html>
    </ViewTransitions>
  );
}
