import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./navbar/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          "h-full",
          "antialiased",
          inter.className,
          "font-sans",
          geist.variable,
        )}
      >
        <body className="relative min-h-full flex flex-col select-none bg-neutral-100 dark:bg-neutral-800">
          <Script
            id="schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Person",
                    name: "Saketh Kusuma",
                    url: "https://saketh-kusuma.vercel.app",
                    image: "https://saketh-kusuma.vercel.app/avatar-hero2.jpeg",
                    jobTitle: "Software Developer",
                    sameAs: [
                      "https://github.com/Saketh-Kusuma",
                      "https://www.linkedin.com/in/saketh-kusuma/",
                    ],
                  },
                  {
                    "@type": "WebSite",
                    name: "Saketh Kusuma Portfolio",
                    url: "https://saketh-kusuma.vercel.app",
                    description:
                      "Portfolio showcasing projects, blogs, and software engineering expertise.",
                  },
                ],
              }),
            }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex-1 flex flex-col w-full">{children}</main>

            <Footer />

            <Toaster position="bottom-right" richColors />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
