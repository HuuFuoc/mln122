/**
 * Dữ liệu cho website "Hành trình của một ly cà phê 85.000đ".
 * Mọi câu chữ, số liệu mô phỏng và đường dẫn ảnh đều gom ở đây để dễ chỉnh.
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
/* Thứ tự các phần (dùng cho điều hướng + lời dẫn)                       */
/* ------------------------------------------------------------------ */
export type SectionMeta = {
  id: string;
  title: string;
  /** Gợi ý lời dẫn khi đứng lớp, hiển thị trong chế độ Lời dẫn */
  note: string;
};

export const sections: SectionMeta[] = [
  {
    id: "hero",
    title: "Bắt đầu từ một ly cà phê",
    note: "Mở đầu bằng một câu hỏi gần gũi: vì sao một ly cà phê có giá 85.000đ, nhưng người trồng ra hạt cà phê lại có thể nhận phần khá nhỏ?",
  },
  {
    id: "case",
    title: "Câu chuyện của anh Khánh",
    note: "Anh Khánh đại diện cho người trồng cà phê. Anh tạo ra nguyên liệu đầu vào nhưng chịu nhiều rủi ro về thời tiết, giá cả và chi phí.",
  },
  {
    id: "theory",
    title: "Vì sao mỗi bên muốn một điều khác nhau",
    note: "Ai tham gia vào chuỗi cũng mong có phần lợi ích cho mình. Những mong muốn đó nhiều khi không trùng nhau, và đó là lúc xuất hiện mâu thuẫn.",
  },
  {
    id: "value-chain",
    title: "Hành trình của hạt cà phê",
    note: "Trước khi thành một ly cà phê, hạt cà phê đi qua nhiều khâu. Mỗi khâu tạo thêm giá trị, nhưng cũng phát sinh thêm chi phí.",
  },
  {
    id: "unit-warning",
    title: "Đừng so vội 40.000đ/kg với 85.000đ/ly",
    note: "Một bên là giá theo kilogram nguyên liệu, một bên là giá của sản phẩm đã qua chế biến và phục vụ. Không thể đặt hai con số cạnh nhau rồi kết luận.",
  },
  {
    id: "simulator",
    title: "85.000đ đi đâu",
    note: "Con số này không chảy hết về một bên. Nó được chia cho nguyên liệu, chế biến, nhân công, mặt bằng, vận hành, thương hiệu và lợi nhuận.",
  },
  {
    id: "shock",
    title: "Khi giá thế giới thay đổi",
    note: "Giá cà phê không chỉ do người mua bán trong nước quyết định. Thị trường thế giới, mùa vụ và chi phí đều có thể làm lợi ích các bên thay đổi.",
  },
  {
    id: "state-role",
    title: "Khi thị trường cần người điều phối",
    note: "Nếu để các bên tự thương lượng hoàn toàn, bên yếu hơn dễ chịu thiệt. Chính sách có vai trò tạo luật chơi, hỗ trợ liên kết và giảm rủi ro.",
  },
  {
    id: "policy",
    title: "Góc nhìn từ chính sách",
    note: "Một vài chính sách có thể liên hệ khi bàn về liên kết sản xuất, tiêu thụ nông sản và phát triển nông nghiệp bền vững.",
  },
  {
    id: "ai-debate",
    title: "Thử tranh luận với AI",
    note: "Chọn một vai trong chuỗi cà phê và thử bảo vệ lợi ích của bên đó. Bạn sẽ thấy mỗi bên đều có lý do riêng.",
  },
  {
    id: "quiz",
    title: "Thử xem bạn đã hiểu đến đâu",
    note: "Một vài câu hỏi ngắn để xem người đọc đã nắm được mối quan hệ lợi ích trong chuỗi cà phê chưa.",
  },
  {
    id: "conclusion",
    title: "Điều đáng nhớ sau cùng",
    note: "Chốt lại: một ly cà phê không chỉ là giá hạt cà phê; mỗi bên đều có lợi ích riêng; hài hòa lợi ích là để các bên cùng gắn bó lâu dài.",
  },
];

