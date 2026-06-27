/**
 * Dữ liệu cấu hình cho website thuyết trình "Hài hòa lợi ích trong chuỗi giá trị cà phê".
 * Mọi nội dung text, số liệu mô phỏng và đường dẫn ảnh đều tập trung ở đây để dễ chỉnh sửa.
 */

/* ------------------------------------------------------------------ */
/* Ảnh: đổi đường dẫn tại đây nếu tên file trong public/pictures thay đổi */
/* ------------------------------------------------------------------ */
export const imageMap = {
  hero: "/pictures/hero-coffee-chain.png",
  farmer: "/pictures/farmer-daklak.png",
  valueChain: "/pictures/value-chain-map.png",
  unitWarning: "/pictures/unit-warning.png",
  simulator: "/pictures/price-simulator.png",
  shock: "/pictures/shock-game.png",
  policy: "/pictures/policy-lab.png",
  aiDebate: "/pictures/ai-debate.png",
  conclusion: "/pictures/conclusion-balance.png",
  quiz: "/pictures/quiz-section.png",
} as const;

/* ------------------------------------------------------------------ */
/* Điều hướng + thứ tự section (dùng cho navbar, observer, presentation) */
/* ------------------------------------------------------------------ */
export type SectionMeta = {
  id: string;
  title: string;
  /** Lời gợi ý thuyết trình 30-45 giây */
  note: string;
};

/** 12 section theo thứ tự cuộn. Presentation mode đi qua toàn bộ. */
export const sections: SectionMeta[] = [
  {
    id: "hero",
    title: "Mở đầu",
    note: "Hôm nay nhóm em phân tích một câu hỏi rất gần gũi: vì sao người tiêu dùng có thể trả 85.000đ cho một ly cà phê, nhưng người nông dân trồng ra hạt cà phê lại có thể nhận phần lợi ích thấp trong chuỗi giá trị?",
  },
  {
    id: "case",
    title: "Câu chuyện anh Khánh",
    note: "Anh Khánh đại diện cho người sản xuất nguyên liệu. Anh tạo ra đầu vào quan trọng nhất nhưng lại chịu nhiều rủi ro về thời tiết, giá cả và chi phí sản xuất.",
  },
  {
    id: "theory",
    title: "Lý thuyết 5.3.1",
    note: "Theo lý thuyết lợi ích kinh tế, mỗi chủ thể tham gia hoạt động kinh tế đều theo đuổi lợi ích vật chất nhất định. Quan hệ giữa họ vừa thống nhất vì cần nhau, vừa mâu thuẫn vì phân chia lợi ích.",
  },
  {
    id: "value-chain",
    title: "Chuỗi lợi ích",
    note: "Trong chuỗi cà phê, giá trị tăng dần qua thu mua, chế biến, bán lẻ và dịch vụ. Chủ thể có thương hiệu, vốn và hệ thống phân phối thường có quyền lực lớn hơn.",
  },
  {
    id: "unit-warning",
    title: "Cảnh báo đơn vị",
    note: "Nhóm em không so trực tiếp 40.000đ/kg với 85.000đ/ly, vì đây là hai đơn vị khác nhau. Điều quan trọng là phân tích giá trị được tạo ra và phân phối qua từng khâu.",
  },
  {
    id: "simulator",
    title: "Simulator 85.000đ",
    note: "Phần mô phỏng này cho thấy một ly cà phê bán lẻ bao gồm nhiều lớp chi phí và lợi ích. Khi muốn tăng phần cho nông dân, chuỗi phải điều chỉnh cách phân phối hoặc tăng giá trị chung.",
  },
  {
    id: "shock",
    title: "Cú sốc giá",
    note: "Khi thị trường biến động, tác động không chia đều cho các chủ thể. Nông dân thường chịu ảnh hưởng mạnh hơn vì thiếu công cụ phòng vệ và thiếu khả năng thương lượng.",
  },
  {
    id: "state-role",
    title: "Vai trò Nhà nước",
    note: "Nhà nước có vai trò tạo khung pháp lý, hỗ trợ liên kết, tín dụng, thông tin thị trường và bảo vệ lợi ích chính đáng của các chủ thể yếu thế.",
  },
  {
    id: "policy",
    title: "Chính sách thực tế",
    note: "Các chính sách như Nghị định 98, Nghị định 55 và Quyết định 150 có thể liên hệ với việc hỗ trợ liên kết chuỗi, tín dụng nông nghiệp và phát triển nông nghiệp bền vững.",
  },
  {
    id: "ai-debate",
    title: "AI Debate",
    note: "Phần tranh biện AI giúp người xem nhập vai từng chủ thể để hiểu vì sao lợi ích của họ có thể khác nhau và cần được hài hòa.",
  },
  {
    id: "quiz",
    title: "Quiz",
    note: "Phần quiz giúp kiểm tra lại các khái niệm chính của bài: lợi ích kinh tế, quan hệ lợi ích, mâu thuẫn lợi ích và vai trò Nhà nước.",
  },
  {
    id: "conclusion",
    title: "Kết luận",
    note: "Kết luận của nhóm là thị trường có thể tạo ra giá trị, nhưng để chuỗi cà phê phát triển bền vững thì cần cơ chế hài hòa lợi ích giữa nông dân, doanh nghiệp, người tiêu dùng và Nhà nước.",
  },
];

