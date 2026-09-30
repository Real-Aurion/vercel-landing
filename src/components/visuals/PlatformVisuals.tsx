import { BoltIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon, CircleStackIcon, CloudIcon, CpuChipIcon, EyeSlashIcon, LockClosedIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import type { Locale } from "@/dictionaries";
import { Frame } from "./Frame";
import styles from "./PlatformVisuals.module.css";


const cdrCopy = {
  vi: {
    sources: "Nguồn dữ liệu",
    live: "Đang kết nối",
    ready: "Sẵn sàng",
    context: "Clinical Context",
    contextDesc: "Chuẩn hóa · phân quyền",
    cdr: "Kho dữ liệu lâm sàng",
    uses: ["Aurion Assistant", "Aurion Operations", "Nghiên cứu"],
  },
  en: {
    sources: "Data sources",
    live: "Connected",
    ready: "Ready",
    context: "Clinical Context",
    contextDesc: "Standardise · permission",
    cdr: "Clinical data repository",
    uses: ["Aurion Assistant", "Aurion Operations", "Research"],
  },
};


export function CdrVisual({ lang }: { lang: Locale }) {
  const copy = cdrCopy[lang];
  const sources = [["HIS", true], ["LIS", false], ["PACS", false]] as const;
  const useIcons = [ChatBubbleLeftRightIcon, BoltIcon, CpuChipIcon];
  return (
    <div className={styles.pipeline}>
      <div className={styles.column}>
        <p className={styles.columnLabel}>{copy.sources}</p>
        {sources.map(([name, live]) => (
          <div key={name} className={styles.node} data-muted={!live}>
            <strong>{name}</strong>
            <span className={styles.status} data-live={live}>{live ? copy.live : copy.ready}</span>
          </div>
        ))}
      </div>
      <Wire />
      <div className={`${styles.column} ${styles.core}`}>
        <div className={`${styles.node} ${styles.hub}`}>
          <Image src="/logos/aurion-mark-white.png" alt="" width={28} height={28} />
          <strong>{copy.context}</strong>
          <span>{copy.contextDesc}</span>
        </div>
        <div className={`${styles.node} ${styles.store}`}>
          <CircleStackIcon strokeWidth={1.5} />
          <strong>{copy.cdr}</strong>
        </div>
      </div>
      <Wire />
      <div className={styles.column}>
        {copy.uses.map((use, index) => {
          const UseIcon = useIcons[index];
          return (
            <div key={use} className={styles.node}>
              <UseIcon className={styles.useIcon} strokeWidth={1.5} />
              <strong>{use}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}


function Wire() {
  return (
    <div className={styles.wire} aria-hidden="true">
      <i /><i /><i />
    </div>
  );
}


const connectorsCopy = {
  vi: { live: "Đang kết nối", ready: "Theo yêu cầu" },
  en: { live: "Connected", ready: "On request" },
};


const systems = [
  { name: "HIS", live: true, angle: -90 },
  { name: "LIS", live: false, angle: -18 },
  { name: "PACS", live: false, angle: 54 },
  { name: "EMR", live: false, angle: 126 },
  { name: "RIS", live: false, angle: 198 },
];


export function ConnectorsVisual({ lang }: { lang: Locale }) {
  const copy = connectorsCopy[lang];
  return (
    <div className={styles.orbit}>
      <span className={styles.ring} aria-hidden="true" />
      <div className={styles.center}>
        <Image src="/logos/aurion-mark-white.png" alt="" width={40} height={40} />
      </div>
      {systems.map((system) => (
        <div key={system.name} className={styles.satellite} data-live={system.live} style={{ ["--angle" as string]: `${system.angle}deg` }}>
          <strong>{system.name}</strong>
          <span>{system.live ? copy.live : copy.ready}</span>
        </div>
      ))}
    </div>
  );
}


const onPremCopy = {
  vi: {
    boundary: "Hạ tầng tại bệnh viện · Việt Nam",
    items: ["Aurion", "Kho dữ liệu lâm sàng", "Mô hình AI"],
    lock: "Mã hóa · phân quyền · nhật ký",
    outside: "Dữ liệu bệnh nhân không rời khỏi bệnh viện",
  },
  en: {
    boundary: "Hospital infrastructure · Vietnam",
    items: ["Aurion", "Clinical data repository", "AI models"],
    lock: "Encryption · access control · audit log",
    outside: "Patient data never leaves the hospital",
  },
};


export function OnPremVisual({ lang }: { lang: Locale }) {
  const copy = onPremCopy[lang];
  const icons = [ServerStackIcon, CircleStackIcon, CpuChipIcon];
  return (
    <div className={styles.onPrem}>
      <div className={styles.boundary}>
        <p className={styles.boundaryLabel}><BuildingOffice2Icon strokeWidth={1.5} />{copy.boundary}</p>
        <div className={styles.rack}>
          {copy.items.map((item, index) => {
            const ItemIcon = icons[index];
            return (
              <div key={item} className={styles.unit}>
                <ItemIcon strokeWidth={1.5} />
                <strong>{item}</strong>
                <i className={styles.led} />
              </div>
            );
          })}
        </div>
        <p className={styles.lock}><LockClosedIcon strokeWidth={1.75} />{copy.lock}</p>
      </div>
      <p className={styles.outside}><CloudIcon strokeWidth={1.5} /><s>Cloud</s>{copy.outside}</p>
    </div>
  );
}


const datasetCopy = {
  vi: {
    title: "Tạo bộ dữ liệu nghiên cứu",
    filters: ["Tuổi < 16", "Chẩn đoán: J18", "2023 – 2025"],
    result: "1.284 hồ sơ phù hợp",
    anonymized: "Đã ẩn danh hóa",
    headers: ["Mã", "Tuổi", "Chẩn đoán", "Số ngày"],
  },
  en: {
    title: "Build a research dataset",
    filters: ["Age < 16", "Diagnosis: J18", "2023 – 2025"],
    result: "1,284 matching records",
    anonymized: "De-identified",
    headers: ["ID", "Age", "Diagnosis", "Days"],
  },
};


const datasetRows = [["#a91f", "4", "J18.9", "6"], ["#c03d", "11", "J18.0", "4"], ["#7e22", "2", "J18.9", "8"]];


export function DatasetVisual({ lang }: { lang: Locale }) {
  const copy = datasetCopy[lang];
  return (
    <Frame title={copy.title}>
      <div className={styles.filters}>
        {copy.filters.map((filter) => <span key={filter} className={styles.filter}>{filter}</span>)}
      </div>
      <p className={styles.result}>
        <strong>{copy.result}</strong>
        <span className={styles.anon}><EyeSlashIcon strokeWidth={1.75} />{copy.anonymized}</span>
      </p>
      <div className={styles.dataTable}>
        <div className={`${styles.dataRow} ${styles.dataHead}`}>
          {copy.headers.map((header) => <span key={header}>{header}</span>)}
        </div>
        {datasetRows.map((row) => (
          <div key={row[0]} className={styles.dataRow}>
            {row.map((cell, index) => <span key={index}>{cell}</span>)}
          </div>
        ))}
      </div>
    </Frame>
  );
}
