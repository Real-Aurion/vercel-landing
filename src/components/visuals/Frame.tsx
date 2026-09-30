import type { ReactNode } from "react";
import styles from "./Frame.module.css";


export function Frame({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`${styles.frame} ${className ?? ""}`}>
      <div className={styles.chrome}>
        <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}


// The tinted, dotted stage every mockup sits on — Aurion's stand-in for Glean's artwork panels.
export function Stage({ children }: { children: ReactNode }) {
  return <div className={styles.stage}>{children}</div>;
}
