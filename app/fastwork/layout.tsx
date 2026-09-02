import type { ReactNode } from "react";
import styles from "./font-fix.module.css";

export default function FastworkLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={styles.typographyScope}>{children}</div>;
}
