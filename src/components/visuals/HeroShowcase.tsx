import type { Locale } from "@/dictionaries";
import { ChatVisual } from "./AssistantVisuals";
import { CalendarVisual } from "./OperationsVisuals";
import styles from "./HeroShowcase.module.css";


// The two live products side by side: the 115 surgery schedule behind, the Assistant floating in front.
export function HeroShowcase({ lang }: { lang: Locale }) {
  return (
    <div className={styles.showcase}>
      <div className={styles.back}><CalendarVisual lang={lang} /></div>
      <div className={styles.front}><ChatVisual lang={lang} /></div>
    </div>
  );
}
