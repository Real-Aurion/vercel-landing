import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Partners } from "@/components/sections/Partners";
import { Visual } from "@/components/visuals/Visual";
import type { Block, Status } from "@/content/pages/types";
import { isPublished } from "@/content/visibility";
import type { Dictionary, Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import styles from "./Blocks.module.css";


type BlockOf<T extends Block["type"]> = Extract<Block, { type: T }>;


type Props = { blocks: Block[]; lang: Locale; dict: Dictionary };


export function Blocks({ blocks, lang, dict }: Props) {
  return blocks.map((block, index) => (
    <section key={index} className={styles.section} data-type={block.type} id={"id" in block ? block.id : undefined}>
      <div className="container">
        <BlockBody block={block} lang={lang} dict={dict} />
      </div>
    </section>
  ));
}


function BlockBody({ block, lang, dict }: { block: Block; lang: Locale; dict: Dictionary }) {
  switch (block.type) {
    case "grid": return <Grid block={block} dict={dict} />;
    case "split": return <Split block={block} lang={lang} dict={dict} />;
    case "steps": return <Steps block={block} />;
    case "links": return <Links block={block} lang={lang} />;
    case "logos": return <Partners customers={{ ...dict.customers, heading: block.heading }} bare />;
    case "notice": return <Notice block={block} lang={lang} />;
  }
}


function StatusBadge({ status, dict }: { status: Status; dict: Dictionary }) {
  return <span className={styles.status} data-status={status}>{dict.status[status]}</span>;
}


function Points({ points }: { points: string[] }) {
  return (
    <ul className={styles.points}>
      {points.map((point) => (
        <li key={point}><CheckIcon className={styles.check} strokeWidth={2.25} aria-hidden="true" />{point}</li>
      ))}
    </ul>
  );
}


function Grid({ block, dict }: { block: BlockOf<"grid">; dict: Dictionary }) {
  return (
    <div className={styles.gridLayout}>
      <div className={styles.sticky}>
        {block.overline && <span className="overline">{block.overline}</span>}
        <h2 className={styles.heading}>{block.heading}</h2>
        {block.lead && <p className={styles.lead}>{block.lead}</p>}
      </div>
      <ul className={styles.cells}>
        {block.items.map((item) => (
          <li key={item.title} id={item.id} className={styles.cell}>
            <div className={styles.cellTop}>
              <Icon name={item.icon} className={styles.cellIcon} />
              {item.status && <StatusBadge status={item.status} dict={dict} />}
            </div>
            <h3 className={styles.cellTitle}>{item.title}</h3>
            <p className={styles.cellDesc}>{item.desc}</p>
            {item.points && <Points points={item.points} />}
          </li>
        ))}
      </ul>
    </div>
  );
}


function Split({ block, lang, dict }: { block: BlockOf<"split">; lang: Locale; dict: Dictionary }) {
  return (
    <div className={styles.split} data-reverse={block.reverse ?? false}>
      <div className={styles.splitText}>
        <div className={styles.splitMeta}>
          <span className="overline">{block.overline}</span>
          {block.status && <StatusBadge status={block.status} dict={dict} />}
        </div>
        <h2 className={styles.heading}>{block.heading}</h2>
        <p className={styles.lead}>{block.body}</p>
        {block.points && <Points points={block.points} />}
      </div>
      <div className={styles.splitVisual}>
        <Visual name={block.visual} lang={lang} />
      </div>
    </div>
  );
}


function Steps({ block }: { block: BlockOf<"steps"> }) {
  return (
    <>
      <div className={styles.centerHead}>
        {block.overline && <span className="overline">{block.overline}</span>}
        <h2 className={styles.heading}>{block.heading}</h2>
      </div>
      <ol className={styles.steps}>
        {block.items.map((item, index) => (
          <li key={item.title} className={styles.step}>
            <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className={styles.cellTitle}>{item.title}</h3>
            <p className={styles.cellDesc}>{item.desc}</p>
          </li>
        ))}
      </ol>
    </>
  );
}


function Links({ block, lang }: { block: BlockOf<"links">; lang: Locale }) {
  return (
    <>
      <div className={styles.centerHead}>
        {block.overline && <span className="overline">{block.overline}</span>}
        <h2 className={styles.heading}>{block.heading}</h2>
      </div>
      <ul className={styles.linkGrid}>
        {block.items.filter((item) => isPublished(item.href)).map((item) => (
          <li key={item.href}>
            <Link className={styles.linkCard} href={localHref(lang, item.href)}>
              <Icon name={item.icon} className={styles.cellIcon} />
              <h3 className={styles.cellTitle}>{item.title}</h3>
              <p className={styles.cellDesc}>{item.desc}</p>
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
      <span className={styles.noticeTile}><Icon name={block.icon} className={styles.noticeIcon} /></span>
      <h2 className={styles.heading}>{block.title}</h2>
      <p className={styles.lead}>{block.body}</p>
      {action && href && <a className="button button--primary" href={href}>{action.label}</a>}
    </div>
  );
}
