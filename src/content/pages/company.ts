import { CAREERS_MAILTO } from "@/lib/contact";
import type { LocalizedPage } from "./types";


export const about: LocalizedPage = {
  vi: {
    meta: { title: "Về Aurion", description: "Aurion xây dựng hạ tầng trí tuệ y khoa tại Châu Á - Thái Bình Dương, bắt đầu từ Việt Nam." },
    hero: {
      overline: "Về Aurion",
      title: "Khai phá dữ liệu, kiến tạo y học",
      lead: "Aurion xây dựng hạ tầng trí tuệ y khoa tại Châu Á - Thái Bình Dương, chuyển đổi dữ liệu y tế thô thành các hệ thống AI tự học liên tục, giúp nâng cao hiệu quả vận hành bệnh viện, tăng năng suất phòng xét nghiệm và cải thiện kết quả nghiên cứu.",
    },
    blocks: [
      {
        type: "split",
        overline: "Sứ mệnh",
        heading: "Số hóa y tế Việt Nam, từ bên trong bệnh viện",
        body: "Chúng tôi làm việc trực tiếp với các bệnh viện, xây dựng những công cụ mà đội ngũ y tế thực sự dùng mỗi ngày. Dữ liệu ở lại bệnh viện, còn thời gian được trả lại cho bệnh nhân.",
        points: ["Nghiên cứu: OCR và Machine Learning", "Vận hành: huấn luyện AI và tự động hóa", "Triển khai on-premise tại bệnh viện"],
        visual: "connectors",
      },
      {
        type: "grid",
        id: "values",
        overline: "Giá trị cốt lõi",
        heading: "Giá trị định hướng công ty Aurion",
        items: [
          { icon: "shield", title: "Trách nhiệm", desc: "Luôn giữ đúng cam kết với mọi đối tác y tế." },
          { icon: "users", title: "Đoàn kết", desc: "Kết nối chuyên môn y khoa với đổi mới công nghệ trong một đội ngũ thống nhất." },
          { icon: "heart", title: "Tôn trọng", desc: "Xây dựng môi trường cởi mở, lắng nghe mọi ý kiến." },
          { icon: "lock", title: "Chính trực", desc: "Tuân thủ nghiêm ngặt các tiêu chuẩn đạo đức về bảo mật dữ liệu." },
          { icon: "chart", title: "Tối ưu hóa", desc: "Không ngừng đổi mới để mang lại kết quả chăm sóc sức khỏe tốt nhất." },
          { icon: "bolt", title: "Linh hoạt", desc: "Nhanh chóng thích ứng với những thay đổi trong ngành y tế." },
        ],
      },
      {
        type: "links",
        overline: "Đồng hành cùng Aurion",
        heading: "Bắt đầu từ đây",
        items: [
          { href: "/customers", icon: "heart", title: "Câu chuyện khách hàng", desc: "Aurion tại Nhi Đồng 1 và 115." },
          { href: "/careers", icon: "briefcase", title: "Tuyển dụng", desc: "Cùng xây dựng Aurion." },
          { href: "/#contact", icon: "envelope", title: "Liên hệ", desc: "Trò chuyện với đội ngũ." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "About Aurion", description: "Aurion builds clinical intelligence infrastructure for Asia-Pacific, starting in Vietnam." },
    hero: {
      overline: "About Aurion",
      title: "Where data meets medical discovery",
      lead: "Aurion is building Asia-Pacific clinical intelligence infrastructure, transforming raw medical data into continuously learning AI engines that improve hospital operational efficiency, lab throughput and research outcomes.",
    },
    blocks: [
      {
        type: "split",
        overline: "Mission",
        heading: "Digitising Vietnamese healthcare, from inside the hospital",
        body: "We work directly with hospitals, building tools their care teams actually use every day. The data stays in the hospital; the time goes back to patients.",
        points: ["Research: OCR and machine learning", "Operations: AI training and automation", "Deployed on-premise at the hospital"],
        visual: "connectors",
      },
      {
        type: "grid",
        id: "values",
        overline: "Core values",
        heading: "The values that guide Aurion",
        items: [
          { icon: "shield", title: "Accountability", desc: "We keep our commitments to every healthcare partner." },
          { icon: "users", title: "Unity", desc: "Clinical expertise and technical innovation in one team." },
          { icon: "heart", title: "Respect", desc: "An open environment where every voice is heard." },
          { icon: "lock", title: "Integrity", desc: "Strict ethical standards for data privacy." },
          { icon: "chart", title: "Optimisation", desc: "Continuous innovation for the best healthcare outcomes." },
          { icon: "bolt", title: "Nimble", desc: "Quick to adapt as healthcare changes." },
        ],
      },
      {
        type: "links",
        overline: "Work with Aurion",
        heading: "Start here",
        items: [
          { href: "/customers", icon: "heart", title: "Customer stories", desc: "Aurion at Nhi Dong 1 and 115." },
          { href: "/careers", icon: "briefcase", title: "Careers", desc: "Help build Aurion." },
          { href: "/#contact", icon: "envelope", title: "Contact", desc: "Talk to the team." },
        ],
      },
    ],
  },
};


export const careers: LocalizedPage = {
  vi: {
    meta: { title: "Tuyển dụng", description: "Cùng Aurion xây dựng hạ tầng AI cho ngành y tế Việt Nam." },
    hero: {
      overline: "Tuyển dụng",
      title: "Cùng xây dựng tương lai của y tế Việt Nam",
      lead: "Chúng tôi tìm những người muốn đưa công nghệ tốt nhất vào tay đội ngũ y tế, và thấy sản phẩm của mình được dùng mỗi ngày trong bệnh viện.",
    },
    blocks: [
      {
        type: "grid",
        overline: "Làm việc tại Aurion",
        heading: "Vì sao chọn Aurion",
        items: [
          { icon: "heart", title: "Tác động thật", desc: "Sản phẩm của bạn chạy trong phòng mổ và khoa phòng của những bệnh viện hàng đầu." },
          { icon: "building", title: "Gần người dùng", desc: "Làm việc trực tiếp với bác sĩ, điều dưỡng và điều phối viên." },
          { icon: "cpu", title: "Bài toán khó", desc: "AI y khoa tiếng Việt, dữ liệu lâm sàng và hệ thống vận hành 24/7." },
          { icon: "users", title: "Đội ngũ nhỏ", desc: "Mỗi người đều có tiếng nói và trách nhiệm rõ ràng." },
        ],
      },
      {
        type: "notice",
        icon: "briefcase",
        title: "Gửi CV cho chúng tôi",
        body: "Hiện chưa có vị trí tuyển dụng công khai, nhưng chúng tôi luôn muốn gặp kỹ sư, nhà nghiên cứu và chuyên gia y tế giỏi. Gửi CV kèm đôi dòng giới thiệu về bạn.",
        action: { label: "Gửi CV", href: CAREERS_MAILTO },
      },
    ],
  },
  en: {
    meta: { title: "Careers", description: "Help Aurion build AI infrastructure for Vietnamese healthcare." },
    hero: {
      overline: "Careers",
      title: "Help build the future of Vietnamese healthcare",
      lead: "We are looking for people who want to put the best technology in the hands of care teams, and see their work used in hospitals every day.",
    },
    blocks: [
      {
        type: "grid",
        overline: "Working at Aurion",
        heading: "Why Aurion",
        items: [
          { icon: "heart", title: "Real impact", desc: "Your work runs in the theatres and wards of leading hospitals." },
          { icon: "building", title: "Close to users", desc: "Work directly with doctors, nurses and coordinators." },
          { icon: "cpu", title: "Hard problems", desc: "Vietnamese medical AI, clinical data and systems that run around the clock." },
          { icon: "users", title: "A small team", desc: "Everyone has a voice and clear ownership." },
        ],
      },
      {
        type: "notice",
        icon: "briefcase",
        title: "Send us your CV",
        body: "There are no open roles right now, but we always want to meet great engineers, researchers and clinicians. Send your CV and a few lines about yourself.",
        action: { label: "Send your CV", href: CAREERS_MAILTO },
      },
    ],
  },
};


export const security: LocalizedPage = {
  vi: {
    meta: { title: "Bảo mật & tuân thủ", description: "Aurion triển khai on-premise tại bệnh viện, dữ liệu y tế được lưu trữ tại Việt Nam." },
    hero: {
      overline: "Aurion Protect",
      title: "Dữ liệu bệnh nhân không bao giờ rời khỏi bệnh viện",
      lead: "Aurion được triển khai on-premise, trên máy chủ đặt tại bệnh viện ở Việt Nam. Bảo mật được thiết kế vào nền tảng ngay từ đầu, không phải thêm vào sau.",
      visual: "onPrem",
    },
    blocks: [
      {
        type: "grid",
        overline: "Tuân thủ pháp lý & tiêu chuẩn",
        heading: "Xây dựng đúng theo quy định",
        lead: "Aurion được thiết kế theo các yêu cầu kỹ thuật và tiêu chuẩn bảo mật y tế hiện hành.",
        items: [
          {
            icon: "document",
            title: "Công văn 365/TTYQG-GPQLCL-2025",
            desc: "Yêu cầu kỹ thuật triển khai phần mềm hồ sơ bệnh án điện tử của Bộ Y tế Việt Nam.",
          },
          {
            icon: "shield",
            title: "HIPAA",
            desc: "Tiêu chuẩn bảo vệ thông tin sức khỏe cá nhân của Hoa Kỳ — chuẩn mực quốc tế để Aurion đối chiếu trong thiết kế bảo mật.",
          },
        ],
      },
      {
        type: "grid",
        overline: "Cách chúng tôi bảo vệ dữ liệu",
        heading: "Bảo mật theo thiết kế",
        items: [
          { icon: "building", title: "On-premise tại bệnh viện", desc: "Toàn bộ hệ thống chạy trên máy chủ của bệnh viện, dữ liệu lưu trữ tại Việt Nam." },
          { icon: "lock", title: "Mã hóa dữ liệu", desc: "Dữ liệu được mã hóa khi truyền và khi lưu trữ." },
          { icon: "users", title: "Phân quyền theo vai trò", desc: "Mỗi người dùng và mỗi mô hình AI chỉ truy cập đúng phần dữ liệu được phép." },
          { icon: "document", title: "Nhật ký truy cập", desc: "Mọi truy cập và thao tác đều được ghi lại để kiểm tra khi cần." },
          { icon: "eyeSlash", title: "Ẩn danh hóa", desc: "Thông tin định danh được loại bỏ trước khi dữ liệu dùng cho nghiên cứu." },
          { icon: "shield", title: "AI chạy tại chỗ", desc: "Mô hình AI chạy trong hạ tầng bệnh viện, không gửi dữ liệu bệnh nhân ra ngoài." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Security & compliance", description: "Aurion is deployed on-premise at the hospital, with medical data stored in Vietnam." },
    hero: {
      overline: "Aurion Protect",
      title: "Patient data never leaves the hospital",
      lead: "Aurion is deployed on-premise, on servers inside the hospital in Vietnam. Security is designed into the platform from the start, not bolted on afterwards.",
      visual: "onPrem",
    },
    blocks: [
      {
        type: "grid",
        overline: "Regulatory compliance",
        heading: "Built to the right standards",
        lead: "Aurion is designed in line with current healthcare technical requirements and data security standards.",
        items: [
          {
            icon: "document",
            title: "Official Dispatch 365/TTYQG-GPQLCL-2025",
            desc: "Vietnam Ministry of Health technical requirements for deploying electronic medical record (EMR) software.",
          },
          {
            icon: "shield",
            title: "HIPAA",
            desc: "US standard for protecting personal health information — an international benchmark Aurion references in its security design.",
          },
        ],
      },
      {
        type: "grid",
        overline: "How we protect data",
        heading: "Secure by design",
        items: [
          { icon: "building", title: "On-premise at the hospital", desc: "The whole system runs on the hospital's servers, with data stored in Vietnam." },
          { icon: "lock", title: "Encryption", desc: "Data is encrypted in transit and at rest." },
          { icon: "users", title: "Role-based access", desc: "Every user and every AI model reaches only the data it is allowed to." },
          { icon: "document", title: "Access logs", desc: "Every access and action is recorded for review." },
          { icon: "eyeSlash", title: "De-identification", desc: "Identifying information is removed before data is used for research." },
          { icon: "shield", title: "AI runs locally", desc: "AI models run inside the hospital; patient data is never sent out." },
        ],
      },
    ],
  },
};
