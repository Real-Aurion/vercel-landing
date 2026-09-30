import type { LocalizedPage } from "./types";


export const platform: LocalizedPage = {
  vi: {
    meta: {
      title: "Nền tảng Aurion",
      description: "Hạ tầng dữ liệu và AI cho bệnh viện: kết nối hệ thống, kho dữ liệu lâm sàng và các mô hình AI y khoa.",
    },
    hero: {
      overline: "Tổng quan nền tảng",
      title: "Hạ tầng dữ liệu và AI cho bệnh viện",
      lead: "Aurion kết nối các hệ thống sẵn có của bệnh viện, chuẩn hóa dữ liệu lâm sàng và vận hành các mô hình AI một cách an toàn. Đây là nền móng chung cho mọi sản phẩm của chúng tôi.",
    },
    blocks: [
      {
        type: "features",
        id: "context",
        overline: "Aurion Clinical Context",
        heading: "Mọi dữ liệu lâm sàng, trong cùng một ngữ cảnh",
        lead: "AI chỉ hữu ích khi hiểu đúng bối cảnh của bệnh viện. Clinical Context gom dữ liệu từ nhiều hệ thống về một nơi, để mỗi câu trả lời đều dựa trên dữ liệu thật.",
        items: [
          { id: "connectors", icon: "link", title: "Kết nối HIS · LIS · PACS · EHR", desc: "Đầu nối cho hệ thống thông tin bệnh viện, xét nghiệm, hình ảnh và bệnh án điện tử. Với hệ thống chưa có đầu nối sẵn, chúng tôi khảo sát và cùng bạn lập lộ trình tích hợp." },
          { icon: "adjustments", title: "Chuẩn hóa dữ liệu", desc: "Đưa dữ liệu từ nhiều nguồn về cùng cấu trúc và thuật ngữ, để AI hiểu đúng ý nghĩa của từng trường thông tin." },
          { icon: "lock", title: "Phân quyền theo vai trò", desc: "AI chỉ truy cập những gì người dùng được phép xem, theo đúng phân quyền của bệnh viện." },
        ],
      },
      {
        type: "features",
        id: "cdr",
        overline: "Kho dữ liệu lâm sàng (CDR)",
        heading: "Một nguồn dữ liệu đáng tin cậy",
        lead: "Kho dữ liệu lâm sàng lưu trữ tập trung dữ liệu bệnh nhân, xét nghiệm và điều trị theo cấu trúc thống nhất, sẵn sàng cho vận hành lẫn nghiên cứu.",
        items: [
          { icon: "circleStack", title: "Lưu trữ tập trung", desc: "Một nơi duy nhất cho dữ liệu lâm sàng thay vì nhiều bảng tính và hệ thống rời rạc." },
          { id: "deidentification", icon: "eyeSlash", title: "Ẩn danh hóa dữ liệu", desc: "Loại bỏ thông tin định danh trước khi dữ liệu được dùng cho nghiên cứu hoặc huấn luyện mô hình." },
          { icon: "academic", title: "Sẵn sàng cho nghiên cứu", desc: "Trích xuất bộ dữ liệu có cấu trúc cho các đề tài nghiên cứu lâm sàng trong vài giờ thay vì vài tuần." },
        ],
      },
      {
        type: "features",
        id: "intelligence",
        overline: "Aurion Intelligence",
        heading: "AI được xây dựng cho y khoa",
        lead: "Các mô hình được lựa chọn, tinh chỉnh và giám sát cho từng tác vụ lâm sàng, từ đọc tài liệu đến suy luận trên hồ sơ bệnh án.",
        items: [
          { id: "models", icon: "cube", title: "Kho mô hình", desc: "Lựa chọn mô hình phù hợp cho từng tác vụ và liên tục cải thiện với dữ liệu của chính bệnh viện." },
          { id: "ocr", icon: "document", title: "OCR y khoa", desc: "Đọc phiếu xét nghiệm, hồ sơ giấy và tài liệu scan thành dữ liệu có cấu trúc." },
          { id: "usage", icon: "adjustments", title: "Kiểm soát sử dụng", desc: "Theo dõi và giới hạn cách AI được sử dụng ở từng khoa phòng, với nhật ký đầy đủ." },
        ],
      },
      {
        type: "links",
        heading: "Được xây dựng trên nền tảng Aurion",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "Trợ lý AI lâm sàng cho đội ngũ y tế." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Tự động hóa vận hành bệnh viện." },
          { href: "/security", icon: "shield", title: "Aurion Protect", desc: "Bảo mật và tuân thủ ở mọi lớp của nền tảng." },
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "The Aurion Platform",
      description: "Data and AI infrastructure for hospitals: system connectors, a clinical data repository and medical AI models.",
    },
    hero: {
      overline: "Platform overview",
      title: "Data and AI infrastructure for hospitals",
      lead: "Aurion connects a hospital's existing systems, standardises clinical data and runs AI models safely. It is the shared foundation under every Aurion product.",
    },
    blocks: [
      {
        type: "features",
        id: "context",
        overline: "Aurion Clinical Context",
        heading: "All clinical data, in one context",
        lead: "AI is only useful when it understands the hospital it works in. Clinical Context brings data from many systems together, so every answer is grounded in real records.",
        items: [
          { id: "connectors", icon: "link", title: "HIS · LIS · PACS · EHR connectors", desc: "Connectors for hospital information, lab, imaging and electronic record systems. Where no connector exists yet, we assess the system and plan the integration with you." },
          { icon: "adjustments", title: "Data standardisation", desc: "Brings data from every source into one structure and vocabulary, so AI reads each field the way clinicians mean it." },
          { icon: "lock", title: "Role-based access", desc: "AI sees only what the user is allowed to see, following the hospital's own permissions." },
        ],
      },
      {
        type: "features",
        id: "cdr",
        overline: "Clinical data repository (CDR)",
        heading: "One source of clinical truth",
        lead: "The clinical data repository keeps patient, lab and treatment data in one consistent structure, ready for operations and research alike.",
        items: [
          { icon: "circleStack", title: "Centralised storage", desc: "One home for clinical data instead of scattered spreadsheets and disconnected systems." },
          { id: "deidentification", icon: "eyeSlash", title: "Data de-identification", desc: "Strips identifying information before data is used for research or model training." },
          { icon: "academic", title: "Research-ready", desc: "Structured datasets for clinical studies in hours rather than weeks." },
        ],
      },
      {
        type: "features",
        id: "intelligence",
        overline: "Aurion Intelligence",
        heading: "AI built for medicine",
        lead: "Models chosen, tuned and monitored for each clinical task, from reading documents to reasoning over patient records.",
        items: [
          { id: "models", icon: "cube", title: "Model hub", desc: "The right model for each task, improving continuously on the hospital's own data." },
          { id: "ocr", icon: "document", title: "Medical OCR", desc: "Turns lab slips, paper records and scanned documents into structured data." },
          { id: "usage", icon: "adjustments", title: "Usage controls", desc: "Monitor and limit how AI is used in each department, with a full audit trail." },
        ],
      },
      {
        type: "links",
        heading: "Built on the Aurion platform",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "A clinical AI coworker for care teams." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Automation for hospital workflows." },
          { href: "/security", icon: "shield", title: "Aurion Protect", desc: "Security and compliance at every layer." },
        ],
      },
    ],
  },
};
