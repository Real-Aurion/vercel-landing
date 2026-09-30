import { CONTACT_EMAIL } from "@/lib/contact";
import type { LocalizedPage } from "./types";


export const about: LocalizedPage = {
  vi: {
    meta: { title: "Về Aurion", description: "Aurion xây dựng hạ tầng trí tuệ y khoa tại Châu Á - Thái Bình Dương." },
    hero: {
      overline: "Về Aurion",
      title: "Khai phá dữ liệu, kiến tạo y học",
      lead: "Aurion xây dựng hạ tầng trí tuệ y khoa tại Châu Á - Thái Bình Dương, chuyển đổi dữ liệu y tế thô thành các hệ thống AI tự học liên tục, giúp nâng cao hiệu quả vận hành bệnh viện, tăng năng suất phòng xét nghiệm và cải thiện kết quả nghiên cứu.",
    },
    blocks: [
      {
        type: "features",
        overline: "Chúng tôi làm gì",
        heading: "Hai hướng đi, một mục tiêu",
        items: [
          { icon: "academic", title: "Nghiên cứu", desc: "OCR và Machine Learning để biến dữ liệu y tế thành tri thức." },
          { icon: "bolt", title: "Vận hành", desc: "Huấn luyện AI và tự động hóa để bệnh viện vận hành hiệu quả hơn." },
          { icon: "building", title: "Tại Việt Nam", desc: "Trụ sở tại Thành phố Hồ Chí Minh, làm việc trực tiếp cùng các bệnh viện." },
        ],
      },
      {
        type: "features",
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
    ],
  },
  en: {
    meta: { title: "About Aurion", description: "Aurion builds clinical intelligence infrastructure for Asia-Pacific." },
    hero: {
      overline: "About Aurion",
      title: "Where data meets medical discovery",
      lead: "Aurion is building Asia-Pacific clinical intelligence infrastructure, transforming raw medical data into continuously learning AI engines that improve hospital operational efficiency, lab throughput and research outcomes.",
    },
    blocks: [
      {
        type: "features",
        overline: "What we do",
        heading: "Two paths, one goal",
        items: [
          { icon: "academic", title: "Research", desc: "OCR and machine learning that turn medical data into knowledge." },
          { icon: "bolt", title: "Operations", desc: "AI training and automation that help hospitals run better." },
          { icon: "building", title: "In Vietnam", desc: "Based in Ho Chi Minh City, working side by side with hospitals." },
        ],
      },
      {
        type: "features",
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
    ],
  },
};


export const careers: LocalizedPage = {
  vi: {
    meta: { title: "Tuyển dụng", description: "Cùng Aurion xây dựng hạ tầng AI cho ngành y tế." },
    hero: {
      overline: "Tuyển dụng",
      title: "Cùng xây dựng tương lai của y tế",
      lead: "Chúng tôi tìm những người muốn đưa công nghệ tốt nhất vào tay đội ngũ y tế Việt Nam.",
    },
    blocks: [
      {
        type: "notice",
        icon: "briefcase",
        title: "Hiện chưa có vị trí tuyển dụng công khai",
        body: "Chúng tôi luôn sẵn sàng trò chuyện với kỹ sư, nhà nghiên cứu và chuyên gia y tế. Gửi CV và đôi dòng giới thiệu về bạn.",
        action: { label: "Gửi CV", href: `mailto:${CONTACT_EMAIL}` },
      },
    ],
  },
  en: {
    meta: { title: "Careers", description: "Help Aurion build AI infrastructure for healthcare." },
    hero: {
      overline: "Careers",
      title: "Help build the future of healthcare",
      lead: "We are looking for people who want to put the best technology in the hands of Vietnam's care teams.",
    },
    blocks: [
      {
        type: "notice",
        icon: "briefcase",
        title: "No open roles right now",
        body: "We are always happy to talk to engineers, researchers and clinicians. Send your CV and a few lines about yourself.",
        action: { label: "Send your CV", href: `mailto:${CONTACT_EMAIL}` },
      },
    ],
  },
};


// Every claim here mirrors the WordPress FAQ and still needs confirming before launch (MENU_QUESTIONS.md).
export const security: LocalizedPage = {
  vi: {
    meta: { title: "Bảo mật & tuân thủ", description: "Cách Aurion bảo vệ dữ liệu y tế." },
    hero: {
      overline: "Aurion Protect",
      title: "Bảo vệ dữ liệu bệnh nhân ở mọi lớp",
      lead: "Dữ liệu y tế là dữ liệu nhạy cảm nhất. Bảo mật được thiết kế vào nền tảng Aurion ngay từ đầu, không phải thêm vào sau.",
    },
    blocks: [
      {
        type: "features",
        overline: "Cách chúng tôi bảo vệ dữ liệu",
        heading: "Bảo mật theo thiết kế",
        items: [
          { icon: "lock", title: "Mã hóa đầu cuối", desc: "Dữ liệu được mã hóa khi truyền và khi lưu trữ." },
          { icon: "users", title: "Phân quyền theo vai trò", desc: "Mỗi người dùng và mỗi mô hình AI chỉ truy cập đúng phần dữ liệu được phép." },
          { icon: "eyeSlash", title: "Ẩn danh hóa", desc: "Thông tin định danh được loại bỏ trước khi dữ liệu dùng cho nghiên cứu hoặc huấn luyện." },
          { icon: "document", title: "Nhật ký truy cập", desc: "Mọi truy cập và thao tác đều được ghi lại để kiểm tra khi cần." },
          { icon: "shield", title: "Kiểm toán định kỳ", desc: "Đánh giá bảo mật thường xuyên cho toàn bộ hệ thống." },
          { icon: "building", title: "Tiêu chuẩn tuân thủ", desc: "Giải pháp được xây dựng trên nền tảng tuân thủ HIPAA, kèm Thỏa thuận Đối tác Kinh doanh (BAA)." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Security & compliance", description: "How Aurion protects medical data." },
    hero: {
      overline: "Aurion Protect",
      title: "Patient data protected at every layer",
      lead: "Medical data is the most sensitive data there is. Security is designed into the Aurion platform from the start, not bolted on afterwards.",
    },
    blocks: [
      {
        type: "features",
        overline: "How we protect data",
        heading: "Secure by design",
        items: [
          { icon: "lock", title: "End-to-end encryption", desc: "Data is encrypted in transit and at rest." },
          { icon: "users", title: "Role-based access", desc: "Every user and every AI model reaches only the data it is allowed to." },
          { icon: "eyeSlash", title: "De-identification", desc: "Identifying information is removed before data is used for research or training." },
          { icon: "document", title: "Access logs", desc: "Every access and action is recorded for review." },
          { icon: "shield", title: "Regular audits", desc: "Ongoing security reviews across the whole system." },
          { icon: "building", title: "Compliance", desc: "Built on a HIPAA-compliant foundation, with Business Associate Agreements (BAA)." },
        ],
      },
    ],
  },
};


export const blog: LocalizedPage = {
  vi: {
    meta: { title: "Blog", description: "Góc nhìn của Aurion về AI trong y tế." },
    hero: {
      overline: "Blog",
      title: "Góc nhìn về AI trong y tế",
      lead: "Bài viết từ đội ngũ Aurion về dữ liệu lâm sàng, AI và công việc cùng các bệnh viện.",
    },
    blocks: [
      {
        type: "notice",
        icon: "newspaper",
        title: "Bài viết đầu tiên sắp ra mắt",
        body: "Chúng tôi đang chuẩn bị những bài viết đầu tiên. Quay lại sớm nhé.",
        action: { label: "Về trang chủ", href: "/" },
      },
    ],
  },
  en: {
    meta: { title: "Blog", description: "Aurion's perspective on AI in healthcare." },
    hero: {
      overline: "Blog",
      title: "Perspectives on AI in healthcare",
      lead: "Writing from the Aurion team on clinical data, AI and working with hospitals.",
    },
    blocks: [
      {
        type: "notice",
        icon: "newspaper",
        title: "First posts coming soon",
        body: "We are preparing our first articles. Check back soon.",
        action: { label: "Back to home", href: "/" },
      },
    ],
  },
};
