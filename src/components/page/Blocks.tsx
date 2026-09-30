import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Block } from "@/content/pages/types";
import type { Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import styles from "./Blocks.module.css";


type BlockOf<T extends Block["type"]> = Extract<Block, { type: T }>;


export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Locale }) {
  return blocks.map((block, index) => (
    <section key={index} className={`section ${index % 2 ? "section--alt" : ""}`} id={blockId(block)}>
      <div className="container">
        <BlockBody block={block} lang={lang} />
      </div>
    </section>
  ));
}


function blockId(block: Block): string | undefined {
  return block.type === "features" ? block.id : undefined;
}


function BlockBody({ block, lang }: { block: Block; lang: Locale }) {
  switch (block.type) {
    case "features": return <Features block={block} />;
    case "metrics": return <Metrics block={block} />;
    case "steps": return <Steps block={block} />;
    case "links": return <Links block={block} lang={lang} />;
    case "notice": return <Notice block={block} lang={lang} />;
  }
}


function Heading({ overline, heading, lead }: { overline?: string; heading: string; lead?: string }) {
  return (
    <div className={styles.heading}>
      {overline && <span className="overline">{overline}</span>}
      <h2>{heading}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}


function Features({ block }: { block: BlockOf<"features"> }) {
  return (
    <>
      <Heading overline={block.overline} heading={block.heading} lead={block.lead} />
      <ul className={styles.grid}>
        {block.items.map((item) => (
          <li key={item.title} id={item.id} className={styles.card}>
            <span className={styles.tile}><Icon name={item.icon} className={styles.tileIcon} /></span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}


function Metrics({ block }: { block: BlockOf<"metrics"> }) {
  return (
    <>
      {block.heading && <Heading heading={block.heading} />}
      <ul className={styles.metrics}>
        {block.items.map((item) => (
          <li key={item.label} className={styles.metric}>
            <span className={styles.metricValue}>{item.value}</span>
            <span className={styles.metricLabel}>{item.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}


function Steps({ block }: { block: BlockOf<"steps"> }) {
  return (
    <>
      <Heading overline={block.overline} heading={block.heading} />
      <ol className={styles.steps}>
        {block.items.map((item, index) => (
          <li key={item.title} className={styles.step}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </li>
        ))}
      </ol>
    </>
  );
}


function Links({ block, lang }: { block: BlockOf<"links">; lang: Locale }) {
  return (
    <>
      <Heading heading={block.heading} lead={block.lead} />
      <ul className={styles.grid}>
        {block.items.map((item) => (
          <li key={item.href}>
            <Link className={`${styles.card} ${styles.linkCard}`} href={localHref(lang, item.href)}>
              <span className={styles.tile}><Icon name={item.icon} className={styles.tileIcon} /></span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <ArrowRightIcon className={styles.linkArrow} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}


function Notice({ block, lang }: { block: BlockOf<"notice">; lang: Locale }) {
  const { action } = block;
  const href = action && (action.href.startsWith("mailto:") ? action.href : localHref(lang, action.href));
  return (
    <div className={styles.notice}>
      <span className={styles.tile}><Icon name={block.icon} className={styles.tileIcon} /></span>
      <h2 className={styles.noticeTitle}>{block.title}</h2>
      <p className={styles.lead}>{block.body}</p>
      {action && href && <a className="button button--secondary" href={href}>{action.label}</a>}
    </div>
  );
}