/** Liên kết nhanh trên sticky navbar (tập con của sections) */
export const navItems: { id: string; label: string }[] = [
  { id: "case", label: "Case" },
  { id: "value-chain", label: "Chuỗi lợi ích" },
  { id: "simulator", label: "Simulator" },
  { id: "state-role", label: "Nhà nước" },
  { id: "quiz", label: "Quiz" },
  { id: "conclusion", label: "Kết luận" },
];

/* ------------------------------------------------------------------ */
/* Hero */
/* ------------------------------------------------------------------ */
export const heroStats: { value: string; label: string; accent: string }[] = [
  {
    value: "40.000đ/kg",
    label: "Giá cà phê nhân nông dân bán cho thương lái.",
    accent: "text-leaf",
  },
  {
    value: "85.000đ/ly",
    label: "Giá bán lẻ một ly cà phê tại thành phố.",
    accent: "text-clay",
  },
  {
    value: "5 chủ thể",
    label: "Nông dân, thương lái, rang xay, bán lẻ, người tiêu dùng.",
    accent: "text-coffee",
  },
];

/* ------------------------------------------------------------------ */
/* 5.3.1 - Lý thuyết nền tảng */
/* ------------------------------------------------------------------ */
export const theoryCards: { title: string; body: string; accent: string }[] = [
  {
    title: "Lợi ích kinh tế",
    body: "Lợi ích kinh tế là lợi ích vật chất mà các chủ thể đạt được khi tham gia hoạt động kinh tế. Nó gắn với nhu cầu, vị trí và vai trò của từng chủ thể trong quá trình sản xuất, phân phối, trao đổi và tiêu dùng.",
    accent: "border-leaf",
  },
  {
    title: "Quan hệ lợi ích kinh tế",
    body: "Quan hệ lợi ích kinh tế là quan hệ giữa các chủ thể trong việc xác lập, phân phối và thực hiện lợi ích. Trong chuỗi cà phê, các chủ thể vừa phụ thuộc nhau, vừa có thể mâu thuẫn về phần lợi ích nhận được.",
    accent: "border-clay",
  },
  {
    title: "Mâu thuẫn lợi ích",
    body: "Mâu thuẫn xuất hiện khi một bên muốn mua rẻ, bán đắt, giảm rủi ro hoặc tăng lợi nhuận, trong khi bên khác bị giảm thu nhập hoặc mất khả năng thương lượng.",
    accent: "border-coffee",
  },
];

/* ------------------------------------------------------------------ */
/* Chuỗi quan hệ lợi ích: 5 chủ thể */
/* ------------------------------------------------------------------ */
export type Actor = {
  id: string;
  name: string;
  emoji: string;
  contribution: string;
  benefit: string;
  risk: string;
  power: string;
  powerLevel: 1 | 2 | 3 | 4; // 1 thấp -> 4 cao, cho thanh thể hiện
};

