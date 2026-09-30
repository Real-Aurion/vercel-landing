"use client";

import { AcademicCapIcon, BeakerIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import styles from "./Impact.module.css";


const tabs = [
  { key: "pathology", Icon: BeakerIcon, values: ["3×", "98%"] },
  { key: "hospital", Icon: BuildingOffice2Icon, values: ["40%", "2×"] },
  { key: "research", Icon: AcademicCapIcon, values: ["5×", "ML"] },
] as const;


export function Impact({ impact }: { impact: Dictionary["impact"] }) {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("pathology");
  const tab = tabs.find((item) => item.key === active) ?? tabs[0];
  const copy = impact[tab.key];
  return (
    <section className="section section--alt" id="impact">
      <div className="container">
        <div className="section-heading">
          <h2>{impact.heading}</h2>
        </div>
        <div className={styles.tabs} role="tablist">
          {tabs.map(({ key, Icon }) => (
            <button
              key={key}
              type="button"
              role="tab"
              id={`impact-tab-${key}`}
              aria-selected={key === active}
              aria-controls="impact-panel"
              className={styles.tab}
              onClick={() => setActive(key)}
            >
              <Icon className={styles.tabIcon} strokeWidth={1.75} aria-hidden="true" />
              {impact[key].title}
            </button>
          ))}
        </div>
        <div className={styles.panel} role="tabpanel" id="impact-panel" aria-labelledby={`impact-tab-${tab.key}`}>
          <div>
            <p className={styles.subtitle}>{copy.subtitle}</p>
            <h3 className={styles.title}>{copy.title}</h3>
            <p className={styles.description}>{copy.description}</p>
          </div>
          <ul className={styles.metrics}>
            <Metric value={tab.values[0]} label={copy.stat1} />
            <Metric value={tab.values[1]} label={copy.stat2} />
            <li className={`${styles.metric} ${styles.metricWide}`}>
              <span className={styles.metricLabel}>{copy.stat3}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


function Metric({ value, label }: { value: string; label: string }) {
  return (
    <li className={styles.metric}>
      <span className={styles.metricValue}>{value}</span>
      <span className={styles.metricLabel}>{label}</span>
    </li>
  );
}
