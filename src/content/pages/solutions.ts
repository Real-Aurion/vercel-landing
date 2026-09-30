import type { LocalizedPage } from "./types";


export const hospitals: LocalizedPage = {
  vi: {
    meta: { title: "Giải pháp cho bệnh viện / phòng khám", description: "AI hỗ trợ chăm sóc bệnh nhân và điều phối vận hành bệnh viện." },
    hero: {
      overline: "Bệnh viện / phòng khám",
      title: "Chăm sóc bệnh nhân tốt hơn, vận hành nhẹ nhàng hơn",
      lead: "Nâng cao hiệu quả trong công tác chăm sóc bệnh nhân và điều phối vận hành, qua các ứng dụng AI trong suy luận lâm sàng và tự động hóa quy trình.",
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "40%", label: "Giảm khối lượng công việc hành chính" },
          { value: "2×", label: "Năng suất tiếp nhận bệnh nhân" },
        ],
      },
      {
        type: "features",
        overline: "Aurion hỗ trợ",
        heading: "Công cụ cho từng vai trò trong bệnh viện",
        items: [
          { icon: "chat", title: "Bác sĩ", desc: "Tra cứu phác đồ và tóm tắt hồ sơ bệnh án trong vài giây với Aurion Assistant." },
          { icon: "users", title: "Điều dưỡng & điều phối", desc: "Theo dõi dòng bệnh nhân và lịch phẫu thuật trên một màn hình chung." },
          { icon: "building", title: "Ban lãnh đạo", desc: "Nắm bắt hiệu suất vận hành qua dữ liệu tập trung thay vì báo cáo thủ công." },
        ],
      },
      {
        type: "links",
        heading: "Sản phẩm liên quan",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "Trợ lý AI lâm sàng." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Tự động hóa vận hành." },
          { href: "/customers", icon: "heart", title: "Đối tác", desc: "Các bệnh viện đang dùng Aurion." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Solutions for hospitals / clinics", description: "AI for patient care and hospital operations." },
    hero: {
      overline: "Hospitals / clinics",
      title: "Better patient care, lighter operations",
      lead: "Enhancing patient flow, staff efficiency and care coordination through AI clinical reasoning and workflow automation.",
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "40%", label: "Less administrative work" },
          { value: "2×", label: "Patient throughput" },
        ],
      },
      {
        type: "features",
        overline: "How Aurion helps",
        heading: "Tools for every role in the hospital",
        items: [
          { icon: "chat", title: "Doctors", desc: "Look up guidelines and summarise patient records in seconds with Aurion Assistant." },
          { icon: "users", title: "Nurses & coordinators", desc: "Follow patient flow and theatre schedules on one shared screen." },
          { icon: "building", title: "Leadership", desc: "See operational performance from central data instead of manual reports." },
        ],
      },
      {
        type: "links",
        heading: "Related products",
        items: [
          { href: "/product/assistant", icon: "chat", title: "Aurion Assistant", desc: "A clinical AI coworker." },
          { href: "/product/operations", icon: "bolt", title: "Aurion Operations", desc: "Workflow automation." },
          { href: "/customers", icon: "heart", title: "Customers", desc: "Hospitals using Aurion." },
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
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "3×", label: "Xử lý mẫu nhanh hơn" },
          { value: "98%", label: "Độ chính xác trích xuất dữ liệu" },
        ],
      },
      {
        type: "features",
        overline: "Aurion hỗ trợ",
        heading: "Quy trình báo cáo tự động từ đầu đến cuối",
        items: [
          { icon: "document", title: "OCR phiếu xét nghiệm", desc: "Đọc phiếu giấy và tệp scan, chuyển thành dữ liệu có cấu trúc." },
          { icon: "beaker", title: "Tự động hóa quy trình", desc: "Giảm các bước nhập liệu lặp lại giữa máy xét nghiệm và hệ thống LIS." },
          { icon: "shield", title: "Kiểm soát chất lượng", desc: "Đánh dấu kết quả bất thường hoặc thiếu thông tin để kỹ thuật viên rà soát." },
        ],
      },
      {
        type: "links",
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
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "3×", label: "Faster sample processing" },
          { value: "98%", label: "Data extraction accuracy" },
        ],
      },
      {
        type: "features",
        overline: "How Aurion helps",
        heading: "An automated reporting pipeline, end to end",
        items: [
          { icon: "document", title: "Lab slip OCR", desc: "Reads paper slips and scans and turns them into structured data." },
          { icon: "beaker", title: "Workflow automation", desc: "Removes repeated data entry between analysers and the LIS." },
          { icon: "shield", title: "Quality checks", desc: "Flags abnormal or incomplete results for a technician to review." },
        ],
      },
      {
        type: "links",
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
    meta: { title: "Giải pháp cho viện nghiên cứu", description: "Dữ liệu có cấu trúc và Machine Learning cho nghiên cứu y học." },
    hero: {
      overline: "Viện nghiên cứu",
      title: "Từ dữ liệu thô đến khám phá y học",
      lead: "Hệ thống hóa dữ liệu, phân tích chuyên sâu bằng Machine Learning và tự động hóa các bước trong nghiên cứu khoa học giúp tạo sự đột phá trong khám phá y học.",
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "5×", label: "Chuẩn bị dữ liệu nhanh hơn" },
          { value: "ML", label: "Công cụ phân tích chuyên sâu" },
        ],
      },
      {
        type: "features",
        overline: "Aurion hỗ trợ",
        heading: "Dữ liệu sạch, sẵn sàng cho nghiên cứu",
        items: [
          { icon: "circleStack", title: "Bộ dữ liệu có cấu trúc", desc: "Trích xuất dữ liệu từ kho dữ liệu lâm sàng theo tiêu chí của đề tài." },
          { icon: "eyeSlash", title: "Ẩn danh hóa", desc: "Loại bỏ thông tin định danh trước khi dữ liệu rời khỏi bệnh viện." },
          { icon: "cpu", title: "Machine Learning", desc: "Xây dựng và đánh giá mô hình trên dữ liệu thật của bệnh viện." },
        ],
      },
      {
        type: "links",
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
    meta: { title: "Solutions for research facilities", description: "Structured data and machine learning for medical research." },
    hero: {
      overline: "Research facilities",
      title: "From raw data to medical discovery",
      lead: "Accelerating scientific discovery with structured datasets, ML-powered insights and automated research preparation.",
    },
    blocks: [
      {
        type: "metrics",
        items: [
          { value: "5×", label: "Faster dataset preparation" },
          { value: "ML", label: "Powered insights engine" },
        ],
      },
      {
        type: "features",
        overline: "How Aurion helps",
        heading: "Clean data, ready for research",
        items: [
          { icon: "circleStack", title: "Structured datasets", desc: "Extract data from the clinical repository to match a study's criteria." },
          { icon: "eyeSlash", title: "De-identification", desc: "Removes identifying information before data leaves the hospital." },
          { icon: "cpu", title: "Machine learning", desc: "Build and evaluate models on the hospital's real data." },
        ],
      },
      {
        type: "links",
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
