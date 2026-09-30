import { ArrowsRightLeftIcon, CheckCircleIcon, ClockIcon, QrCodeIcon } from "@heroicons/react/24/outline";
import type { CSSProperties } from "react";
import type { Locale } from "@/dictionaries";
import { Frame } from "./Frame";
import styles from "./OperationsVisuals.module.css";


type Surgery = { room: number; start: number; length: number; name: string; team: readonly [string, string]; state: "done" | "live" | "planned" | "moving" };


const calendarCopy = {
  vi: {
    title: "Lịch phẫu thuật · Thứ Hai 06/10",
    roles: ["Điều phối", "Bác sĩ", "Điều dưỡng"],
    room: "Phòng",
    legend: { done: "Hoàn tất", live: "Đang mổ", planned: "Đã xếp", moving: "Đang dời lịch" },
    team: (doctor: string, nurse: string) => `BS. ${doctor} · ĐD. ${nurse}`,
    surgeries: ["Cắt ruột thừa nội soi", "Thay khớp háng", "Mổ lấy sỏi mật", "Kết hợp xương đùi", "Cắt túi mật", "Nội soi khớp gối"],
  },
  en: {
    title: "Surgery schedule · Mon 06/10",
    roles: ["Coordinator", "Surgeon", "Nurse"],
    room: "OR",
    legend: { done: "Done", live: "In surgery", planned: "Scheduled", moving: "Being moved" },
    team: (doctor: string, nurse: string) => `Dr ${doctor} · RN ${nurse}`,
    surgeries: ["Laparoscopic appendectomy", "Hip replacement", "Gallstone removal", "Femur fixation", "Cholecystectomy", "Knee arthroscopy"],
  },
};


const surgeries: Omit<Surgery, "name">[] = [
  { room: 1, start: 0, length: 2, team: ["T", "H"], state: "done" },
  { room: 1, start: 2, length: 3, team: ["N", "L"], state: "live" },
  { room: 2, start: 1, length: 2, team: ["P", "M"], state: "live" },
  { room: 2, start: 4, length: 2, team: ["K", "A"], state: "moving" },
  { room: 3, start: 0, length: 3, team: ["V", "Q"], state: "done" },
  { room: 3, start: 4, length: 2, team: ["T", "B"], state: "planned" },
];


const hours = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"];


export function CalendarVisual({ lang }: { lang: Locale }) {
  const copy = calendarCopy[lang];
  return (
    <Frame title={copy.title} className={styles.wide}>
      <div className={styles.roles}>
        {copy.roles.map((role, index) => (
          <span key={role} className={styles.role} data-active={index === 0}>{role}</span>
        ))}
      </div>
      <div className={styles.calendar}>
        <span />
        {hours.map((hour) => <span key={hour} className={styles.hour}>{hour}</span>)}
        {[1, 2, 3].map((room) => (
          <span key={room} className={styles.room} style={{ gridRow: room + 1 }}>{copy.room} {room}</span>
        ))}
        {surgeries.map((surgery, index) => (
          <SurgeryBlock key={index} surgery={{ ...surgery, name: copy.surgeries[index] }} team={copy.team(...surgery.team)} />
        ))}
      </div>
      <div className={styles.legend}>
        {(["done", "live", "planned", "moving"] as const).map((state) => (
          <span key={state} className={styles.legendItem}><i data-state={state} />{copy.legend[state]}</span>
        ))}
      </div>
    </Frame>
  );
}


function SurgeryBlock({ surgery, team }: { surgery: Surgery; team: string }) {
  const style: CSSProperties = { gridRow: surgery.room + 1, gridColumn: `${surgery.start + 2} / span ${surgery.length}` };
  return (
    <div className={styles.surgery} data-state={surgery.state} style={style}>
      <strong>{surgery.name}</strong>
      <span>{team}</span>
      {surgery.state === "moving" && <ArrowsRightLeftIcon className={styles.moveIcon} strokeWidth={2} />}
    </div>
  );
}