export const actors: Actor[] = [
  {
    id: "farmer",
    name: "Nông dân",
    emoji: "🧑‍🌾",
    contribution: "Trồng, chăm sóc, thu hoạch, phơi và sơ chế ban đầu.",
    benefit: "Tiền bán cà phê nhân.",
    risk: "Giá thế giới giảm, thời tiết, sâu bệnh, chi phí đầu vào, vốn yếu.",
    power: "Thấp nếu bán riêng lẻ.",
    powerLevel: 1,
  },
  {
    id: "trader",
    name: "Thương lái",
    emoji: "🚚",
    contribution: "Thu mua, gom hàng, vận chuyển, kết nối nguồn cung.",
    benefit: "Chênh lệch giá mua và giá bán.",
    risk: "Biến động giá, tồn kho, chất lượng hàng.",
    power: "Cao hơn nông dân nếu nắm thông tin thị trường.",
    powerLevel: 2,
  },
  {
    id: "roaster",
    name: "Nhà rang xay",
    emoji: "🏭",
    contribution: "Rang, phối trộn, kiểm soát chất lượng, đóng gói.",
    benefit: "Giá trị gia tăng từ chế biến.",
    risk: "Chi phí máy móc, tiêu chuẩn chất lượng, tồn kho.",
    power: "Trung bình đến cao nếu có công nghệ và thương hiệu.",
    powerLevel: 3,
  },
  {
    id: "retail",
    name: "Chuỗi bán lẻ",
    emoji: "☕",
    contribution: "Mặt bằng, nhân viên, dịch vụ, marketing, trải nghiệm, thương hiệu.",
    benefit: "Biên lợi nhuận từ sản phẩm hoàn chỉnh và hệ sinh thái bán lẻ.",
    risk: "Mặt bằng, vận hành, cạnh tranh.",
    power: "Cao nếu có thương hiệu, quy mô và dữ liệu khách hàng.",
    powerLevel: 4,
  },
  {
    id: "consumer",
    name: "Người tiêu dùng",
    emoji: "🙋",
    contribution: "Chi trả, tạo nhu cầu thị trường.",
    benefit: "Sản phẩm, không gian, dịch vụ, trải nghiệm.",
    risk: "Trả giá cao, thiếu thông tin về phân phối lợi ích.",
    power: "Gián tiếp qua lựa chọn tiêu dùng.",
    powerLevel: 2,
  },
];

export const valueChainConclusion =
  "Trong chuỗi này, chủ thể có khả năng hưởng lợi lớn thường là khâu nắm thương hiệu, chế biến sâu, hệ thống phân phối và dữ liệu khách hàng. Điều đó không có nghĩa là họ không đóng góp, nhưng phản ánh sự chênh lệch quyền lực thị trường giữa các chủ thể. Nông dân đóng góp nền tảng nguyên liệu nhưng thường yếu về vốn, thông tin, công nghệ, liên kết và khả năng thương lượng.";

/* ------------------------------------------------------------------ */
/* Cảnh báo phân tích sai đơn vị */
/* ------------------------------------------------------------------ */
export const unitWarningRows: { layer: string; detail: string }[] = [
  { layer: "Nguyên liệu", detail: "Cà phê nhân." },
  { layer: "Chế biến", detail: "Rang xay, phối trộn, đóng gói." },
  { layer: "Dịch vụ", detail: "Pha chế, phục vụ, mặt bằng." },
  { layer: "Thương hiệu", detail: "Marketing, hệ thống bán lẻ." },
  { layer: "Chính sách", detail: "Thuế, tiêu chuẩn, hợp đồng, hỗ trợ liên kết." },
];

/* ------------------------------------------------------------------ */
/* Simulator 85.000đ (số liệu MINH HỌA) */
/* ------------------------------------------------------------------ */
export const CUP_PRICE = 85000;

export type SimPart = { id: string; label: string; percent: number; color: string };

export const simulatorParts: SimPart[] = [
  { id: "raw", label: "Nguyên liệu cà phê", percent: 7, color: "#3e6b3c" },
  { id: "logistics", label: "Thu mua & logistics", percent: 8, color: "#6b8e5a" },
  { id: "roasting", label: "Rang xay & chế biến", percent: 12, color: "#7a4a28" },
  { id: "ops", label: "Ly, sữa, đá, vận hành", percent: 18, color: "#a86a3d" },
  { id: "staff", label: "Nhân viên & mặt bằng", percent: 25, color: "#c98a4b" },
  { id: "brand", label: "Marketing & thương hiệu", percent: 15, color: "#d97706" },
  { id: "profit", label: "Lợi nhuận & dự phòng rủi ro", percent: 15, color: "#5c7c89" },
];

export const simulatorQuestions = [
  "Nếu tăng phần cho nông dân, phần nào trong chuỗi phải thay đổi?",
  "Ai có đủ quyền lực để quyết định sự thay đổi đó?",
];

