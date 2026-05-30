import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { contentConfig } from "../src/config/content";
import { navigationConfig } from "../src/config/navigation";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
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
    description: "Premium photography and cinematic visual storytelling for meaningful occasions.",
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
      className={`${jakartaSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