/** Liên kết nhanh trên thanh điều hướng */
export const navItems: { id: string; label: string }[] = [
  { id: "case", label: "Câu chuyện" },
  { id: "value-chain", label: "Hành trình" },
  { id: "simulator", label: "85.000đ" },
  { id: "state-role", label: "Nhà nước" },
  { id: "quiz", label: "Tự kiểm tra" },
  { id: "conclusion", label: "Điều đáng nhớ" },
];

/* ------------------------------------------------------------------ */
/* Hero */
/* ------------------------------------------------------------------ */
export const heroStats: { value: string; label: string; accent: string }[] = [
  {
    value: "40.000đ/kg",
    label: "Là giá anh Khánh bán cà phê nhân cho thương lái.",
    accent: "text-leaf",
  },
  {
    value: "85.000đ/ly",
    label: "Là giá một ly cà phê bạn trả ngoài quán ở thành phố.",
    accent: "text-clay",
  },
  {
    value: "5 chặng",
    label: "Là số chặng hạt cà phê đi qua trước khi tới tay người uống.",
    accent: "text-coffee",
  },
];

/* ------------------------------------------------------------------ */
/* Vì sao mỗi bên muốn một điều khác nhau */
/* ------------------------------------------------------------------ */
export const theoryCards: { title: string; body: string; accent: string }[] = [
  {
    title: "Người trồng mong điều gì",
    body: "Anh Khánh muốn bán được giá tốt và ổn định, đủ bù chi phí và công sức cả mùa. Với anh, mỗi đồng tăng thêm trên một ký cà phê đều đáng kể.",
    accent: "border-leaf",
  },
  {
    title: "Doanh nghiệp mong điều gì",
    body: "Bên rang xay và quán cà phê muốn có lãi sau khi trừ chi phí chế biến, mặt bằng, nhân viên và xây thương hiệu. Họ nhìn vào lợi nhuận trên từng ly.",
    accent: "border-clay",
  },
  {
    title: "Người uống mong điều gì",
    body: "Người mua muốn một ly ngon, sạch, tiện và đáng đồng tiền. Khi những mong muốn này không trùng nhau, lợi ích các bên bắt đầu kéo về các hướng khác nhau.",
    accent: "border-coffee",
  },
];

/* ------------------------------------------------------------------ */
/* Hành trình của hạt cà phê: 5 chủ thể */
/* ------------------------------------------------------------------ */
export type Actor = {
  id: string;
  name: string;
  role: string;
  /** Họ làm gì */
  contribution: string;
  /** Họ cần gì */
  desire: string;
  /** Áp lực của họ */
  tension: string;
  powerLevel: 1 | 2 | 3 | 4; // 1 thấp -> 4 cao
};

export const actors: Actor[] = [
  {
    id: "farmer",
    name: "Người trồng",
    role: "Người làm ra hạt cà phê",
    contribution: "Trồng, chăm sóc, thu hoạch và phơi sơ chế.",
    desire: "Bán được giá tốt và ổn định để đủ sống.",
    tension: "Giá thu mua thấp, gánh rủi ro thời tiết nhưng ít tiếng nói khi thương lượng.",
    powerLevel: 1,
  },
  {
    id: "trader",
    name: "Thương lái",
    role: "Người gom hàng và vận chuyển",
    contribution: "Thu mua từ nhiều nhà vườn, gom hàng rồi chở đi.",
    desire: "Hưởng phần chênh lệch giữa giá mua và giá bán lại.",
    tension: "Mua được càng rẻ thì lời càng nhiều, nên dễ tạo sức ép lên người trồng.",
    powerLevel: 2,
  },
  {
    id: "roaster",
    name: "Bên rang xay",
    role: "Người chế biến hạt cà phê",
    contribution: "Rang, phối trộn, kiểm tra chất lượng rồi đóng gói.",
    desire: "Có nguyên liệu ổn định, giá hợp lý để tạo ra sản phẩm tốt.",
    tension: "Cần đầu tư máy móc và giữ chuẩn chất lượng, nên chi phí không nhỏ.",
    powerLevel: 3,
  },
  {
    id: "retail",
    name: "Quán cà phê",
    role: "Nơi bán ly cà phê cho khách",
    contribution: "Pha chế, phục vụ, lo mặt bằng, thương hiệu và trải nghiệm.",
    desire: "Có lãi tốt trên mỗi ly sau khi trừ chi phí vận hành.",
    tension: "Nắm thương hiệu và khách hàng nên thường giữ phần lợi ích lớn.",
    powerLevel: 4,
  },
  {
    id: "consumer",
    name: "Người uống",
    role: "Người trả tiền cuối cùng",
    contribution: "Bỏ tiền mua và tạo ra nhu cầu cho cả chuỗi.",
    desire: "Một ly ngon, hợp túi tiền và đáng với trải nghiệm nhận được.",
    tension: "Thường không biết phần mình trả được chia về đâu trong chuỗi.",
    powerLevel: 2,
  },
];