/* ------------------------------------------------------------------ */
/* Mini game "Cú sốc giá thế giới" */
/* ------------------------------------------------------------------ */
export type ShockScenario = {
  id: string;
  label: string;
  emoji: string;
  impacts: { actor: string; text: string; tone: "down" | "up" | "neutral" }[];
  conclusion: string;
};

export const shockScenarios: ShockScenario[] = [
  {
    id: "price-drop",
    label: "Giá thế giới giảm 20%",
    emoji: "📉",
    impacts: [
      {
        actor: "Nông dân",
        text: "Dễ bị giảm thu nhập nếu không có hợp đồng bảo hiểm giá hoặc liên kết tiêu thụ.",
        tone: "down",
      },
      {
        actor: "Thương lái",
        text: "Có thể ép giá mua hoặc giảm rủi ro bằng tồn kho ngắn hạn.",
        tone: "neutral",
      },
      {
        actor: "Rang xay",
        text: "Có thể hưởng lợi nếu mua được nguyên liệu rẻ hơn.",
        tone: "up",
      },
      {
        actor: "Bán lẻ",
        text: "Giá bán có thể không giảm tương ứng vì còn chi phí thương hiệu, vận hành và định vị thị trường.",
        tone: "neutral",
      },
      {
        actor: "Người tiêu dùng",
        text: "Chưa chắc được hưởng giá thấp hơn ngay.",
        tone: "neutral",
      },
    ],
    conclusion:
      "Trong kinh tế thị trường, biến động giá không tác động đều lên mọi chủ thể. Chủ thể yếu về vốn, thông tin và hợp đồng thường chịu rủi ro lớn hơn.",
  },
  {
    id: "fertilizer-up",
    label: "Chi phí phân bón tăng",
    emoji: "🧪",
    impacts: [
      {
        actor: "Nông dân",
        text: "Chi phí sản xuất tăng, biên lợi nhuận mỏng đi; nếu giá bán không tăng tương ứng thì thu nhập giảm.",
        tone: "down",
      },
      {
        actor: "Thương lái",
        text: "Ít ảnh hưởng trực tiếp, nhưng nguồn cung có thể giảm nếu nông dân thu hẹp sản xuất.",
        tone: "neutral",
      },
      {
        actor: "Rang xay",
        text: "Giá nguyên liệu đầu vào có thể nhích lên, biên lợi nhuận chịu một phần áp lực.",
        tone: "neutral",
      },
      {
        actor: "Bán lẻ",
        text: "Ít nhạy cảm nhất nhờ thương hiệu và định giá, có thể chuyển một phần chi phí sang giá bán.",
        tone: "up",
      },
      {
        actor: "Người tiêu dùng",
        text: "Có thể chịu giá cao hơn ở cuối chuỗi nếu chi phí được chuyển tiếp.",
        tone: "down",
      },
    ],
    conclusion:
      "Khi chi phí đầu vào tăng, người trực tiếp sản xuất thường gánh áp lực trước. Khâu cuối có thương hiệu dễ chuyển dịch chi phí hơn.",
  },
  {
    id: "demand-up",
    label: "Nhu cầu tiêu dùng tại thành phố tăng",
    emoji: "📈",
    impacts: [
      {
        actor: "Nông dân",
        text: "Nhu cầu nguyên liệu tăng có thể cải thiện giá thu mua, nhưng lợi ích phụ thuộc vào việc có liên kết tiêu thụ hay không.",
        tone: "up",
      },
      {
        actor: "Thương lái",
        text: "Cơ hội tăng khối lượng giao dịch và lợi nhuận.",
        tone: "up",
      },
      {
        actor: "Rang xay",
        text: "Tăng công suất, hưởng lợi từ quy mô.",
        tone: "up",
      },
      {
        actor: "Bán lẻ",
        text: "Hưởng lợi rõ nhất nhờ doanh thu và biên lợi nhuận tăng.",
        tone: "up",
      },
      {
        actor: "Người tiêu dùng",
        text: "Nhiều lựa chọn hơn, nhưng giá chưa chắc giảm.",
        tone: "neutral",
      },
    ],
    conclusion:
      "Khi thị trường thuận lợi, các khâu đều có thể hưởng lợi, nhưng phần cải thiện cho nông dân lớn hay nhỏ vẫn phụ thuộc vào liên kết và vị thế thương lượng.",
  },
];

