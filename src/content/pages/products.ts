import type { LocalizedPage } from "./types";


export const assistant: LocalizedPage = {
  vi: {
    meta: {
      title: "Aurion Assistant",
      description: "Trợ lý AI lâm sàng: tra cứu tri thức y khoa và soạn thảo hồ sơ bằng tiếng Việt, câu trả lời luôn kèm nguồn trích dẫn.",
    },
    hero: {
      overline: "Aurion Assistant",
      title: "Trợ lý AI lâm sàng cho đội ngũ y tế",
      lead: "Hỏi bằng tiếng Việt, nhận câu trả lời từ chính phác đồ và tài liệu của bệnh viện, kèm nguồn trích dẫn để kiểm chứng.",
      visual: "chat",
    },
    blocks: [
      { type: "logos", heading: "Đang vận hành tại" },
      {
        type: "grid",
        overline: "Tính năng",
        heading: "Một trợ lý cho cả bệnh viện",
        lead: "Bớt thời gian tìm kiếm và giấy tờ, thêm thời gian cho bệnh nhân.",
        items: [
          { id: "search", icon: "search", status: "live", title: "Tra cứu tri thức y khoa", desc: "Đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận câu trả lời từ tài liệu, hướng dẫn và dữ liệu của bệnh viện." },
          { id: "guidelines", icon: "bookOpen", status: "live", title: "Hỏi đáp phác đồ", desc: "Tìm nhanh phác đồ và quy trình chuẩn đang áp dụng, thay vì lục tìm từng tệp PDF." },
          { id: "documentation", icon: "pencil", status: "live", title: "Soạn thảo hồ sơ", desc: "Tạo bản nháp tóm tắt bệnh án, giấy ra viện và báo cáo để bác sĩ rà soát và duyệt." },
          { id: "lab-extraction", icon: "beaker", status: "available", title: "Trích xuất kết quả xét nghiệm", desc: "Đọc phiếu xét nghiệm và đưa kết quả vào hồ sơ dưới dạng dữ liệu có cấu trúc." },
        ],
      },
      {
        type: "split",
        overline: "Soạn thảo hồ sơ",
        status: "live",
        heading: "Hồ sơ nháp trong vài giây, bác sĩ duyệt lần cuối",
        body: "Assistant tổng hợp diễn tiến điều trị từ hồ sơ bệnh án thành bản nháp tóm tắt ra viện. Bác sĩ chỉ cần rà soát, chỉnh sửa và duyệt.",
        points: ["Tóm tắt bệnh án và giấy ra viện", "Nội dung AI được đánh dấu rõ ràng", "Bác sĩ luôn là người duyệt cuối cùng"],
        visual: "documentation",
      },
      {
        type: "split",
        overline: "Trích xuất kết quả xét nghiệm",
        status: "available",
        reverse: true,
        heading: "Từ phiếu giấy đến dữ liệu có cấu trúc",
        body: "Assistant đọc phiếu xét nghiệm và tài liệu scan, rồi đưa từng chỉ số vào hồ sơ. Không còn nhập tay từng dòng kết quả.",
        points: ["Đọc phiếu in, phiếu viết tay và tệp scan", "Chuẩn hóa tên chỉ số và đơn vị", "Đánh dấu kết quả cần kỹ thuật viên kiểm tra"],
        visual: "ocr",
      },
      {
        type: "steps",
        overline: "Cách hoạt động",
        heading: "Từ tài liệu rời rạc đến câu trả lời trong vài giây",
        items: [
          { title: "Kết nối nguồn tri thức", desc: "Phác đồ, tài liệu nội bộ và dữ liệu lâm sàng được đưa vào nền tảng qua Clinical Context." },
          { title: "Hỏi bằng tiếng Việt", desc: "Nhân viên y tế đặt câu hỏi như khi hỏi một đồng nghiệp, trong giới hạn quyền truy cập của mình." },
          { title: "Nhận câu trả lời có nguồn", desc: "Mỗi câu trả lời đi kèm tài liệu gốc để kiểm chứng trước khi áp dụng." },
        ],
      },
      {
        type: "links",
        overline: "Tìm hiểu thêm",
        heading: "Assistant trong thực tế",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Bệnh viện Nhi Đồng 1", desc: "Trợ lý AI và kho dữ liệu lâm sàng." },
          { href: "/solutions/hospitals", icon: "building", title: "Cho bệnh viện / phòng khám", desc: "Hỗ trợ bác sĩ và điều dưỡng mỗi ngày." },
          { href: "/platform", icon: "sparkles", title: "Nền tảng Aurion", desc: "Hạ tầng dữ liệu phía sau Assistant." },
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Aurion Assistant",
      description: "A clinical AI assistant: medical knowledge search and documentation, with every answer citing its sources.",
    },
    hero: {
      overline: "Aurion Assistant",
      title: "A clinical AI coworker for care teams",
      lead: "Ask in plain language and get answers drawn from the hospital's own guidelines and documents, with citations to check them against.",
      visual: "chat",
    },
    blocks: [
      { type: "logos", heading: "Running at" },
      {
        type: "grid",
        overline: "Features",
        heading: "One assistant for the whole hospital",
        lead: "Less time searching and on paperwork, more time with patients.",
        items: [
          { id: "search", icon: "search", status: "live", title: "Medical knowledge search", desc: "Ask in natural language and get answers from the hospital's documents, guidelines and data." },
          { id: "guidelines", icon: "bookOpen", status: "live", title: "Guideline Q&A", desc: "Find the protocol or standard procedure in force, instead of digging through PDFs." },
          { id: "documentation", icon: "pencil", status: "live", title: "Clinical documentation", desc: "Draft case summaries, discharge papers and reports for clinicians to review and approve." },
          { id: "lab-extraction", icon: "beaker", status: "available", title: "Lab result extraction", desc: "Reads lab slips and files the results into the record as structured data." },
        ],
      },
      {
        type: "split",
        overline: "Clinical documentation",
        status: "live",
        heading: "Drafts in seconds, signed off by the doctor",
        body: "Assistant turns the treatment course in the record into a draft discharge summary. The doctor reviews, edits and approves.",
        points: ["Case summaries and discharge papers", "AI-written content clearly marked", "The doctor always has the final say"],
        visual: "documentation",
      },
      {
        type: "split",
        overline: "Lab result extraction",
        status: "available",
        reverse: true,
        heading: "From paper slips to structured data",
        body: "Assistant reads lab slips and scanned documents and files each value into the record. No more typing results in line by line.",
        points: ["Reads printed, handwritten and scanned slips", "Standardises test names and units", "Flags results a technician should check"],
        visual: "ocr",
      },
      {
        type: "steps",
        overline: "How it works",
        heading: "From scattered documents to an answer in seconds",
        items: [
          { title: "Connect knowledge sources", desc: "Guidelines, internal documents and clinical data come into the platform through Clinical Context." },
          { title: "Ask in plain language", desc: "Staff ask the way they would ask a colleague, within the limits of their own access." },
          { title: "Get answers with sources", desc: "Every answer links back to the source document so it can be checked first." },
        ],
      },
      {
        type: "links",
        overline: "Learn more",
        heading: "Assistant in practice",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Nhi Dong 1 Hospital", desc: "An AI assistant and clinical data repository." },
          { href: "/solutions/hospitals", icon: "building", title: "For hospitals / clinics", desc: "Everyday support for doctors and nurses." },
          { href: "/platform", icon: "sparkles", title: "The Aurion platform", desc: "The data infrastructure behind Assistant." },
        ],
      },
    ],
  },
};


