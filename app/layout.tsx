import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
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
  title: "LUMINA Studio — Human Documentary Photography",
  description: "Human documentary photography of people, relationships, and rituals, observed with care and held with honesty.",
  openGraph: {
    title: "LUMINA Studio — Human Documentary Photography",
    description: "Human documentary photography of people, relationships, and rituals, observed with care and held with honesty.",
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