/* ------------------------------------------------------------------ */
/* 5.3.2 - Vai trò Nhà nước: 5 nhóm chính sách */
/* ------------------------------------------------------------------ */
export const statePolicies: { title: string; body: string; emoji: string }[] = [
  {
    title: "Minh bạch thông tin thị trường",
    body: "Cung cấp thông tin giá cả, nhu cầu, tiêu chuẩn chất lượng để nông dân không bị bất lợi do thiếu thông tin.",
    emoji: "📊",
  },
  {
    title: "Hỗ trợ hợp tác xã và liên kết chuỗi",
    body: "Khuyến khích nông dân tham gia hợp tác xã, liên kết với doanh nghiệp chế biến và bán lẻ để tăng khả năng thương lượng.",
    emoji: "🤝",
  },
  {
    title: "Hỗ trợ tín dụng nông nghiệp",
    body: "Giúp nông dân tiếp cận vốn hợp lý để đầu tư giống, công nghệ, tưới tiêu, sơ chế và bảo quản.",
    emoji: "🏦",
  },
  {
    title: "Phát triển chế biến sâu và thương hiệu nông sản",
    body: "Không chỉ bán nguyên liệu thô, mà tăng giá trị thông qua chế biến, truy xuất nguồn gốc và thương hiệu cà phê Việt Nam.",
    emoji: "🌱",
  },
  {
    title: "Tiêu chuẩn, hợp đồng và bảo vệ người sản xuất",
    body: "Hoàn thiện khung pháp lý về hợp đồng bao tiêu, chất lượng, truy xuất nguồn gốc, bảo hiểm nông nghiệp và xử lý hành vi ép giá bất hợp lý.",
    emoji: "🛡️",
  },
];

/* ------------------------------------------------------------------ */
/* Chính sách thực tế tại Việt Nam */
/* ------------------------------------------------------------------ */
export const realPolicies: { code: string; topic: string; relate: string }[] = [
  {
    code: "Nghị định 98/2018/NĐ-CP",
    topic: "Chính sách khuyến khích phát triển hợp tác, liên kết trong sản xuất và tiêu thụ sản phẩm nông nghiệp.",
    relate: "Có thể giúp nông dân không bán riêng lẻ, tham gia chuỗi liên kết để tăng khả năng thương lượng.",
  },
  {
    code: "Nghị định 55/2015/NĐ-CP",
    topic: "Chính sách tín dụng phục vụ phát triển nông nghiệp, nông thôn.",
    relate: "Có thể hỗ trợ vốn cho nông dân, hợp tác xã và doanh nghiệp nông nghiệp.",
  },
  {
    code: "Quyết định 150/QĐ-TTg",
    topic: "Chiến lược phát triển nông nghiệp và nông thôn bền vững giai đoạn 2021-2030, tầm nhìn 2050.",
    relate: "Định hướng nâng cao giá trị gia tăng, phát triển bền vững, tổ chức lại sản xuất và chuỗi giá trị.",
  },
];

/* ------------------------------------------------------------------ */
/* AI Debate: lập luận mẫu theo vai */
/* ------------------------------------------------------------------ */
export const debateRoles: { id: string; name: string; emoji: string; argument: string }[] = [
  {
    id: "farmer",
    name: "Nông dân",
    emoji: "🧑‍🌾",
    argument:
      "Tôi tạo ra nguyên liệu đầu vào và chịu rủi ro sản xuất lớn, nhưng quyền thương lượng thấp. Tôi cần liên kết hợp tác xã, hợp đồng ổn định và thông tin thị trường minh bạch.",
  },
  {
    id: "trader",
    name: "Thương lái",
    emoji: "🚚",
    argument:
      "Tôi giúp gom hàng, vận chuyển và kết nối nông dân với doanh nghiệp. Tôi chịu rủi ro giá và tồn kho, nhưng vai trò trung gian của tôi cần minh bạch hơn để không gây bất lợi cho người trồng.",
  },
  {
    id: "roaster",
    name: "Nhà rang xay",
    emoji: "🏭",
    argument:
      "Tôi tạo giá trị gia tăng qua rang xay, phối trộn và kiểm soát chất lượng. Phần lợi ích của tôi đến từ công nghệ và tiêu chuẩn, nhưng nguồn nguyên liệu ổn định mới giúp tôi phát triển bền vững.",
  },
  {
    id: "retail",
    name: "Chuỗi bán lẻ",
    emoji: "☕",
    argument:
      "Tôi không chỉ bán cà phê nguyên liệu mà bán sản phẩm hoàn chỉnh gồm dịch vụ, mặt bằng, thương hiệu và trải nghiệm. Tuy nhiên, chuỗi giá trị bền vững cần quan tâm đến lợi ích của người sản xuất.",
  },
  {
    id: "consumer",
    name: "Người tiêu dùng",
    emoji: "🙋",
    argument:
      "Tôi trả tiền cho trải nghiệm và chất lượng, và tôi tạo ra nhu cầu thị trường. Nếu có thông tin minh bạch về nguồn gốc, tôi sẵn sàng ủng hộ sản phẩm chia sẻ lợi ích công bằng hơn cho nông dân.",
  },
  {
    id: "state",
    name: "Nhà nước",
    emoji: "🏛️",
    argument:
      "Tôi cần tạo khung pháp lý và chính sách để các lợi ích không triệt tiêu nhau, đặc biệt bảo vệ lợi ích chính đáng của chủ thể yếu thế.",
  },
];