export const operations: LocalizedPage = {
  vi: {
    meta: {
      title: "Aurion Operations",
      description: "Tự động hóa vận hành bệnh viện: lịch phẫu thuật toàn quy trình và điều phối bệnh nhân.",
    },
    hero: {
      overline: "Aurion Operations",
      title: "Toàn bộ quy trình phẫu thuật, trên một màn hình",
      lead: "Từ xếp lịch, phân công ê-kíp đến quét QR xác nhận bệnh nhân. Operations giúp các khoa phòng phối hợp nhịp nhàng và giảm công việc giấy tờ.",
      visual: "calendar",
    },
    blocks: [
      { type: "logos", heading: "Đang vận hành tại" },
      {
        type: "split",
        id: "surgery",
        overline: "Lịch phẫu thuật",
        status: "live",
        heading: "Xếp lịch, dời lịch, phân công chỉ trong vài thao tác",
        body: "Một lịch mổ chung cho cả bệnh viện, cập nhật theo thời gian thực. Điều phối viên, bác sĩ và điều dưỡng mỗi người thấy đúng phần việc của mình.",
        points: [
          "Quét QR vòng tay để xác nhận đúng bệnh nhân",
          "Giao diện riêng cho điều phối viên, bác sĩ và điều dưỡng",
          "Dời ca mổ và cập nhật cho mọi bên liên quan",
          "Phân công bác sĩ và điều dưỡng cho từng ca",
        ],
        visual: "qrCheckIn",
      },
      {
        type: "split",
        id: "patient-flow",
        overline: "Điều phối bệnh nhân",
        status: "live",
        reverse: true,
        heading: "Biết mỗi bệnh nhân đang ở đâu, chờ bao lâu",
        body: "Theo dõi dòng bệnh nhân từ tiếp nhận đến xuất viện. Những ca chờ quá lâu được đánh dấu để đội ngũ xử lý kịp thời.",
        points: ["Bảng theo dõi theo từng giai đoạn", "Cảnh báo ca chờ quá lâu", "Số liệu cho ban lãnh đạo theo thời gian thực"],
        visual: "patientFlow",
      },
      {
        type: "grid",
        overline: "Mở rộng",
        heading: "Sẵn sàng khi bạn cần",
        lead: "Những quy trình Aurion có thể tự động hóa cho bệnh viện của bạn.",
        items: [
          { id: "lab", icon: "beaker", status: "available", title: "Tự động hóa xét nghiệm", desc: "Tự động hóa quy trình từ nhận mẫu đến trả kết quả, giảm thao tác thủ công." },
          { id: "research", icon: "chart", status: "available", title: "Dữ liệu cho nghiên cứu", desc: "Chuẩn bị bộ dữ liệu có cấu trúc, đã ẩn danh cho các đề tài nghiên cứu lâm sàng." },
        ],
      },
      {
        type: "stats",
        overline: "Hiệu quả",
        heading: "Kết quả tại các dự án",
        items: [
          { value: "40%", label: "Giảm khối lượng công việc hành chính" },
          { value: "2×", label: "Năng suất tiếp nhận bệnh nhân" },
          { value: "3×", label: "Xử lý mẫu xét nghiệm nhanh hơn" },
        ],
      },
      {
        type: "links",
        overline: "Tìm hiểu thêm",
        heading: "Operations trong thực tế",
        items: [
          { href: "/customers/115", icon: "heart", title: "Bệnh viện Nhân dân 115", desc: "Hệ thống lịch phẫu thuật toàn quy trình." },
          { href: "/solutions/hospitals", icon: "building", title: "Cho bệnh viện / phòng khám", desc: "Điều phối phòng mổ, khoa phòng và bệnh nhân." },
          { href: "/solutions/labs", icon: "beaker", title: "Cho phòng xét nghiệm", desc: "Tăng năng suất xử lý mẫu." },
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Aurion Operations",
      description: "Hospital workflow automation: end-to-end surgery scheduling and patient flow.",
    },
    hero: {
      overline: "Aurion Operations",
      title: "The entire surgery workflow, on one screen",
      lead: "From scheduling and team assignment to scanning a QR code to confirm the patient. Operations keeps departments in step and cuts paperwork.",
      visual: "calendar",
    },
    blocks: [
      { type: "logos", heading: "Running at" },
      {
        type: "split",
        id: "surgery",
        overline: "Surgery scheduling",
        status: "live",
        heading: "Schedule, reschedule and assign in a few taps",
        body: "One shared theatre schedule for the whole hospital, updated in real time. Coordinators, surgeons and nurses each see exactly their part of the work.",
        points: [
          "Scan the wristband QR to confirm the right patient",
          "Separate views for coordinators, surgeons and nurses",
          "Move a surgery and everyone involved is updated",
          "Assign surgeons and nurses to every case",
        ],
        visual: "qrCheckIn",
      },
      {
        type: "split",
        id: "patient-flow",
        overline: "Patient flow",
        status: "live",
        reverse: true,
        heading: "Know where every patient is, and how long they've waited",
        body: "Follow patients from admission to discharge. Cases that have waited too long are flagged so the team can act in time.",
        points: ["A board for every stage", "Alerts for long waits", "Live figures for hospital leadership"],
        visual: "patientFlow",
      },
      {
        type: "grid",
        overline: "Expand",
        heading: "Ready when you need it",
        lead: "More workflows Aurion can automate for your hospital.",
        items: [
          { id: "lab", icon: "beaker", status: "available", title: "Lab automation", desc: "Automates the path from sample intake to reported result, with fewer manual steps." },
          { id: "research", icon: "chart", status: "available", title: "Research data pipelines", desc: "Prepares structured, de-identified datasets for clinical research." },
        ],
      },
      {
        type: "stats",
        overline: "Results",
        heading: "Results from our projects",
        items: [
          { value: "40%", label: "Less administrative work" },
          { value: "2×", label: "Patient throughput" },
          { value: "3×", label: "Faster sample processing" },
        ],
      },
      {
        type: "links",
        overline: "Learn more",
        heading: "Operations in practice",
        items: [
          { href: "/customers/115", icon: "heart", title: "People's Hospital 115", desc: "An end-to-end surgery scheduling system." },
          { href: "/solutions/hospitals", icon: "building", title: "For hospitals / clinics", desc: "Coordinate theatres, wards and patients." },
          { href: "/solutions/labs", icon: "beaker", title: "For testing labs", desc: "Higher sample throughput." },
        ],
      },
    ],
  },
};


export const insights: LocalizedPage = {
  vi: {
    meta: { title: "Aurion Insights", description: "Xem AI có thể tạo tác động lớn nhất ở đâu trong bệnh viện của bạn." },
    hero: {
      overline: "Aurion Insights",
      title: "Xem AI tạo tác động lớn nhất ở đâu",
      lead: "Phân tích quy trình và dữ liệu vận hành để chỉ ra nơi AI giúp bệnh viện tiết kiệm nhiều thời gian nhất.",
      badge: "Sắp ra mắt",
      visual: "insights",
    },
    blocks: [
      {
        type: "notice",
        icon: "chart",
        title: "Tham gia chương trình thử nghiệm sớm",
        body: "Aurion Insights đang được xây dựng cùng các bệnh viện đối tác. Liên hệ nếu bạn muốn là một trong những bệnh viện đầu tiên sử dụng.",
        action: { label: "Đăng ký quan tâm", href: "/#contact" },
      },
    ],
  },
  en: {
    meta: { title: "Aurion Insights", description: "See where AI can make the biggest impact in your hospital." },
    hero: {
      overline: "Aurion Insights",
      title: "See where AI can make the biggest impact",
      lead: "Analyses workflows and operational data to show where AI will save the hospital the most time.",
      badge: "Coming soon",
      visual: "insights",
    },
    blocks: [
      {
        type: "notice",
        icon: "chart",
        title: "Join the early pilot",
        body: "Aurion Insights is being built with our partner hospitals. Get in touch if you would like to be among the first to use it.",
        action: { label: "Register interest", href: "/#contact" },
      },
    ],
  },
};
