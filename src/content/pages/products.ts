import type { LocalizedPage } from "./types";


export const assistant: LocalizedPage = {
  vi: {
    meta: {
      title: "Aurion Assistant",
      description: "Trợ lý AI lâm sàng: tra cứu tri thức y khoa, phác đồ và hồ sơ bệnh viện bằng tiếng Việt.",
    },
    hero: {
      overline: "Aurion Assistant",
      title: "Trợ lý AI lâm sàng cho đội ngũ y tế",
      lead: "Tra cứu tri thức y khoa, phác đồ điều trị và tài liệu nội bộ của bệnh viện bằng tiếng Việt. Câu trả lời dựa trên nguồn tài liệu của chính bệnh viện.",
    },
    blocks: [
      {
        type: "features",
        overline: "Tính năng",
        heading: "Bớt thời gian tìm kiếm, thêm thời gian cho bệnh nhân",
        items: [
          { id: "search", icon: "search", title: "Tra cứu tri thức y khoa", desc: "Đặt câu hỏi bằng ngôn ngữ tự nhiên và nhận câu trả lời từ tài liệu, hướng dẫn và dữ liệu của bệnh viện." },
          { id: "guidelines", icon: "bookOpen", title: "Hỏi đáp phác đồ", desc: "Tìm nhanh phác đồ và quy trình chuẩn đang áp dụng, thay vì lục tìm từng tệp PDF." },
          { id: "documentation", icon: "pencil", title: "Soạn thảo hồ sơ", desc: "Tạo bản nháp tóm tắt bệnh án, giấy ra viện và báo cáo để bác sĩ rà soát và hoàn thiện." },
          { id: "lab-extraction", icon: "beaker", title: "Trích xuất kết quả xét nghiệm", desc: "Đọc phiếu xét nghiệm và đưa kết quả vào hồ sơ dưới dạng dữ liệu có cấu trúc." },
        ],
      },
      {
        type: "steps",
        overline: "Cách hoạt động",
        heading: "Từ tài liệu rời rạc đến câu trả lời trong vài giây",
        items: [
          { title: "Kết nối nguồn tri thức", desc: "Phác đồ, tài liệu nội bộ và dữ liệu lâm sàng được đưa vào nền tảng qua Clinical Context." },
          { title: "Hỏi bằng tiếng Việt", desc: "Nhân viên y tế đặt câu hỏi như khi hỏi một đồng nghiệp, trong giới hạn quyền truy cập của mình." },
          { title: "Nhận câu trả lời có nguồn", desc: "Mỗi câu trả lời đi kèm tài liệu gốc để người dùng kiểm chứng trước khi áp dụng." },
        ],
      },
      {
        type: "links",
        heading: "Phù hợp với",
        items: [
          { href: "/solutions/hospitals", icon: "building", title: "Bệnh viện / phòng khám", desc: "Hỗ trợ bác sĩ và điều dưỡng trong công việc hằng ngày." },
          { href: "/solutions/labs", icon: "beaker", title: "Phòng xét nghiệm", desc: "Tự động trích xuất và chuẩn hóa kết quả." },
          { href: "/platform", icon: "sparkles", title: "Nền tảng Aurion", desc: "Hạ tầng dữ liệu phía sau Assistant." },
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Aurion Assistant",
      description: "A clinical AI assistant: search medical knowledge, guidelines and hospital records in Vietnamese and English.",
    },
    hero: {
      overline: "Aurion Assistant",
      title: "A clinical AI coworker for care teams",
      lead: "Search medical knowledge, treatment guidelines and the hospital's own documents in plain language. Answers are grounded in the hospital's sources.",
    },
    blocks: [
      {
        type: "features",
        overline: "Features",
        heading: "Less time searching, more time with patients",
        items: [
          { id: "search", icon: "search", title: "Medical knowledge search", desc: "Ask in natural language and get answers drawn from the hospital's documents, guidelines and data." },
          { id: "guidelines", icon: "bookOpen", title: "Guideline Q&A", desc: "Find the protocol or standard procedure in force, instead of digging through PDFs." },
          { id: "documentation", icon: "pencil", title: "Clinical documentation", desc: "Draft case summaries, discharge papers and reports for clinicians to review and finalise." },
          { id: "lab-extraction", icon: "beaker", title: "Lab result extraction", desc: "Reads lab slips and files the results into the record as structured data." },
        ],
      },
      {
        type: "steps",
        overline: "How it works",
        heading: "From scattered documents to an answer in seconds",
        items: [
          { title: "Connect knowledge sources", desc: "Guidelines, internal documents and clinical data come into the platform through Clinical Context." },
          { title: "Ask in plain language", desc: "Staff ask the way they would ask a colleague, within the limits of their own access." },
          { title: "Get answers with sources", desc: "Every answer links back to the source document so it can be checked before it is acted on." },
        ],
      },
      {
        type: "links",
        heading: "Built for",
        items: [
          { href: "/solutions/hospitals", icon: "building", title: "Hospitals / clinics", desc: "Support for doctors and nurses in their daily work." },
          { href: "/solutions/labs", icon: "beaker", title: "Testing labs", desc: "Automatic extraction and standardisation of results." },
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
      description: "Tự động hóa vận hành bệnh viện: lịch phẫu thuật, điều phối bệnh nhân, xét nghiệm và dữ liệu nghiên cứu.",
    },
    hero: {
      overline: "Aurion Operations",
      title: "Tự động hóa vận hành bệnh viện",
      lead: "Giảm khối lượng công việc hành chính và giúp các khoa phòng phối hợp nhịp nhàng hơn, từ phòng mổ đến phòng xét nghiệm.",
    },
    blocks: [
      {
        type: "features",
        overline: "Tính năng",
        heading: "Quy trình chạy trơn tru, đội ngũ tập trung vào chuyên môn",
        items: [
          { id: "surgery", icon: "calendar", title: "Lịch phẫu thuật", desc: "Lập và điều chỉnh lịch mổ theo phòng, ê-kíp và mức độ ưu tiên, cập nhật cho mọi bên liên quan." },
          { id: "patient-flow", icon: "users", title: "Điều phối bệnh nhân", desc: "Theo dõi dòng bệnh nhân từ tiếp nhận đến xuất viện để giảm thời gian chờ." },
          { id: "lab", icon: "beaker", title: "Tự động hóa xét nghiệm", desc: "Tự động hóa quy trình từ nhận mẫu đến trả kết quả, giảm thao tác thủ công." },
          { id: "research", icon: "chart", title: "Dữ liệu cho nghiên cứu", desc: "Chuẩn bị bộ dữ liệu có cấu trúc cho các đề tài nghiên cứu lâm sàng." },
        ],
      },
      {
        type: "metrics",
        heading: "Hiệu quả tại các dự án",
        items: [
          { value: "40%", label: "Giảm khối lượng công việc hành chính" },
          { value: "2×", label: "Năng suất tiếp nhận bệnh nhân" },
          { value: "3×", label: "Xử lý mẫu xét nghiệm nhanh hơn" },
        ],
      },
      {
        type: "links",
        heading: "Phù hợp với",
        items: [
          { href: "/solutions/hospitals", icon: "building", title: "Bệnh viện / phòng khám", desc: "Điều phối phòng mổ, khoa phòng và bệnh nhân." },
          { href: "/solutions/labs", icon: "beaker", title: "Phòng xét nghiệm", desc: "Tăng năng suất xử lý mẫu." },
          { href: "/solutions/research", icon: "academic", title: "Viện nghiên cứu", desc: "Dữ liệu sạch cho nghiên cứu." },
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Aurion Operations",
      description: "Hospital workflow automation: surgery scheduling, patient flow, lab automation and research data.",
    },
    hero: {
      overline: "Aurion Operations",
      title: "Automation for hospital workflows",
      lead: "Cut administrative work and help departments work in step, from the operating theatre to the lab.",
    },
    blocks: [
      {
        type: "features",
        overline: "Features",
        heading: "Workflows that run smoothly, so teams can focus on care",
        items: [
          { id: "surgery", icon: "calendar", title: "Surgery scheduling", desc: "Plan and adjust theatre schedules by room, team and priority, with updates for everyone involved." },
          { id: "patient-flow", icon: "users", title: "Patient flow", desc: "Follow patients from admission to discharge to shorten waiting times." },
          { id: "lab", icon: "beaker", title: "Lab automation", desc: "Automates the path from sample intake to reported result, with fewer manual steps." },
          { id: "research", icon: "chart", title: "Research data pipelines", desc: "Prepares structured datasets for clinical research." },
        ],
      },
      {
        type: "metrics",
        heading: "Results from our projects",
        items: [
          { value: "40%", label: "Less administrative work" },
          { value: "2×", label: "Patient throughput" },
          { value: "3×", label: "Faster sample processing" },
        ],
      },
      {
        type: "links",
        heading: "Built for",
        items: [
          { href: "/solutions/hospitals", icon: "building", title: "Hospitals / clinics", desc: "Coordinate theatres, wards and patients." },
          { href: "/solutions/labs", icon: "beaker", title: "Testing labs", desc: "Higher sample throughput." },
          { href: "/solutions/research", icon: "academic", title: "Research facilities", desc: "Clean data for research." },
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
    },
    blocks: [
      {
        type: "notice",
        icon: "chart",
        title: "Đang được phát triển",
        body: "Aurion Insights đang được xây dựng cùng các bệnh viện đối tác. Liên hệ với chúng tôi nếu bạn muốn tham gia chương trình thử nghiệm sớm.",
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
    },
    blocks: [
      {
        type: "notice",
        icon: "chart",
        title: "In development",
        body: "Aurion Insights is being built together with our partner hospitals. Get in touch if you would like to join the early pilot.",
        action: { label: "Register interest", href: "/#contact" },
      },
    ],
  },
};
