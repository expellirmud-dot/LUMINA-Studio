import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { contentConfig } from "../src/config/content";
import { navigationConfig } from "../src/config/navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${navigationConfig.logoText} ${navigationConfig.logoSecondary} | ${contentConfig.owner.name} Photography`,
  description: contentConfig.hero.subtitle,
  openGraph: {
    title: `${navigationConfig.logoText} ${navigationConfig.logoSecondary} by ${contentConfig.owner.name}`,
    description: contentConfig.hero.subtitle,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSansThai.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
