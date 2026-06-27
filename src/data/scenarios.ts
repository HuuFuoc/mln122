export type GameMetrics = {
  farmerIncome: number;
  chainStability: number;
  consumerPrice: number;
  harmony: number;
};

export type Choice = {
  id: string;
  label: string;
  desc: string;
  effects: GameMetrics;
};

export type Round = {
  id: string;
  season: string;
  event: string;
  detail: string;
  emoji: string;
  choices: Choice[];
};

/** Mini game "Cú sốc giá thế giới": nhập vai anh Khánh qua 3 mùa vụ */
export const rounds: Round[] = [
  {
    id: "r1",
    season: "Mùa vụ 1",
    event: "Giá cà phê thế giới giảm mạnh",
    detail:
      "Thương lái hạ giá thu mua. Anh Khánh vừa thu hoạch xong và đang cần tiền trả nợ phân bón.",
    emoji: "📉",
    choices: [
      {
        id: "sell",
        label: "Bán ngay cho thương lái",
        desc: "Có tiền nhanh, ít rủi ro tồn kho, nhưng dễ bị ép giá.",
        effects: { farmerIncome: -15, chainStability: 0, consumerPrice: 0, harmony: -10 },
      },
      {
        id: "coop",
        label: "Tham gia hợp tác xã",
        desc: "Phải tuân thủ tiêu chuẩn, mất thời gian ban đầu, nhưng bán ổn định hơn.",
        effects: { farmerIncome: 10, chainStability: 15, consumerPrice: -2, harmony: 18 },
      },
      {
        id: "store",
        label: "Vay vốn đầu tư kho, chờ giá",
        desc: "Tốn vốn nhưng có thể chờ giá tốt hơn và giảm áp lực bán tháo.",
        effects: { farmerIncome: 6, chainStability: 8, consumerPrice: 0, harmony: 8 },
      },
    ],
  },
  {
    id: "r2",
    season: "Mùa vụ 2",
    event: "Chi phí phân bón tăng, hạn hán cục bộ",
    detail:
      "Sản lượng giảm, chi phí sản xuất đội lên. Một doanh nghiệp đề nghị ký hợp đồng bao tiêu dài hạn.",
    emoji: "🌡️",
    choices: [
      {
        id: "contract",
        label: "Ký hợp đồng bao tiêu",
        desc: "Đầu ra ổn định, giảm rủi ro giá, nhưng phải đáp ứng chất lượng & sản lượng.",
        effects: { farmerIncome: 14, chainStability: 22, consumerPrice: -2, harmony: 20 },
      },
      {
        id: "wait",
        label: "Tự bán theo giá thị trường",
        desc: "Linh hoạt nếu giá lên, nhưng gánh trọn rủi ro nếu giá xuống.",
        effects: { farmerIncome: -8, chainStability: -5, consumerPrice: 0, harmony: -8 },
      },
      {
        id: "tech",
        label: "Đầu tư tưới tiết kiệm nước",
        desc: "Giảm tác động hạn hán, tăng năng suất bền vững, cần vốn ban đầu.",
        effects: { farmerIncome: 9, chainStability: 10, consumerPrice: 1, harmony: 12 },
      },
    ],
  },
  {
    id: "r3",
    season: "Mùa vụ 3",
    event: "Người tiêu dùng quan tâm nguồn gốc",
    detail:
      "Thị trường ưa chuộng cà phê có truy xuất nguồn gốc. Chuỗi bán lẻ tìm nguồn nguyên liệu minh bạch.",
    emoji: "🔖",
    choices: [
      {
        id: "trace",
        label: "Làm truy xuất nguồn gốc",
        desc: "Tốn công chuẩn hóa dữ liệu, nhưng tăng niềm tin và bán giá tốt hơn.",
        effects: { farmerIncome: 16, chainStability: 14, consumerPrice: 3, harmony: 20 },
      },
      {
        id: "brand",
        label: "Xây thương hiệu cà phê vùng cùng HTX",
        desc: "Tham gia vào giá trị thương hiệu thay vì chỉ bán nguyên liệu thô.",
        effects: { farmerIncome: 18, chainStability: 16, consumerPrice: 4, harmony: 22 },
      },
      {
        id: "raw",
        label: "Tiếp tục bán cà phê nhân như cũ",
        desc: "An toàn, quen thuộc, nhưng bỏ lỡ phần giá trị gia tăng.",
        effects: { farmerIncome: -4, chainStability: 0, consumerPrice: 0, harmony: -6 },
      },
    ],
  },
];

export const startMetrics: GameMetrics = {
  farmerIncome: 40,
  chainStability: 40,
  consumerPrice: 70,
  harmony: 35,
};
