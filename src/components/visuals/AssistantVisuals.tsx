import { ArrowRightIcon, CheckIcon, DocumentTextIcon, PaperAirplaneIcon, SparklesIcon } from "@heroicons/react/24/outline";
import type { Locale } from "@/dictionaries";
import { Frame } from "./Frame";
import styles from "./AssistantVisuals.module.css";


const chatCopy = {
  vi: {
    question: "Trẻ sốt xuất huyết có dấu hiệu cảnh báo cần xử trí thế nào theo phác đồ của khoa?",
    answer: ["Theo phác đồ của khoa, trẻ có dấu hiệu cảnh báo cần nhập viện theo dõi và bù dịch theo cân nặng ", " Cần theo dõi sát sinh hiệu, lượng nước tiểu và Hct theo lịch "],
    sources: ["Phác đồ Sốt xuất huyết Dengue · Khoa Nhiễm", "Hướng dẫn theo dõi dịch truyền · 2024"],
    placeholder: "Hỏi Aurion bất cứ điều gì…",
    sourcesLabel: "Nguồn",
  },
  en: {
    question: "How should a child with dengue warning signs be managed under our ward's protocol?",
    answer: ["Under the ward protocol, a child with warning signs should be admitted for observation and given fluids by body weight ", " Monitor vital signs, urine output and Hct on schedule "],
    sources: ["Dengue Fever Protocol · Infectious Diseases", "IV Fluid Monitoring Guide · 2024"],
    placeholder: "Ask Aurion anything…",
    sourcesLabel: "Sources",
  },
};


export function ChatVisual({ lang }: { lang: Locale }) {
  const copy = chatCopy[lang];
  return (
    <Frame title="Aurion Assistant">
      <div className={styles.chat}>
        <p className={styles.question}>{copy.question}</p>
        <div className={styles.answer}>
          <span className={styles.avatar}><SparklesIcon strokeWidth={1.75} /></span>
          <p>
            {copy.answer[0]}<Cite n={1} />.{copy.answer[1]}<Cite n={2} />.
          </p>
        </div>
        <p className={styles.sourcesLabel}>{copy.sourcesLabel}</p>
        <ul className={styles.sources}>
          {copy.sources.map((source, index) => (
            <li key={source}>
              <span className={styles.sourceNumber}>{index + 1}</span>
              <DocumentTextIcon className={styles.sourceIcon} strokeWidth={1.5} />
              {source}
            </li>
          ))}
        </ul>
        <div className={styles.input}>
          {copy.placeholder}
          <PaperAirplaneIcon className={styles.send} strokeWidth={1.75} />
        </div>
      </div>
    </Frame>
  );
}


function Cite({ n }: { n: number }) {
  return <sup className={styles.cite}>{n}</sup>;
}


const docCopy = {
  vi: {
    title: "Tóm tắt ra viện · BN-2041",
    badge: "Bản nháp AI · chờ bác sĩ duyệt",
    rows: [
      ["Chẩn đoán", "Viêm phổi cộng đồng, đã ổn định"],
      ["Diễn tiến", "Hết sốt sau 48 giờ, SpO₂ ổn định 97–98%"],
      ["Điều trị", "Kháng sinh đường tĩnh mạch 5 ngày, chuyển đường uống"],
      ["Dặn dò", "Tái khám sau 7 ngày hoặc khi sốt lại"],
    ],
    edit: "Chỉnh sửa",
    approve: "Duyệt",
  },
  en: {
    title: "Discharge summary · PT-2041",
    badge: "AI draft · awaiting doctor review",
    rows: [
      ["Diagnosis", "Community-acquired pneumonia, stable"],
      ["Course", "Afebrile after 48 hours, SpO₂ steady at 97–98%"],
      ["Treatment", "5 days of IV antibiotics, switched to oral"],
      ["Instructions", "Follow up in 7 days or if fever returns"],
    ],
    edit: "Edit",
    approve: "Approve",
  },
};


export function DocumentationVisual({ lang }: { lang: Locale }) {
  const copy = docCopy[lang];
  return (
    <Frame title={copy.title}>
      <span className={styles.draftBadge}><SparklesIcon strokeWidth={1.75} />{copy.badge}</span>
      <dl className={styles.doc}>
        {copy.rows.map(([label, value]) => (
          <div key={label} className={styles.docRow}>
            <dt>{label}</dt>
            <dd><mark>{value}</mark></dd>
          </div>
        ))}
      </dl>
      <div className={styles.docActions}>
        <span className={styles.ghost}>{copy.edit}</span>
        <span className={styles.solid}><CheckIcon strokeWidth={2} />{copy.approve}</span>
      </div>
    </Frame>
  );
}


const ocrCopy = {
  vi: { title: "OCR y khoa", slip: "Phiếu xét nghiệm", headers: ["Chỉ số", "Kết quả", "Đơn vị"], confidence: "Độ tin cậy 99%" },
  en: { title: "Medical OCR", slip: "Lab slip", headers: ["Test", "Result", "Unit"], confidence: "99% confidence" },
};


const ocrRows = [["WBC", "8.2", "G/L"], ["HGB", "128", "g/L"], ["PLT", "245", "G/L"], ["CRP", "4.1", "mg/L"]];


export function OcrVisual({ lang }: { lang: Locale }) {
  const copy = ocrCopy[lang];
  return (
    <Frame title={copy.title}>
      <div className={styles.ocr}>
        <div className={styles.slip} aria-hidden="true">
          <span className={styles.slipTitle}>{copy.slip}</span>
          {ocrRows.map(([name]) => <span key={name} className={styles.slipLine} />)}
          <span className={styles.scanLine} />
        </div>
        <ArrowRightIcon className={styles.ocrArrow} strokeWidth={1.75} />
        <div className={styles.table}>
          <div className={`${styles.tableRow} ${styles.tableHead}`}>
            {copy.headers.map((header) => <span key={header}>{header}</span>)}
          </div>
          {ocrRows.map((row) => (
            <div key={row[0]} className={styles.tableRow}>
              {row.map((cell) => <span key={cell}>{cell}</span>)}
            </div>
          ))}
          <span className={styles.confidence}><CheckIcon strokeWidth={2} />{copy.confidence}</span>
        </div>
      </div>
    </Frame>
  );
}
