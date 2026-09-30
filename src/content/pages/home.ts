import type { Locale } from "@/dictionaries";
import type { Block } from "./types";


export const homeBlocks: Record<Locale, Block[]> = {
  vi: [
    {
      type: "split",
      overline: "Aurion Assistant",
      status: "live",
      heading: "Trợ lý AI hiểu bệnh viện của bạn",
      body: "Tra cứu tri thức y khoa và soạn thảo hồ sơ bằng tiếng Việt. Mỗi câu trả lời đều dựa trên tài liệu của chính bệnh viện và kèm nguồn trích dẫn.",
      points: ["Tra cứu phác đồ và tài liệu nội bộ", "Bản nháp hồ sơ để bác sĩ duyệt", "Trả lời kèm nguồn trích dẫn"],
      visual: "documentation",
    },
    {
      type: "split",
      overline: "Aurion Operations",
      status: "live",
      reverse: true,
      heading: "Phòng mổ và khoa phòng phối hợp như một đội",
      body: "Lịch phẫu thuật toàn quy trình và điều phối bệnh nhân: quét QR, giao diện theo vai trò, dời lịch và phân công ê-kíp trên một hệ thống.",
      points: ["Lịch phẫu thuật toàn quy trình", "Điều phối bệnh nhân theo thời gian thực", "Giao diện cho từng vai trò"],
      visual: "patientFlow",
    },
    {
      type: "split",
      overline: "Nền tảng Aurion",
      heading: "Một nền tảng dữ liệu, ngay tại bệnh viện",
      body: "Clinical Context kết nối HIS, kho dữ liệu lâm sàng tập trung dữ liệu, và mọi thứ chạy on-premise trên máy chủ của bệnh viện ở Việt Nam.",
      points: ["Kết nối HIS", "Kho dữ liệu lâm sàng", "Dữ liệu không rời khỏi bệnh viện"],
      visual: "cdr",
    },
    {
      type: "stats",
      overline: "Aurion trong con số",
      heading: "Kết quả đo được tại các dự án",
      items: [
        { value: "40%", label: "Giảm khối lượng công việc hành chính" },
        { value: "3×", label: "Xử lý mẫu xét nghiệm nhanh hơn" },
        { value: "98%", label: "Độ chính xác trích xuất dữ liệu" },
        { value: "100%", label: "Dữ liệu lưu tại Việt Nam" },
      ],
    },
  ],
  en: [
    {
      type: "split",
      overline: "Aurion Assistant",
      status: "live",
      heading: "An AI assistant that knows your hospital",
      body: "Medical knowledge search and clinical documentation in plain language. Every answer comes from the hospital's own documents, with citations.",
      points: ["Search guidelines and internal documents", "Draft documents for doctors to approve", "Answers with citations"],
      visual: "documentation",
    },
    {
      type: "split",
      overline: "Aurion Operations",
      status: "live",
      reverse: true,
      heading: "Theatres and wards that work as one team",
      body: "End-to-end surgery scheduling and patient flow: QR scanning, role-based views, rescheduling and team assignment in one system.",
      points: ["End-to-end surgery scheduling", "Real-time patient flow", "A view for every role"],
      visual: "patientFlow",
    },
    {
      type: "split",
      overline: "The Aurion platform",
      heading: "One data platform, inside the hospital",
      body: "Clinical Context connects the HIS, the clinical data repository brings data together, and everything runs on-premise on the hospital's own servers in Vietnam.",
      points: ["HIS integration", "Clinical data repository", "Data never leaves the hospital"],
      visual: "cdr",
    },
    {
      type: "stats",
      overline: "Aurion in numbers",
      heading: "Measured results from our projects",
      items: [
        { value: "40%", label: "Less administrative work" },
        { value: "3×", label: "Faster lab sample processing" },
        { value: "98%", label: "Data extraction accuracy" },
        { value: "100%", label: "Of data stored in Vietnam" },
      ],
    },
  ],
};
