export type PolicyEffects = {
  farmerIncome: number;
  chainStability: number;
  consumerPrice: number;
  harmony: number;
};

export type Policy = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  effects: PolicyEffects;
  realPolicy: string;
};

export const policies: Policy[] = [
  {
    id: "cooperative",
    title: "Phát triển hợp tác xã",
    emoji: "🤝",
    description:
      "Tập hợp nông dân để tăng sức thương lượng và ký hợp đồng với doanh nghiệp.",
    effects: { farmerIncome: 15, chainStability: 20, consumerPrice: 3, harmony: 25 },
    realPolicy:
      "Liên hệ chủ trương phát triển kinh tế tập thể, hợp tác xã và liên kết sản xuất, tiêu thụ nông sản.",
  },
  {
    id: "contract",
    title: "Hợp đồng liên kết",
    emoji: "📜",
    description:
      "Tạo khung pháp lý cho hợp đồng giữa nông dân, hợp tác xã và doanh nghiệp.",
    effects: { farmerIncome: 10, chainStability: 30, consumerPrice: 2, harmony: 20 },
    realPolicy:
      "Nghị định 98/2018/NĐ-CP về hợp tác, liên kết trong sản xuất và tiêu thụ sản phẩm nông nghiệp.",
  },
  {
    id: "credit",
    title: "Tín dụng nông nghiệp",
    emoji: "🏦",
    description:
      "Hỗ trợ vốn để nông dân đầu tư sản xuất, kho bãi, sơ chế và không phải bán gấp.",
    effects: { farmerIncome: 12, chainStability: 10, consumerPrice: 1, harmony: 15 },
    realPolicy:
      "Nghị định 55/2015/NĐ-CP và các văn bản sửa đổi về tín dụng phục vụ phát triển nông nghiệp, nông thôn.",
  },
  {
    id: "processing",
    title: "Hỗ trợ chế biến & bảo quản",
    emoji: "📦",
    description:
      "Hỗ trợ kho bãi, máy móc, sơ chế, bảo quản để vùng sản xuất giữ lại nhiều giá trị hơn.",
    effects: { farmerIncome: 14, chainStability: 12, consumerPrice: 2, harmony: 18 },
    realPolicy:
      "Nghị định 98/2018/NĐ-CP có nội dung hỗ trợ hạ tầng phục vụ liên kết: kho tàng, sơ chế, bảo quản, chế biến.",
  },
  {
    id: "information",
    title: "Minh bạch thông tin giá",
    emoji: "📊",
    description:
      "Xây dựng hệ thống thông tin giá thị trường minh bạch để giảm bất cân xứng thông tin.",
    effects: { farmerIncome: 8, chainStability: 14, consumerPrice: 0, harmony: 16 },
    realPolicy:
      "Khi thông tin không cân xứng, lợi ích nghiêng về bên có nhiều thông tin hơn; Nhà nước can thiệp bằng thông tin thị trường.",
  },
  {
    id: "traceability",
    title: "Tiêu chuẩn & truy xuất nguồn gốc",
    emoji: "🔖",
    description:
      "Hỗ trợ tiêu chuẩn, chứng nhận, mã vùng trồng, truy xuất nguồn gốc.",
    effects: { farmerIncome: 11, chainStability: 10, consumerPrice: 4, harmony: 17 },
    realPolicy:
      "Giúp nông dân tham gia vào thương hiệu vùng thay vì chỉ bán nguyên liệu thô.",
  },
  {
    id: "insurance",
    title: "Bảo hiểm nông nghiệp",
    emoji: "🛡️",
    description:
      "Cơ chế bảo hiểm / quỹ hỗ trợ khi thiên tai, dịch bệnh, biến động giá quá mạnh.",
    effects: { farmerIncome: 9, chainStability: 22, consumerPrice: 2, harmony: 19 },
    realPolicy:
      "Nếu một chủ thể chịu rủi ro quá lớn nhưng nhận lợi ích thấp, quan hệ lợi ích dễ mất cân bằng.",
  },
  {
    id: "sharing",
    title: "Chia sẻ lợi ích với vùng nguyên liệu",
    emoji: "♻️",
    description:
      "Khuyến khích doanh nghiệp ký hợp đồng dài hạn, trả thưởng chất lượng, đầu tư lại cho vùng trồng.",
    effects: { farmerIncome: 16, chainStability: 18, consumerPrice: 5, harmony: 24 },
    realPolicy:
      "Doanh nghiệp có nguyên liệu ổn định, nông dân thu nhập tốt hơn, quan hệ lợi ích hài hòa hơn.",
  },
];

/** Chỉ số nền khi chưa áp dụng chính sách nào (0-100) */
export const baseline: PolicyEffects = {
  farmerIncome: 25,
  chainStability: 35,
  consumerPrice: 100, // điểm cao = giá hợp lý cho người tiêu dùng (giảm khi giá tăng)
  harmony: 20,
};