/* ------------------------------------------------------------------ */
/* Quiz / Progress test */
/* ------------------------------------------------------------------ */
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explain: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Lợi ích kinh tế trong case cà phê chủ yếu là gì?",
    options: [
      "Chỉ là tiền lương của người lao động trong quán cà phê.",
      "Lợi ích vật chất mà các chủ thể nhận được khi tham gia chuỗi sản xuất, trao đổi và tiêu dùng.",
      "Chỉ là lợi nhuận của chuỗi bán lẻ.",
      "Chỉ là giá bán một ly cà phê.",
    ],
    answer: 1,
    explain: "Mỗi chủ thể có lợi ích riêng gắn với vị trí của họ trong chuỗi.",
  },
  {
    question: "Vì sao nông dân thường yếu thế trong chuỗi giá trị?",
    options: [
      "Vì nông dân không đóng góp gì cho chuỗi.",
      "Vì người tiêu dùng không thích cà phê.",
      "Vì thiếu vốn, thiếu thông tin, quy mô nhỏ và khả năng thương lượng thấp.",
      "Vì thương hiệu không quan trọng trong thị trường.",
    ],
    answer: 2,
    explain: "Đây là nguyên nhân khiến lợi ích có thể phân phối không cân xứng.",
  },
  {
    question:
      "Có nên kết luận trực tiếp từ 40.000đ/kg và 85.000đ/ly rằng bán lẻ hưởng toàn bộ phần chênh lệch không?",
    options: [
      "Có, vì 85.000đ luôn lớn hơn 40.000đ.",
      "Không, vì khác đơn vị, khác khâu và còn nhiều chi phí trung gian.",
      "Có, vì bán lẻ luôn lãi nhiều nhất.",
      "Không thể biết vì thiếu mọi dữ liệu.",
    ],
    answer: 1,
    explain: "Hai số liệu chỉ dùng để mở vấn đề, không đủ để kết luận trực tiếp.",
  },
  {
    question: "Vai trò của Nhà nước trong quan hệ lợi ích kinh tế là gì?",
    options: [
      "Thay thế hoàn toàn thị trường và ấn định mọi mức giá.",
      "Đứng ngoài, để thị trường tự điều chỉnh tuyệt đối.",
      "Chỉ thu thuế từ doanh nghiệp bán lẻ.",
      "Tạo khung pháp lý, điều tiết, hỗ trợ chủ thể yếu thế và thúc đẩy hài hòa lợi ích.",
    ],
    answer: 3,
    explain:
      "Nhà nước không thay thế thị trường mà định hướng và khắc phục mặt tiêu cực của thị trường.",
  },
  {
    question: "Giải pháp nào giúp nông dân nhận lợi ích công bằng hơn?",
    options: [
      "Bán cà phê nhân riêng lẻ với giá thấp hơn để cạnh tranh.",
      "Tham gia hợp tác xã, liên kết chuỗi, hợp đồng tiêu thụ, hỗ trợ tín dụng và chế biến sâu.",
      "Ngừng sản xuất khi giá giảm.",
      "Chờ thương lái tự nâng giá mua.",
    ],
    answer: 1,
    explain:
      "Các giải pháp này tăng năng lực thương lượng và giá trị gia tăng cho người sản xuất.",
  },
];
