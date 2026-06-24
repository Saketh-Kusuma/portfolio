import type { Metadata } from "next";
import {Inter, Geist } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'
import "../globals.css";
import Navbar from "../navbar";
import { cn } from "@/lib/utils";
import Container from "../components/Container";
import Footer from "../navbar/Footer";
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

        <Container className="min-h-full flex flex-col bg-neutral-100 dark:bg-neutral-800">
          <Navbar/>
          {children}
        </Container>
  );
}