export const valueChainConclusion =
  "Càng về cuối chuỗi, phần giá trị giữ lại thường càng lớn, nhất là ở khâu nắm thương hiệu, chế biến và bán hàng trực tiếp cho khách. Điều đó không có nghĩa các khâu này không đóng góp, mà cho thấy ai nắm thương hiệu, vốn và khách hàng thì thường có tiếng nói mạnh hơn. Người trồng làm ra nguyên liệu đầu tiên nhưng lại hay yếu nhất về vốn, thông tin và khả năng thương lượng.";

/* ------------------------------------------------------------------ */
/* Đừng so vội kg với ly: bảng so sánh hai đơn vị */
/* ------------------------------------------------------------------ */
export const comparisonRows: { dimension: string; raw: string; cup: string }[] = [
  { dimension: "Đơn vị", raw: "1 kg cà phê nhân", cup: "1 ly cà phê pha sẵn" },
  { dimension: "Hình thái", raw: "Nguyên liệu thô", cup: "Sản phẩm hoàn chỉnh" },
  { dimension: "Chế biến", raw: "Chưa rang xay", cup: "Đã rang, pha, phối trộn" },
  { dimension: "Phục vụ", raw: "Hầu như không có", cup: "Pha chế và phục vụ tại chỗ" },
  { dimension: "Vận hành", raw: "Không tính vào giá", cup: "Mặt bằng, điện nước, nhân viên" },
  { dimension: "Trải nghiệm", raw: "Không có", cup: "Không gian, thương hiệu" },
];

/* ------------------------------------------------------------------ */
/* 85.000đ đi đâu (số liệu mô phỏng) */
/* ------------------------------------------------------------------ */
export const CUP_PRICE = 85000;

export type SimPart = { id: string; label: string; percent: number; color: string };

export const simulatorParts: SimPart[] = [
  { id: "raw", label: "Nguyên liệu cà phê", percent: 7, color: "#3e6b3c" },
  { id: "logistics", label: "Thu mua và vận chuyển", percent: 8, color: "#6b8e5a" },
  { id: "roasting", label: "Rang xay và chế biến", percent: 12, color: "#7a4a28" },
  { id: "ops", label: "Ly, sữa, đá, vận hành", percent: 18, color: "#a86a3d" },
  { id: "staff", label: "Nhân viên và mặt bằng", percent: 25, color: "#c98a4b" },
  { id: "brand", label: "Thương hiệu và quảng bá", percent: 15, color: "#d97706" },
  { id: "profit", label: "Lợi nhuận và dự phòng", percent: 15, color: "#5c7c89" },
];

export const simulatorQuestions = [
  "Nếu muốn người trồng nhận nhiều hơn, phần nào trong chuỗi sẽ phải nhường lại?",
  "Và ai là người đủ sức quyết định sự thay đổi đó?",
];

/* ------------------------------------------------------------------ */
/* Khi giá thế giới thay đổi */
/* ------------------------------------------------------------------ */
export type ShockScenario = {
  id: string;
  label: string;
  impacts: { actor: string; text: string; tone: "down" | "up" | "neutral" }[];
  conclusion: string;
};

