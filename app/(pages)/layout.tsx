import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../navbar";
import Container from "../components/Container";
export const metadata: Metadata = {
  metadataBase: new URL("https://saketh-kusuma.vercel.app"),

  applicationName: "Saketh Kusuma Portfolio",

  title: {
    default: "Saketh Kusuma | Software Developer | React, Next.js & Java",
    template: "%s | Saketh Kusuma",
  },

  description:
    "Portfolio of Saketh Kusuma, a Software Developer specializing in React, Next.js, Java, Node.js, MongoDB, and AWS. Explore projects, technical blogs, and software engineering expertise.",

  keywords: [
    "Saketh Kusuma",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Java Developer",
    "Node.js",
    "MongoDB",
    "AWS",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Saketh Kusuma",
      url: "https://saketh-kusuma.vercel.app",
    },
  ],

  creator: "Saketh Kusuma",

  publisher: "Saketh Kusuma",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Saketh Kusuma | Software Developer",
    description:
      "Portfolio showcasing projects, blogs, and software engineering expertise.",
    url: "https://saketh-kusuma.vercel.app",
    siteName: "Saketh Kusuma",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saketh Kusuma Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saketh Kusuma | Software Developer",
    description:
      "Portfolio showcasing projects, blogs, and software engineering expertise.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   other: {
  //     "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  //   },
  // },

  category: "technology",
};
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
