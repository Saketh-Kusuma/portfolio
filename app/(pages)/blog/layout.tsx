  import Container from "@/app/components/Container";
  import type { Metadata } from "next";
  import {Inter } from "next/font/google";

  const inter = Inter({subsets:["latin"],weight:["400","500","600","700","800","900"]})
  export const metadata: Metadata = {
    title: "Blogs | Saketh Kusuma",
    description: "Dive into my blogs on thoughts on code, design, and building things.",
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
        <Container className="">{children}</Container>
      </html>
    );
  }
