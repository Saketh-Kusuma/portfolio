import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../navbar";
import Container from "../components/Container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-full flex flex-col bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      {children}
    </Container>
  );
}