export const shockScenarios: ShockScenario[] = [
  {
    id: "price-drop",
    label: "Giá thế giới giảm 20%",
    impacts: [
      {
        actor: "Người trồng",
        text: "Dễ hụt thu nhập nếu không có hợp đồng hay liên kết tiêu thụ để giữ giá.",
        tone: "down",
      },
      {
        actor: "Thương lái",
        text: "Có thể ép giá mua xuống, hoặc gom hàng ngắn hạn để giảm rủi ro cho mình.",
        tone: "neutral",
      },
      {
        actor: "Bên rang xay",
        text: "Có thể được lợi nếu mua được nguyên liệu rẻ hơn trước.",
        tone: "up",
      },
      {
        actor: "Quán cà phê",
        text: "Giá ly cà phê thường không giảm theo, vì còn thương hiệu và chi phí vận hành.",
        tone: "neutral",
      },
      {
        actor: "Người uống",
        text: "Chưa chắc được mua rẻ hơn ngay, dù giá nguyên liệu đã giảm.",
        tone: "neutral",
      },
    ],
    conclusion:
      "Một biến động giá không chạm tới mọi người như nhau. Bên ít vốn, ít thông tin và không có hợp đồng thường là người gánh nặng trước.",
  },
  {
    id: "fertilizer-up",
    label: "Giá phân bón tăng",
    impacts: [
      {
        actor: "Người trồng",
        text: "Chi phí trồng tăng, phần lời mỏng đi; nếu giá bán không tăng theo thì thu nhập giảm.",
        tone: "down",
      },
      {
        actor: "Thương lái",
        text: "Ít ảnh hưởng trực tiếp, nhưng hàng có thể ít đi nếu nhà vườn thu hẹp sản xuất.",
        tone: "neutral",
      },
      {
        actor: "Bên rang xay",
        text: "Giá nguyên liệu nhích lên một chút, chịu một phần áp lực chi phí.",
        tone: "neutral",
      },
      {
        actor: "Quán cà phê",
        text: "Ít bị ảnh hưởng nhất, và có thể chuyển một phần chi phí sang giá bán.",
        tone: "up",
      },
      {
        actor: "Người uống",
        text: "Có thể trả thêm một chút nếu chi phí được đẩy dần về phía cuối chuỗi.",
        tone: "down",
      },
    ],
    conclusion:
      "Khi chi phí đầu vào tăng, người trực tiếp làm ra hạt cà phê thường thấm đòn trước. Khâu cuối có thương hiệu thì dễ xoay xở hơn.",
  },
  {
    id: "demand-up",
    label: "Người thành phố uống nhiều hơn",
    impacts: [
      {
        actor: "Người trồng",
        text: "Hàng được mua nhiều hơn nên giá có thể khá hơn, nhưng còn tùy có liên kết hay không.",
        tone: "up",
      },
      {
        actor: "Thương lái",
        text: "Có thêm cơ hội gom và bán nhiều hơn.",
        tone: "up",
      },
      {
        actor: "Bên rang xay",
        text: "Chạy nhiều hàng hơn, được lợi nhờ quy mô.",
        tone: "up",
      },
      {
        actor: "Quán cà phê",
        text: "Được lợi rõ nhất nhờ bán được nhiều ly hơn.",
        tone: "up",
      },
      {
        actor: "Người uống",
        text: "Có nhiều lựa chọn hơn, dù giá chưa chắc rẻ đi.",
        tone: "neutral",
      },
    ],
    conclusion:
      "Lúc thị trường thuận lợi, gần như ai cũng có phần. Nhưng người trồng được lợi nhiều hay ít vẫn tùy vào việc họ có đứng chung trong một liên kết hay không.",
  },
];

/* ------------------------------------------------------------------ */
/* Khi thị trường cần người điều phối: 4 việc Nhà nước có thể làm */
/* ------------------------------------------------------------------ */
export const statePolicies: { title: string; body: string }[] = [
  {
    title: "Tạo luật chơi rõ ràng",
    body: "Đặt ra quy định về hợp đồng, chất lượng và nguồn gốc, để các bên biết rõ quyền lợi và trách nhiệm của mình.",
  },
  {
    title: "Hỗ trợ người trồng liên kết",
    body: "Khuyến khích hợp tác xã và liên kết với doanh nghiệp, cùng nguồn vốn vay hợp lý, để người trồng không phải đứng một mình khi thương lượng.",
  },
  {
    title: "Giảm rủi ro thị trường",
    body: "Cung cấp thông tin giá cả, hỗ trợ chế biến và bảo quản, để một cú biến động giá không đẩy hết thiệt hại về phía người trồng.",
  },
  {
    title: "Bảo vệ bên yếu thế",
    body: "Theo dõi và xử lý việc ép giá bất hợp lý, để bên có ít tiếng nói trong chuỗi vẫn được đối xử công bằng.",
  },
];