const flowCopy = {
  vi: { title: "Điều phối bệnh nhân · Khoa Ngoại", stages: ["Tiếp nhận", "Chờ mổ", "Hồi sức", "Xuất viện"], wait: "phút" },
  en: { title: "Patient flow · Surgery ward", stages: ["Admitted", "Pre-op", "Recovery", "Discharged"], wait: "min" },
};


const flow = [
  { count: 12, patients: [["BN-2041", 8], ["BN-2044", 15]] },
  { count: 7, patients: [["BN-2032", 24], ["BN-2039", 41]] },
  { count: 5, patients: [["BN-2017", 62]] },
  { count: 9, patients: [["BN-1998", 0]] },
] as const;


export function PatientFlowVisual({ lang }: { lang: Locale }) {
  const copy = flowCopy[lang];
  return (
    <Frame title={copy.title} className={styles.wide}>
      <div className={styles.flow}>
        {flow.map((stage, index) => (
          <div key={copy.stages[index]} className={styles.stage}>
            <p className={styles.stageHead}>{copy.stages[index]}<span>{stage.count}</span></p>
            {stage.patients.map(([id, wait]) => (
              <div key={id} className={styles.patient} data-late={wait > 40}>
                <strong>{id.replace("BN", lang === "vi" ? "BN" : "PT")}</strong>
                {wait > 0 ? <span><ClockIcon strokeWidth={1.75} />{wait} {copy.wait}</span> : <span><CheckCircleIcon strokeWidth={1.75} /></span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}


const qrCopy = {
  vi: { title: "Quét QR vòng tay", confirmed: "Đã xác nhận bệnh nhân", rows: [["Bệnh nhân", "BN-2041"], ["Phòng mổ", "Phòng 2 · 09:30"], ["Ê-kíp", "BS. P · ĐD. M"]] },
  en: { title: "Wristband QR scan", confirmed: "Patient confirmed", rows: [["Patient", "PT-2041"], ["Theatre", "OR 2 · 09:30"], ["Team", "Dr P · Nurse M"]] },
};


export function QrCheckInVisual({ lang }: { lang: Locale }) {
  const copy = qrCopy[lang];
  return (
    <div className={styles.phone}>
      <p className={styles.phoneTitle}><QrCodeIcon strokeWidth={1.75} />{copy.title}</p>
      <div className={styles.viewfinder} aria-hidden="true">
        <span className={styles.qr} />
        <span className={styles.qrScan} />
      </div>
      <p className={styles.confirmed}><CheckCircleIcon strokeWidth={1.75} />{copy.confirmed}</p>
      <dl className={styles.qrDetails}>
        {copy.rows.map(([label, value]) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
    </div>
  );
}


const insightsCopy = {
  vi: {
    title: "Aurion Insights",
    kpis: [["312 giờ", "hành chính / tháng có thể tự động"], ["4 quy trình", "ưu tiên cao nhất"]],
    chart: "Thời gian thủ công theo khoa (giờ / tuần)",
    depts: ["Ngoại", "Nhi", "Xét nghiệm", "Nội", "Cấp cứu"],
  },
  en: {
    title: "Aurion Insights",
    kpis: [["312 hours", "of admin a month that could be automated"], ["4 workflows", "flagged as top priority"]],
    chart: "Manual hours by department (per week)",
    depts: ["Surgery", "Paediatrics", "Lab", "Internal", "Emergency"],
  },
};


const bars = [82, 64, 91, 47, 58];


export function InsightsVisual({ lang }: { lang: Locale }) {
  const copy = insightsCopy[lang];
  return (
    <Frame title={copy.title}>
      <div className={styles.kpis}>
        {copy.kpis.map(([value, label]) => (
          <div key={value} className={styles.kpi}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
      <p className={styles.chartTitle}>{copy.chart}</p>
      <div className={styles.bars}>
        {bars.map((value, index) => (
          <div key={copy.depts[index]} className={styles.barRow}>
            <span>{copy.depts[index]}</span>
            <i style={{ width: `${value}%` }} data-top={value > 80} />
          </div>
        ))}
      </div>
    </Frame>
  );
}
