  import Container from "@/app/components/Container";
  import type { Metadata } from "next";
  import {Inter } from "next/font/google";

  const inter = Inter({subsets:["latin"],weight:["400","500","600","700","800","900"]})
  export const metadata: Metadata = {
    title: "All blogs - Saketh Kusuma",
    description: "Software Developer focused on building scalable web applications with Java, React.js, Node.js, MongoDB, and AWS. Passionate about problem-solving, clean code, and delivering impactful digital solutions.",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html
        lang="en"
        className={`${inter.className} h-full antialiased`}
      >
        <Container className="min-h-screen px-10 pt-14 md:pt-15 md:pb-10">{children}</Container>
      </html>
    );
  }
