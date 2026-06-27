export type CostItem = {
  id: string;
  label: string;
  emoji: string;
  /** đồng / ly, giá trị mặc định (giả lập học tập) */
  amount: number;
  color: string;
  note: string;
};

/** Tổng giá bán mô phỏng của một ly cà phê (đồng) */
export const CUP_PRICE = 85000;

/**
 * Cơ cấu chi phí GIẢ LẬP để học tập, KHÔNG phải số liệu tài chính thật
 * của bất kỳ doanh nghiệp cụ thể nào. Tổng = 85.000đ.
 */
export const costBreakdown: CostItem[] = [
  {
    id: "farmer",
    label: "Cà phê nhân của nông dân",
    emoji: "🌱",
    amount: 1500,
    color: "#2e7d32",
    note: "Phần giá trị thực sự quay về tay người trồng cà phê.",
  },
  {
    id: "roasting",
    label: "Rang xay / chế biến",
    emoji: "🔥",
    amount: 5000,
    color: "#8d5524",
    note: "Rang, phối trộn, hao hụt, kiểm soát chất lượng.",
  },
  {
    id: "ingredients",
    label: "Sữa / đường / đá / bao bì",
    emoji: "🥤",
    amount: 11000,
    color: "#c76a29",
    note: "Nguyên liệu phụ, ly, ống hút, nước...",
  },
  {
    id: "labor",
    label: "Nhân viên",
    emoji: "👩‍🍳",
    amount: 12000,
    color: "#a8842c",
    note: "Lương pha chế, phục vụ, quản lý ca.",
  },
  {
    id: "rent",
    label: "Mặt bằng",
    emoji: "🏬",
    amount: 18000,
    color: "#6d4c2f",
    note: "Tiền thuê vị trí đẹp ở trung tâm thành phố.",
  },
  {
    id: "marketing",
    label: "Marketing / thương hiệu",
    emoji: "📣",
    amount: 9000,
    color: "#c0392b",
    note: "Quảng cáo, khuyến mãi, xây dựng hình ảnh.",
  },
  {
    id: "logistics",
    label: "Quản lý / logistics / khác",
    emoji: "🧾",
    amount: 9000,
    color: "#7f8c8d",
    note: "Vận chuyển, điện nước, công nghệ, thuế, hao phí.",
  },
  {
    id: "profit",
    label: "Lợi nhuận chuỗi bán lẻ",
    emoji: "💰",
    amount: 19500,
    color: "#c9a227",
    note: "Phần còn lại sau khi trừ các chi phí trên.",
  },
];

export type Scenario = {
  id: string;
  title: string;
  desc: string;
  /** hệ số nhân vào phần giá trị quay về nông dân */
  farmerMultiplier: number;
  takeaway: string;
};

export const farmerScenarios: Scenario[] = [
  {
    id: "alone",
    title: "Bán riêng lẻ",
    desc: "Không kho, không hợp đồng dài hạn, phụ thuộc thương lái.",
    farmerMultiplier: 1,
    takeaway: "Giá bấp bênh, tỷ lệ lợi ích thấp nhất.",
  },
  {
    id: "coop",
    title: "Vào hợp tác xã",
    desc: "Gom hàng số lượng lớn, tăng sức thương lượng.",
    farmerMultiplier: 1.8,
    takeaway: "Có thể tiếp cận hợp đồng bao tiêu, tỷ lệ lợi ích tăng.",
  },
  {
    id: "certified",
    title: "Chuỗi có chứng nhận",
    desc: "Truy xuất nguồn gốc, tiêu chuẩn chất lượng.",
    farmerMultiplier: 2.5,
    takeaway: "Bán giá tốt hơn, tham gia vào giá trị thương hiệu.",
  },
  {
    id: "processing",
    title: "Tự sơ chế / rang một phần",
    desc: "Đầu tư cao hơn, rủi ro cao hơn.",
    farmerMultiplier: 3.4,
    takeaway: "Giữ lại nhiều giá trị gia tăng hơn cho vùng nguyên liệu.",
  },
];