/* ------------------------------------------------------------------ */
/* Góc nhìn từ chính sách */
/* ------------------------------------------------------------------ */
export const realPolicies: { code: string; idea: string; relate: string }[] = [
  {
    code: "Nghị định 98/2018/NĐ-CP",
    idea: "Khuyến khích người trồng, hợp tác xã và doanh nghiệp liên kết với nhau trong sản xuất và tiêu thụ.",
    relate: "Giúp người trồng không phải bán lẻ một mình, mà tham gia vào một chuỗi có hợp đồng rõ ràng hơn.",
  },
  {
    code: "Nghị định 55/2015/NĐ-CP",
    idea: "Mở đường cho người trồng và hợp tác xã tiếp cận nguồn vốn vay phục vụ sản xuất.",
    relate: "Có vốn, người trồng mới dễ đầu tư vào chất lượng và không phải bán vội mỗi khi cần tiền.",
  },
  {
    code: "Quyết định 150/QĐ-TTg",
    idea: "Định hướng phát triển nông nghiệp bền vững, nâng cao giá trị và tổ chức lại sản xuất.",
    relate: "Hướng tới việc giữ lại nhiều giá trị hơn ở vùng trồng, thay vì dồn hết về khâu cuối.",
  },
];

/* ------------------------------------------------------------------ */
/* Thử tranh luận với AI: lời mỗi vai */
/* ------------------------------------------------------------------ */
export const debateRoles: {
  id: string;
  name: string;
  self: string;
  argument: string;
}[] = [
  {
    id: "farmer",
    name: "Người trồng",
    self: "Tôi là người trồng",
    argument:
      "Tôi làm ra hạt cà phê và gánh phần lớn rủi ro mùa vụ, nhưng tiếng nói lại nhỏ nhất. Tôi mong có liên kết, hợp đồng ổn định và biết được giá thị trường thật sự.",
  },
  {
    id: "trader",
    name: "Thương lái",
    self: "Tôi là thương lái",
    argument:
      "Tôi gom hàng từ nhiều nhà vườn và lo khâu vận chuyển, cũng chịu rủi ro giá và tồn kho. Nhưng tôi đồng ý là khâu trung gian nên minh bạch hơn để người trồng không thiệt.",
  },
  {
    id: "roaster",
    name: "Bên rang xay",
    self: "Tôi là bên rang xay",
    argument:
      "Tôi biến hạt thô thành sản phẩm có chất lượng, và phải đầu tư máy móc, công nghệ. Nhưng tôi chỉ phát triển bền được khi nguồn nguyên liệu ổn định và người trồng còn gắn bó.",
  },
  {
    id: "retail",
    name: "Quán cà phê",
    self: "Tôi là quán cà phê",
    argument:
      "Tôi không chỉ bán cà phê, mà bán cả không gian, dịch vụ và thương hiệu. Dù vậy, một chuỗi bền vững thì vẫn cần quan tâm tới phần của người làm ra hạt cà phê.",
  },
  {
    id: "consumer",
    name: "Người uống",
    self: "Tôi là người uống",
    argument:
      "Tôi trả tiền cho chất lượng và trải nghiệm, và chính tôi tạo ra nhu cầu. Nếu biết rõ nguồn gốc, tôi sẵn lòng ủng hộ nơi chia sẻ công bằng hơn cho người trồng.",
  },
  {
    id: "state",
    name: "Nhà quản lý",
    self: "Tôi là nhà quản lý",
    argument:
      "Tôi không thay thị trường quyết định, nhưng tôi đặt ra luật chơi để các bên không triệt tiêu nhau, và để bên yếu thế được bảo vệ.",
  },
];

