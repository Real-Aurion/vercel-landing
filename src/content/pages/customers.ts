import type { LocalizedPage } from "./types";


export const customers: LocalizedPage = {
  vi: {
    meta: { title: "Câu chuyện khách hàng", description: "Aurion cùng Bệnh viện Nhi Đồng 1 và Bệnh viện Nhân dân 115 số hóa y tế Việt Nam." },
    hero: {
      overline: "Câu chuyện khách hàng",
      title: "Cùng các bệnh viện hàng đầu số hóa y tế Việt Nam",
      lead: "Aurion làm việc trực tiếp với từng bệnh viện, đưa AI và tự động hóa vào công việc hằng ngày của đội ngũ y tế.",
    },
    blocks: [
      { type: "logos", heading: "Đối tác của Aurion" },
      {
        type: "split",
        overline: "Bệnh viện Nhi Đồng 1",
        heading: "Ngữ cảnh AI, trợ lý và kho dữ liệu lâm sàng",
        body: "Aurion xây dựng lớp ngữ cảnh AI kết nối với HIS của bệnh viện, trợ lý AI cho nhân viên y tế và kho dữ liệu lâm sàng tập trung.",
        points: ["Kết nối với HIS", "Trợ lý AI trả lời kèm nguồn", "Kho dữ liệu lâm sàng sắp vận hành chính thức"],
        visual: "cdr",
      },
      {
        type: "split",
        overline: "Bệnh viện Nhân dân 115",
        
        reverse: true,
        heading: "Hệ thống lịch phẫu thuật toàn quy trình",
        body: "Từ quét QR xác nhận bệnh nhân, xếp và dời lịch mổ, đến phân công bác sĩ và điều dưỡng. Toàn bộ quy trình phẫu thuật nằm trên một hệ thống.",
        points: ["Quét QR vòng tay bệnh nhân", "Giao diện theo từng vai trò", "Phân công ê-kíp cho từng ca"],
        visual: "calendar",
      },
      {
        type: "links",
        overline: "Đọc câu chuyện",
        heading: "Chi tiết từng dự án",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Bệnh viện Nhi Đồng 1", desc: "Ngữ cảnh AI, trợ lý và kho dữ liệu lâm sàng." },
          { href: "/customers/115", icon: "heart", title: "Bệnh viện Nhân dân 115", desc: "Lịch phẫu thuật toàn quy trình." },
          { href: "/#contact", icon: "envelope", title: "Bệnh viện của bạn?", desc: "Trao đổi với chúng tôi về dự án tiếp theo." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Customer stories", description: "Aurion, Nhi Dong 1 Hospital and People's Hospital 115 digitising Vietnamese healthcare." },
    hero: {
      overline: "Customer stories",
      title: "Digitising Vietnamese healthcare with leading hospitals",
      lead: "Aurion works directly with each hospital to bring AI and automation into the daily work of its care teams.",
    },
    blocks: [
      { type: "logos", heading: "Aurion's partners" },
      {
        type: "split",
        overline: "Nhi Dong 1 Hospital",
        heading: "AI context, an assistant and a clinical data repository",
        body: "Aurion built an AI context layer connected to the hospital's HIS, an AI assistant for care teams and a central clinical data repository.",
        points: ["Connected to the HIS", "An AI assistant that cites sources", "Clinical data repository close to going live"],
        visual: "cdr",
      },
      {
        type: "split",
        overline: "People's Hospital 115",
        
        reverse: true,
        heading: "An end-to-end surgery scheduling system",
        body: "From scanning a QR code to confirm the patient, to booking and moving surgeries, to assigning surgeons and nurses. The whole surgical workflow lives in one system.",
        points: ["Patient wristband QR scanning", "Views for every role", "Team assignment for every case"],
        visual: "calendar",
      },
      {
        type: "links",
        overline: "Read the stories",
        heading: "Project details",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Nhi Dong 1 Hospital", desc: "AI context, assistant and clinical data repository." },
          { href: "/customers/115", icon: "heart", title: "People's Hospital 115", desc: "End-to-end surgery scheduling." },
          { href: "/#contact", icon: "envelope", title: "Your hospital?", desc: "Talk to us about your next project." },
        ],
      },
    ],
  },
};


const outcomesVi = {
  type: "grid" as const,
  overline: "Kết quả",
  heading: "Điều bệnh viện nhận được",
  items: [
    { icon: "building" as const, title: "Chuyển đổi số theo lộ trình", desc: "Số hóa quy trình theo định hướng chuyển đổi số của ngành y tế." },
    { icon: "calendar" as const, title: "Tiết kiệm thời gian", desc: "Bớt giấy tờ và điện thoại, đội ngũ y tế tập trung vào chuyên môn." },
    { icon: "bolt" as const, title: "Tự động hóa", desc: "Những việc lặp lại được hệ thống xử lý tự động." },
    { icon: "circleStack" as const, title: "Mọi thứ ở một nơi", desc: "Dữ liệu và quy trình tập trung trên một nền tảng, lưu tại bệnh viện." },
  ],
};


const outcomesEn = {
  type: "grid" as const,
  overline: "Outcomes",
  heading: "What the hospital gains",
  items: [
    { icon: "building" as const, title: "Digital transformation on track", desc: "Workflows digitised in line with the healthcare sector's digital roadmap." },
    { icon: "calendar" as const, title: "Time saved", desc: "Less paperwork and fewer phone calls, so staff focus on care." },
    { icon: "bolt" as const, title: "Automation", desc: "Repetitive work is handled by the system." },
    { icon: "circleStack" as const, title: "Everything in one place", desc: "Data and workflows on one platform, stored inside the hospital." },
  ],
};


export const nhiDong1: LocalizedPage = {
  vi: {
    meta: { title: "Bệnh viện Nhi Đồng 1", description: "Aurion cùng Bệnh viện Nhi Đồng 1 xây dựng ngữ cảnh AI, trợ lý AI và kho dữ liệu lâm sàng." },
    hero: {
      overline: "Câu chuyện khách hàng · Nhi Đồng 1",
      title: "Đưa tri thức và dữ liệu của bệnh viện vào một nơi",
      lead: "Cùng Bệnh viện Nhi Đồng 1, một trong những bệnh viện nhi khoa hàng đầu Việt Nam, Aurion xây dựng lớp ngữ cảnh AI, trợ lý AI và kho dữ liệu lâm sàng.",
      visual: "chat",
    },
    blocks: [
      {
        type: "split",
        overline: "Ngữ cảnh AI của bệnh viện",
        heading: "AI hiểu đúng bối cảnh của bệnh viện",
        body: "Lớp Clinical Context kết nối với HIS, chuẩn hóa dữ liệu và áp dụng đúng phân quyền, để mọi ứng dụng AI đều dựa trên dữ liệu thật của bệnh viện.",
        points: ["Kết nối trực tiếp với HIS", "Dữ liệu chuẩn hóa, phân quyền theo vai trò"],
        visual: "connectors",
      },
      {
        type: "split",
        overline: "Trợ lý AI",
        reverse: true,
        heading: "Nhân viên y tế hỏi, trợ lý trả lời kèm nguồn",
        body: "Trợ lý AI giúp tra cứu tri thức y khoa và soạn thảo hồ sơ bằng tiếng Việt, mỗi câu trả lời đều dẫn về tài liệu gốc.",
        points: ["Tra cứu tri thức y khoa", "Soạn thảo hồ sơ"],
        visual: "documentation",
      },
      {
        type: "split",
        overline: "Kho dữ liệu lâm sàng",
        heading: "Một nguồn dữ liệu cho cả bệnh viện",
        body: "Kho dữ liệu lâm sàng tập trung dữ liệu từ HIS theo cấu trúc thống nhất và đang bước vào giai đoạn vận hành chính thức.",
        points: ["Đồng bộ tự động từ HIS", "Sẵn sàng cho vận hành và nghiên cứu", "Lưu trữ on-premise tại bệnh viện"],
        visual: "dataset",
      },
      outcomesVi,
    ],
  },
  en: {
    meta: { title: "Nhi Dong 1 Hospital", description: "Aurion and Nhi Dong 1 Hospital build an AI context layer, an AI assistant and a clinical data repository." },
    hero: {
      overline: "Customer story · Nhi Dong 1",
      title: "Bringing the hospital's knowledge and data into one place",
      lead: "With Nhi Dong 1 Hospital, one of Vietnam's leading paediatric hospitals, Aurion is building an AI context layer, an AI assistant and a clinical data repository.",
      visual: "chat",
    },
    blocks: [
      {
        type: "split",
        overline: "Hospital AI context",
        heading: "AI that understands the hospital",
        body: "The Clinical Context layer connects to the HIS, standardises data and applies the right permissions, so every AI application works from the hospital's real data.",
        points: ["Direct HIS connection", "Standardised data, role-based access"],
        visual: "connectors",
      },
      {
        type: "split",
        overline: "AI assistant",
        reverse: true,
        heading: "Staff ask, the assistant answers with sources",
        body: "The AI assistant helps staff search medical knowledge and draft documents, and every answer links back to its source.",
        points: ["Medical knowledge search", "Clinical documentation"],
        visual: "documentation",
      },
      {
        type: "split",
        overline: "Clinical data repository",
        heading: "One source of data for the whole hospital",
        body: "The clinical data repository brings HIS data into one consistent structure and is now moving into full operation.",
        points: ["Automatic sync from HIS", "Ready for operations and research", "Stored on-premise at the hospital"],
        visual: "dataset",
      },
      outcomesEn,
    ],
  },
};


export const hospital115: LocalizedPage = {
  vi: {
    meta: { title: "Bệnh viện Nhân dân 115", description: "Aurion cùng Bệnh viện Nhân dân 115 số hóa toàn bộ quy trình phẫu thuật." },
    hero: {
      overline: "Câu chuyện khách hàng · Nhân dân 115",
      title: "Toàn bộ quy trình phẫu thuật, số hóa trên một hệ thống",
      lead: "Cùng Bệnh viện Nhân dân 115, bệnh viện đa khoa lớn tại Thành phố Hồ Chí Minh, Aurion xây dựng hệ thống lịch phẫu thuật bao quát từ lúc xếp lịch đến khi ca mổ hoàn tất.",
      visual: "calendar",
    },
    blocks: [
      {
        type: "grid",
        overline: "Tính năng",
        heading: "Mọi bước của ca mổ, trên một hệ thống",
        items: [
          { icon: "calendar", title: "Lịch phẫu thuật tổng", desc: "Một lịch chung cho mọi phòng mổ, cập nhật theo thời gian thực." },
          { icon: "search", title: "Quét QR", desc: "Quét QR vòng tay để xác nhận đúng bệnh nhân, đúng ca, đúng phòng." },
          { icon: "users", title: "Giao diện theo vai trò", desc: "Điều phối viên, bác sĩ và điều dưỡng mỗi người thấy đúng phần việc của mình." },
          { icon: "adjustments", title: "Dời lịch mổ", desc: "Dời ca mổ trong vài thao tác, mọi bên liên quan được cập nhật ngay." },
          { icon: "heart", title: "Phân công ê-kíp", desc: "Phân công bác sĩ và điều dưỡng cho từng ca mổ." },
          { icon: "sparkles", title: "Và còn nhiều hơn nữa", desc: "Hệ thống bao quát toàn bộ quy trình phẫu thuật của bệnh viện, với nhiều tính năng tiếp tục được bổ sung." },
        ],
      },
      {
        type: "split",
        overline: "Xác nhận bằng QR",
        
        reverse: true,
        heading: "Đúng bệnh nhân, đúng phòng mổ, đúng giờ",
        body: "Điều dưỡng quét QR trên vòng tay bệnh nhân, hệ thống đối chiếu với lịch mổ và ê-kíp được phân công.",
        points: ["Giảm nhầm lẫn bệnh nhân", "Ghi nhận thời điểm vào phòng mổ"],
        visual: "qrCheckIn",
      },
      outcomesVi,
    ],
  },
  en: {
    meta: { title: "People's Hospital 115", description: "Aurion and People's Hospital 115 digitise the entire surgical workflow." },
    hero: {
      overline: "Customer story · People's Hospital 115",
      title: "The entire surgical workflow, digitised in one system",
      lead: "With People's Hospital 115, a major general hospital in Ho Chi Minh City, Aurion built a surgery scheduling system that covers every step from booking to completion.",
      visual: "calendar",
    },
    blocks: [
      {
        type: "grid",
        overline: "Features",
        heading: "Every step of a surgery, in one system",
        items: [
          { icon: "calendar", title: "Master surgery schedule", desc: "One schedule for every theatre, updated in real time." },
          { icon: "search", title: "QR scanning", desc: "Scan the wristband QR to confirm the right patient, case and theatre." },
          { icon: "users", title: "Role-based views", desc: "Coordinators, surgeons and nurses each see exactly their part of the work." },
          { icon: "adjustments", title: "Moving surgeries", desc: "Move a case in a few taps and everyone involved is updated at once." },
          { icon: "heart", title: "Team assignment", desc: "Assign surgeons and nurses to every case." },
          { icon: "sparkles", title: "And much more", desc: "The system covers the hospital's whole surgical workflow, with more features still being added." },
        ],
      },
      {
        type: "split",
        overline: "QR confirmation",
        
        reverse: true,
        heading: "Right patient, right theatre, right time",
        body: "Nurses scan the patient's wristband QR, and the system checks it against the schedule and the assigned team.",
        points: ["Fewer patient mix-ups", "Theatre entry time recorded"],
        visual: "qrCheckIn",
      },
      outcomesEn,
    ],
  },
};
