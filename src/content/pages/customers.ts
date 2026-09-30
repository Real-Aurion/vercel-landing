import type { LocalizedPage } from "./types";


// Case-study copy is deliberately general until Lam confirms what we may publish about each hospital (MENU_QUESTIONS.md).
export const customers: LocalizedPage = {
  vi: {
    meta: { title: "Đối tác", description: "Các tổ chức y tế đang cùng Aurion ứng dụng AI." },
    hero: {
      overline: "Đối tác tin cậy",
      title: "Được các tổ chức y tế hàng đầu tin tưởng",
      lead: "Aurion hợp tác trực tiếp với các bệnh viện để đưa AI vào công việc hằng ngày của đội ngũ y tế.",
    },
    blocks: [
      {
        type: "links",
        heading: "Câu chuyện triển khai",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Bệnh viện Nhi Đồng 1", desc: "Trợ lý tri thức y khoa và kho dữ liệu lâm sàng." },
          { href: "/customers/115", icon: "heart", title: "Bệnh viện Nhân dân 115", desc: "Điều phối lịch phẫu thuật." },
        ],
      },
    ],
  },
  en: {
    meta: { title: "Customers", description: "Healthcare institutions applying AI with Aurion." },
    hero: {
      overline: "Trusted partners",
      title: "Trusted by leading healthcare institutions",
      lead: "Aurion works directly with hospitals to bring AI into the daily work of their care teams.",
    },
    blocks: [
      {
        type: "links",
        heading: "Deployment stories",
        items: [
          { href: "/customers/nhi-dong-1", icon: "heart", title: "Nhi Dong 1 Hospital", desc: "A medical knowledge assistant and clinical data repository." },
          { href: "/customers/115", icon: "heart", title: "People's Hospital 115", desc: "Surgery schedule coordination." },
        ],
      },
    ],
  },
};


export const nhiDong1: LocalizedPage = {
  vi: {
    meta: { title: "Bệnh viện Nhi Đồng 1", description: "Aurion cùng Bệnh viện Nhi Đồng 1 xây dựng trợ lý tri thức y khoa và kho dữ liệu lâm sàng." },
    hero: {
      overline: "Câu chuyện triển khai",
      title: "Bệnh viện Nhi Đồng 1",
      lead: "Một trong những bệnh viện nhi khoa hàng đầu Việt Nam. Aurion đồng hành cùng bệnh viện trong việc tổ chức tri thức y khoa và dữ liệu lâm sàng.",
    },
    blocks: [
      {
        type: "features",
        overline: "Phạm vi dự án",
        heading: "Những gì chúng tôi cùng xây dựng",
        items: [
          { icon: "chat", title: "Trợ lý tri thức y khoa", desc: "Giúp nhân viên y tế tra cứu phác đồ và tài liệu chuyên môn của bệnh viện bằng tiếng Việt." },
          { icon: "circleStack", title: "Kho dữ liệu lâm sàng", desc: "Tập trung dữ liệu lâm sàng về một cấu trúc thống nhất, phục vụ vận hành và nghiên cứu." },
        ],
      },
      {
        type: "notice",
        icon: "newspaper",
        title: "Câu chuyện chi tiết đang được hoàn thiện",
        body: "Kết quả và chia sẻ từ đội ngũ bệnh viện sẽ được cập nhật tại đây.",
        action: { label: "Xem các đối tác khác", href: "/customers" },
      },
    ],
  },
  en: {
    meta: { title: "Nhi Dong 1 Hospital", description: "Aurion and Nhi Dong 1 Hospital build a medical knowledge assistant and clinical data repository." },
    hero: {
      overline: "Deployment story",
      title: "Nhi Dong 1 Hospital",
      lead: "One of Vietnam's leading paediatric hospitals. Aurion works with the hospital to organise its medical knowledge and clinical data.",
    },
    blocks: [
      {
        type: "features",
        overline: "Project scope",
        heading: "What we are building together",
        items: [
          { icon: "chat", title: "Medical knowledge assistant", desc: "Helps staff search the hospital's guidelines and clinical documents in Vietnamese." },
          { icon: "circleStack", title: "Clinical data repository", desc: "Brings clinical data into one consistent structure for operations and research." },
        ],
      },
      {
        type: "notice",
        icon: "newspaper",
        title: "The full story is on its way",
        body: "Results and reflections from the hospital team will be published here.",
        action: { label: "See other customers", href: "/customers" },
      },
    ],
  },
};


export const hospital115: LocalizedPage = {
  vi: {
    meta: { title: "Bệnh viện Nhân dân 115", description: "Aurion cùng Bệnh viện Nhân dân 115 số hóa việc điều phối lịch phẫu thuật." },
    hero: {
      overline: "Câu chuyện triển khai",
      title: "Bệnh viện Nhân dân 115",
      lead: "Bệnh viện đa khoa lớn tại Thành phố Hồ Chí Minh. Aurion cùng bệnh viện số hóa việc điều phối lịch phẫu thuật.",
    },
    blocks: [
      {
        type: "features",
        overline: "Phạm vi dự án",
        heading: "Những gì chúng tôi cùng xây dựng",
        items: [
          { icon: "calendar", title: "Lịch phẫu thuật", desc: "Một lịch mổ chung cho các khoa, cập nhật theo thời gian thực cho ê-kíp và điều phối viên." },
          { icon: "users", title: "Phối hợp giữa các khoa", desc: "Giảm trao đổi thủ công qua điện thoại và giấy tờ khi xếp lịch." },
        ],
      },
      {
        type: "notice",
        icon: "newspaper",
        title: "Câu chuyện chi tiết đang được hoàn thiện",
        body: "Kết quả và chia sẻ từ đội ngũ bệnh viện sẽ được cập nhật tại đây.",
        action: { label: "Xem các đối tác khác", href: "/customers" },
      },
    ],
  },
  en: {
    meta: { title: "People's Hospital 115", description: "Aurion and People's Hospital 115 digitise surgery schedule coordination." },
    hero: {
      overline: "Deployment story",
      title: "People's Hospital 115",
      lead: "A major general hospital in Ho Chi Minh City. Aurion works with the hospital to digitise how surgery schedules are coordinated.",
    },
    blocks: [
      {
        type: "features",
        overline: "Project scope",
        heading: "What we are building together",
        items: [
          { icon: "calendar", title: "Surgery scheduling", desc: "One shared theatre schedule across departments, updated live for surgical teams and coordinators." },
          { icon: "users", title: "Cross-department coordination", desc: "Less back-and-forth by phone and paper when booking theatre time." },
        ],
      },
      {
        type: "notice",
        icon: "newspaper",
        title: "The full story is on its way",
        body: "Results and reflections from the hospital team will be published here.",
        action: { label: "See other customers", href: "/customers" },
      },
    ],
  },
};