/* ------------------------------------------------------------------ */
/* Thử xem bạn đã hiểu đến đâu */
/* ------------------------------------------------------------------ */
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explain: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Trong câu chuyện cà phê, lợi ích kinh tế của mỗi bên chủ yếu là gì?",
    options: [
      "Chỉ là tiền lương của nhân viên trong quán.",
      "Là phần lợi ích mà mỗi bên nhận được khi tham gia trồng, chế biến, mua bán và tiêu dùng.",
      "Chỉ là lợi nhuận của quán cà phê.",
      "Chỉ là giá bán của một ly cà phê.",
    ],
    answer: 1,
    explain: "Mỗi bên có một phần lợi ích riêng, gắn với vị trí của họ trong chuỗi.",
  },
  {
    question: "Vì sao người trồng thường ở thế yếu hơn trong chuỗi?",
    options: [
      "Vì người trồng không đóng góp gì.",
      "Vì người uống không thích cà phê.",
      "Vì ít vốn, ít thông tin, quy mô nhỏ và khó thương lượng.",
      "Vì thương hiệu không quan trọng.",
    ],
    answer: 2,
    explain: "Chính những điểm yếu này khiến phần lợi ích dễ nghiêng về các khâu sau.",
  },
  {
    question: "Có thể nhìn vào 40.000đ/kg và 85.000đ/ly rồi kết luận quán hưởng hết phần chênh không?",
    options: [
      "Có, vì 85.000đ lớn hơn 40.000đ.",
      "Không, vì hai con số khác đơn vị, khác khâu và còn nhiều chi phí ở giữa.",
      "Có, vì quán luôn lãi nhiều nhất.",
      "Không thể biết vì thiếu mọi dữ liệu.",
    ],
    answer: 1,
    explain: "Hai con số chỉ giúp mở ra câu hỏi, chưa đủ để kết luận ai hưởng bao nhiêu.",
  },
  {
    question: "Nhà nước nên đóng vai trò gì trong mối quan hệ lợi ích này?",
    options: [
      "Thay thị trường ấn định mọi mức giá.",
      "Đứng hẳn ra ngoài, để thị trường tự lo tất cả.",
      "Chỉ lo thu thuế từ quán cà phê.",
      "Tạo luật chơi, hỗ trợ liên kết, giảm rủi ro và bảo vệ bên yếu thế.",
    ],
    answer: 3,
    explain: "Nhà nước không làm thay thị trường, mà giúp các bên cùng có chỗ đứng công bằng hơn.",
  },
  {
    question: "Cách nào giúp người trồng nhận được phần công bằng hơn?",
    options: [
      "Bán lẻ một mình với giá thấp hơn để cạnh tranh.",
      "Tham gia hợp tác xã, liên kết theo hợp đồng, được hỗ trợ vốn và làm chế biến sâu hơn.",
      "Ngừng trồng mỗi khi giá giảm.",
      "Chờ thương lái tự nâng giá lên.",
    ],
    answer: 1,
    explain: "Những cách này giúp người trồng có thêm tiếng nói và giữ lại nhiều giá trị hơn.",
  },
];

/* ------------------------------------------------------------------ */
/* Điều đáng nhớ sau cùng */
/* ------------------------------------------------------------------ */
export const conclusionTakeaways: { title: string; body: string }[] = [
  {
    title: "Không chỉ là giá hạt cà phê",
    body: "Một ly cà phê còn mang theo công chế biến, phục vụ, mặt bằng và thương hiệu, chứ không chỉ là giá nguyên liệu.",
  },
  {
    title: "Mỗi bên một phần riêng",
    body: "Trên hành trình đó, mỗi bên đều có chi phí, rủi ro và lợi ích của mình, nên khó nhìn đúng nếu chỉ đứng từ một phía.",
  },
  {
    title: "Hài hòa, không phải chia đều",
    body: "Hài hòa lợi ích là tạo điều kiện để các bên cùng có động lực gắn bó lâu dài, chứ không phải chia đều một cách máy móc.",
  },
];
