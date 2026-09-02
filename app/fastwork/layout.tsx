import type { ReactNode } from "react";
import { Noto_Sans_Thai } from "next/font/google";
import styles from "./font-fix.module.css";

const fastworkThai = Noto_Sans_Thai({
  variable: "--font-fastwork-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function FastworkLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={`${fastworkThai.variable} ${styles.typographyScope}`}>{children}</div>;
}
