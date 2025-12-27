import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MetaPixel from "@/components/MetaPixel";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://drftmarketing.com"),
  title: "DRFT Marketing | Influencer Marketing That Delivers",
  description:
    "Connect with 500+ influencers across 30+ brands with 2M+ reach. Professional influencer marketing campaigns that drive real results.",
  keywords:
    "influencer marketing, brand partnerships, social media marketing, content creators, digital marketing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drftmarketing.com",
    title: "DRFT Marketing | Influencer Marketing That Delivers",
    description:
      "Connect with 500+ influencers across 30+ brands with 2M+ reach.",
    siteName: "DRFT Marketing",
    images: [
      {
        url: "/drft-logo-trans.png",
        width: 1200,
        height: 630,
        alt: "DRFT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRFT – Custom Tailored Strategies",
    description: "Creator-led marketing campaigns, tailored for real ROI.",
    images: ["/drft-logo-trans.png"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MetaPixel />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
