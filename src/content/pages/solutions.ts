import type { LocalizedPage } from "./types";


export const hospitals: LocalizedPage = {
  vi: {
    meta: { title: "Giải pháp cho bệnh viện / phòng khám", description: "AI hỗ trợ chăm sóc bệnh nhân, lịch phẫu thuật và điều phối vận hành bệnh viện." },
    hero: {
      overline: "Bệnh viện / phòng khám",
      title: "Chăm sóc tốt hơn, vận hành nhẹ nhàng hơn",
      lead: "Số hóa quy trình theo lộ trình chuyển đổi số của ngành y tế: dữ liệu về một nơi, giấy tờ được tự động hóa, đội ngũ y tế có thêm thời gian cho bệnh nhân.",
      visual: "patientFlow",
    },
    blocks: [
      { type: "logos", heading: "Được tin dùng bởi" },
      {
        type: "grid",
        overline: "Cho từng vai trò",
        heading: "Mỗi người trong bệnh viện đều có công cụ phù hợp",
        items: [
          { icon: "chat", title: "Bác sĩ", desc: "Tra cứu phác đồ, tóm tắt bệnh án và soạn hồ sơ ra viện trong vài giây.", points: ["Trả lời kèm nguồn trích dẫn", "Bản nháp hồ sơ để duyệt"] },
          { icon: "users", title: "Điều dưỡng", desc: "Biết ca mổ nào của mình, bệnh nhân nào đang chờ, không cần gọi điện hỏi.", points: ["Giao diện riêng cho điều dưỡng", "Quét QR xác nhận bệnh nhân"] },
          { icon: "calendar", title: "Điều phối viên", desc: "Xếp lịch và dời lịch phòng mổ, phân công ê-kíp trên một màn hình chung.", points: ["Kéo thả để dời ca mổ", "Mọi bên được cập nhật tức thì"] },
          { icon: "building", title: "Ban lãnh đạo", desc: "Theo dõi hiệu suất vận hành từ dữ liệu tập trung thay vì báo cáo thủ công.", points: ["Số liệu theo thời gian thực", "Dữ liệu lưu tại bệnh viện"] },
        ],
      },
      {
        type: "split",
        overline: "Aurion Assistant",
        status: "live",
        heading: "Tri thức của bệnh viện, trả lời trong vài giây",
        body: "Bác sĩ và điều dưỡng hỏi bằng tiếng Việt, Assistant trả lời từ phác đồ và tài liệu của chính bệnh viện, kèm nguồn trích dẫn.",
        points: ["Tra cứu tri thức y khoa", "Soạn thảo hồ sơ"],
        visual: "chat",
      },
      {
        type: "split",
        overline: "Aurion Operations",
        status: "live",
        reverse: true,
        heading: "Phòng mổ vận hành như một đội",
        body: "Lịch phẫu thuật toàn quy trình, từ xếp lịch, phân công đến xác nhận bệnh nhân bằng QR.",
        points: ["Lịch phẫu thuật", "Điều phối bệnh nhân"],
        visual: "calendar",
      },
      {
        type: "links",
        overline: "Tìm hiểu thêm",
        heading: "Sản phẩm liên quan",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "Trợ lý AI lâm sàng." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Lịch phẫu thuật và điều phối bệnh nhân." },
          { href: "/customers", icon: "heart", title: "Câu chuyện khách hàng", desc: "Aurion tại Nhi Đồng 1 và 115." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Solutions for hospitals / clinics", description: "AI for patient care, surgery scheduling and hospital operations." },
    hero: {
      overline: "Hospitals / clinics",
      title: "Better care, lighter operations",
      lead: "Digitise in line with the healthcare sector's digital transformation roadmap: data in one place, paperwork automated, and care teams with more time for patients.",
      visual: "patientFlow",
    },
    blocks: [
      { type: "logos", heading: "Trusted by" },
      {
        type: "grid",
        overline: "For every role",
        heading: "The right tool for everyone in the hospital",
        items: [
          { icon: "chat", title: "Doctors", desc: "Look up guidelines, summarise records and draft discharge papers in seconds.", points: ["Answers with citations", "Draft documents to approve"] },
          { icon: "users", title: "Nurses", desc: "See your surgeries and waiting patients without phoning around.", points: ["A dedicated nurse view", "QR patient confirmation"] },
          { icon: "calendar", title: "Coordinators", desc: "Schedule and reschedule theatres and assign teams on one shared screen.", points: ["Drag to move a surgery", "Everyone updated instantly"] },
          { icon: "building", title: "Leadership", desc: "Follow operational performance from central data instead of manual reports.", points: ["Real-time figures", "Data kept inside the hospital"] },
        ],
      },
      {
        type: "split",
        overline: "Aurion Assistant",
        status: "live",
        heading: "The hospital's knowledge, answered in seconds",
        body: "Doctors and nurses ask in plain language, and Assistant answers from the hospital's own guidelines and documents, with citations.",
        points: ["Medical knowledge search", "Clinical documentation"],
        visual: "chat",
      },
      {
        type: "split",
        overline: "Aurion Operations",
        status: "live",
        reverse: true,
        heading: "Theatres that run like one team",
        body: "End-to-end surgery scheduling, from booking and team assignment to QR patient confirmation.",
        points: ["Surgery scheduling", "Patient flow"],
        visual: "calendar",
      },
      {
        type: "links",
        overline: "Learn more",
        heading: "Related products",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "A clinical AI coworker." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Surgery scheduling and patient flow." },
          { href: "/customers", icon: "heart", title: "Customer stories", desc: "Aurion at Nhi Dong 1 and 115." },
        ],
      },
    ],
  },
};


export const labs: LocalizedPage = {
  vi: {
    meta: { title: "Giải pháp cho phòng xét nghiệm", description: "Tự động hóa trích xuất dữ liệu và quy trình báo cáo xét nghiệm." },
    hero: {
      overline: "Phòng xét nghiệm",
      title: "Nhiều mẫu hơn, ít thao tác thủ công hơn",
      lead: "Tăng năng suất phòng xét nghiệm bằng cách tự động hóa trích xuất dữ liệu, giảm thao tác thủ công và tối ưu hóa quy trình từ nhận mẫu đến báo cáo.",
      visual: "ocr",
    },
    blocks: [
      {
        type: "grid",
        overline: "Aurion hỗ trợ",
        heading: "Quy trình báo cáo tự động từ đầu đến cuối",
        items: [
          { icon: "document", status: "available", title: "OCR phiếu xét nghiệm", desc: "Đọc phiếu giấy và tệp scan, chuyển thành dữ liệu có cấu trúc." },
          { icon: "beaker", status: "available", title: "Tự động hóa quy trình", desc: "Giảm các bước nhập liệu lặp lại giữa máy xét nghiệm và hệ thống LIS." },
          { icon: "shield", status: "available", title: "Kiểm soát chất lượng", desc: "Đánh dấu kết quả bất thường hoặc thiếu thông tin để kỹ thuật viên rà soát." },
          { icon: "circleStack", status: "live", title: "Kho dữ liệu lâm sàng", desc: "Kết quả được lưu cùng hồ sơ bệnh nhân, sẵn sàng cho bác sĩ và nghiên cứu." },
        ],
      },
      {
        type: "split",
        overline: "Luồng dữ liệu",
        reverse: true,
        heading: "Kết quả đi thẳng vào hồ sơ bệnh nhân",
        body: "Dữ liệu xét nghiệm được chuẩn hóa và đưa vào kho dữ liệu lâm sàng, để bác sĩ, Assistant và các đề tài nghiên cứu cùng dùng một nguồn.",
        points: ["Không nhập tay kết quả", "Chuẩn hóa tên chỉ số và đơn vị", "Lưu trữ on-premise tại bệnh viện"],
        visual: "cdr",
      },
      {
        type: "links",
        overline: "Tìm hiểu thêm",
        heading: "Sản phẩm liên quan",
        items: [
          { href: "/product/operations#lab", icon: "bolt", title: "Tự động hóa xét nghiệm", desc: "Trong Aurion Operations." },
          { href: "/product/assistant#lab-extraction", icon: "chat", title: "Trích xuất kết quả", desc: "Trong Aurion Assistant." },
          { href: "/platform#ocr", icon: "document", title: "OCR y khoa", desc: "Trong nền tảng Aurion." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Solutions for testing labs", description: "Automated data extraction and lab reporting." },
    hero: {
      overline: "Pathology / testing labs",
      title: "More samples, fewer manual steps",
      lead: "Boosting lab throughput by automating data extraction, reducing manual steps and improving sample-to-report efficiency.",
      visual: "ocr",
    },
    blocks: [
      {
        type: "grid",
        overline: "How Aurion helps",
        heading: "An automated reporting pipeline, end to end",
        items: [
          { icon: "document", status: "available", title: "Lab slip OCR", desc: "Reads paper slips and scans and turns them into structured data." },
          { icon: "beaker", status: "available", title: "Workflow automation", desc: "Removes repeated data entry between analysers and the LIS." },
          { icon: "shield", status: "available", title: "Quality checks", desc: "Flags abnormal or incomplete results for a technician to review." },
          { icon: "circleStack", status: "live", title: "Clinical data repository", desc: "Results sit with the patient record, ready for doctors and research." },
        ],
      },
      {
        type: "split",
        overline: "Data flow",
        reverse: true,
        heading: "Results go straight into the patient record",
        body: "Lab data is standardised and stored in the clinical data repository, so doctors, Assistant and research all use one source.",
        points: ["No manual result entry", "Standardised test names and units", "Stored on-premise at the hospital"],
        visual: "cdr",
      },
      {
        type: "links",
        overline: "Learn more",
        heading: "Related products",
        items: [
          { href: "/product/operations#lab", icon: "bolt", title: "Lab automation", desc: "Part of Aurion Operations." },
          { href: "/product/assistant#lab-extraction", icon: "chat", title: "Result extraction", desc: "Part of Aurion Assistant." },
          { href: "/platform#ocr", icon: "document", title: "Medical OCR", desc: "Part of the Aurion platform." },
        ],
      },
    ],
  },
};


export const research: LocalizedPage = {
  vi: {
    meta: { title: "Giải pháp cho viện nghiên cứu", description: "Dữ liệu có cấu trúc, đã ẩn danh và Machine Learning cho nghiên cứu y học." },
    hero: {
      overline: "Viện nghiên cứu",
      title: "Từ dữ liệu thô đến khám phá y học",
      lead: "Hệ thống hóa dữ liệu, phân tích chuyên sâu bằng Machine Learning và tự động hóa các bước trong nghiên cứu khoa học giúp tạo sự đột phá trong khám phá y học.",
      visual: "dataset",
    },
    blocks: [
      {
        type: "grid",
        overline: "Aurion hỗ trợ",
        heading: "Dữ liệu sạch, sẵn sàng cho nghiên cứu",
        items: [
          { icon: "circleStack", status: "live", title: "Kho dữ liệu lâm sàng", desc: "Dữ liệu từ HIS đã được chuẩn hóa, sẵn sàng để trích xuất theo tiêu chí đề tài." },
          { icon: "eyeSlash", status: "available", title: "Ẩn danh hóa", desc: "Loại bỏ thông tin định danh trước khi dữ liệu rời khỏi kho." },
          { icon: "cpu", status: "available", title: "Machine Learning", desc: "Xây dựng và đánh giá mô hình trên dữ liệu thật của bệnh viện." },
          { icon: "lock", status: "live", title: "Dữ liệu ở lại bệnh viện", desc: "Mọi phân tích chạy on-premise, dữ liệu không rời khỏi Việt Nam." },
        ],
      },
      {
        type: "split",
        overline: "Luồng dữ liệu",
        reverse: true,
        heading: "Một nguồn dữ liệu cho cả vận hành và nghiên cứu",
        body: "Kho dữ liệu lâm sàng nhận dữ liệu từ HIS mỗi ngày. Nhà nghiên cứu làm việc trên bản sao đã ẩn danh, không đụng đến hệ thống vận hành.",
        points: ["Đồng bộ tự động từ HIS", "Bản sao đã ẩn danh cho nghiên cứu", "Truy vết nguồn gốc từng bản ghi"],
        visual: "cdr",
      },
      {
        type: "links",
        overline: "Tìm hiểu thêm",
        heading: "Sản phẩm liên quan",
        items: [
          { href: "/platform#cdr", icon: "circleStack", title: "Kho dữ liệu lâm sàng", desc: "Trong nền tảng Aurion." },
          { href: "/product/operations#research", icon: "chart", title: "Dữ liệu cho nghiên cứu", desc: "Trong Aurion Operations." },
          { href: "/platform#intelligence", icon: "cpu", title: "Aurion Intelligence", desc: "Mô hình AI y khoa." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Solutions for research facilities", description: "Structured, de-identified data and machine learning for medical research." },
    hero: {
      overline: "Research facilities",
      title: "From raw data to medical discovery",
      lead: "Accelerating scientific discovery with structured datasets, ML-powered insights and automated research preparation.",
      visual: "dataset",
    },
    blocks: [
      {
        type: "grid",
        overline: "How Aurion helps",
        heading: "Clean data, ready for research",
        items: [
          { icon: "circleStack", status: "live", title: "Clinical data repository", desc: "Standardised HIS data, ready to extract against a study's criteria." },
          { icon: "eyeSlash", status: "available", title: "De-identification", desc: "Removes identifying information before data leaves the repository." },
          { icon: "cpu", status: "available", title: "Machine learning", desc: "Build and evaluate models on the hospital's real data." },
          { icon: "lock", status: "live", title: "Data stays in the hospital", desc: "All analysis runs on-premise; data never leaves Vietnam." },
        ],
      },
      {
        type: "split",
        overline: "Data flow",
        reverse: true,
        heading: "One source for operations and research",
        body: "The clinical data repository receives HIS data every day. Researchers work on a de-identified copy, never touching operational systems.",
        points: ["Automatic sync from HIS", "De-identified copies for research", "Full lineage for every record"],
        visual: "cdr",
      },
      {
        type: "links",
        overline: "Learn more",
        heading: "Related products",
        items: [
          { href: "/platform#cdr", icon: "circleStack", title: "Clinical data repository", desc: "Part of the Aurion platform." },
          { href: "/product/operations#research", icon: "chart", title: "Research data pipelines", desc: "Part of Aurion Operations." },
          { href: "/platform#intelligence", icon: "cpu", title: "Aurion Intelligence", desc: "Medical AI models." },
        ],
      },
    ],
  },
};
