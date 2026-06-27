export type Actor = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  contribution: string[];
  risks: string[];
  benefit: string;
  bargainingPower: "Thấp" | "Trung bình" | "Trung bình tới cao" | "Cao";
  /** 0-100, dùng cho thanh thể hiện mức hưởng lợi tương đối trong chuỗi */
  benefitShare: number;
  theory: string;
};

export const actors: Actor[] = [
  {
    id: "farmer",
    name: "Nông dân",
    emoji: "🧑‍🌾",
    tagline: "Người tạo ra nguyên liệu nền tảng",
    contribution: [
      "Trồng và chăm sóc cây cà phê",
      "Tạo ra nguyên liệu đầu tiên của toàn chuỗi",
      "Chịu trách nhiệm trực tiếp về chất lượng đầu vào",
    ],
    risks: [
      "Thời tiết, sâu bệnh, mất mùa",
      "Biến động giá phân bón, nhân công",
      "Giá cà phê thế giới lên xuống",
      "Thiếu kho dự trữ nên thường bán ngay sau thu hoạch",
      "Khó tiếp cận thông tin giá và hợp đồng dài hạn",
    ],
    benefit: "Tiền bán cà phê nhân (~40.000đ/kg). Nếu giá thấp hơn chi phí thì lỗ.",
    bargainingPower: "Thấp",
    benefitShare: 12,
    theory:
      "Nông dân có lợi ích kinh tế chính đáng, nhưng quan hệ lợi ích trong thị trường không tự động bảo đảm họ nhận phần công bằng nếu vị thế thương lượng yếu.",
  },
  {
    id: "trader",
    name: "Thương lái",
    emoji: "🚚",
    tagline: "Trung gian thu gom",
    contribution: [
      "Thu gom cà phê từ nhiều hộ",
      "Cung cấp đầu ra nhanh cho nông dân",
      "Chịu một phần chi phí vận chuyển, phân loại, lưu kho",
      "Kết nối vùng sản xuất với doanh nghiệp chế biến",
    ],
    risks: [
      "Giá thay đổi trong thời gian thu gom",
      "Chất lượng không đồng đều",
      "Chi phí vận chuyển, kho bãi",
    ],
    benefit: "Chênh lệch giữa giá mua và giá bán lại; lợi nhuận từ tốc độ quay vòng hàng.",
    bargainingPower: "Trung bình tới cao",
    benefitShare: 18,
    theory:
      "Thương lái là trung gian cần thiết, nhưng nếu thiếu minh bạch thì quan hệ lợi ích có thể nghiêng bất lợi cho nông dân.",
  },
  {
    id: "roaster",
    name: "Nhà rang xay",
    emoji: "🏭",
    tagline: "Khâu tạo giá trị gia tăng",
    contribution: [
      "Rang, phối trộn, kiểm soát hương vị",
      "Đóng gói, xây dựng tiêu chuẩn chất lượng",
      "Biến cà phê nhân thành sản phẩm giá trị cao hơn",
    ],
    risks: [
      "Đầu tư máy móc, công nghệ",
      "Nhân sự kỹ thuật",
      "Hao hụt trong quá trình rang",
      "Rủi ro tồn kho",
    ],
    benefit: "Giá trị gia tăng từ chế biến; lợi nhuận cao hơn bán nguyên liệu thô.",
    bargainingPower: "Trung bình tới cao",
    benefitShare: 22,
    theory:
      "Chế biến sâu làm tăng giá trị hàng hóa. Vấn đề là nông dân có được tham gia vào phần giá trị tăng thêm này hay không.",
  },
  {
    id: "retail",
    name: "Chuỗi bán lẻ",
    emoji: "☕",
    tagline: "Khâu gần người tiêu dùng nhất",
    contribution: [
      "Pha chế, tạo không gian tiêu dùng",
      "Dịch vụ khách hàng, thương hiệu, marketing",
      "Vị trí mặt bằng, ứng dụng đặt hàng",
      "Quản trị chuỗi cung ứng",
    ],
    risks: [
      "Thuê mặt bằng, lương nhân viên",
      "Marketing, điện nước, bao bì",
      "Cạnh tranh và biến động nhu cầu",
    ],
    benefit: "Doanh thu từ giá bán cuối (~85.000đ/ly); lợi nhuận từ thương hiệu & quy mô.",
    bargainingPower: "Cao",
    benefitShare: 30,
    theory:
      "Giá trị không chỉ đến từ nguyên liệu mà còn từ dịch vụ, thương hiệu và phân phối. Nhưng nếu lợi ích quá lệch về khâu cuối, mâu thuẫn lợi ích trong chuỗi sẽ tăng.",
  },
  {
    id: "consumer",
    name: "Người tiêu dùng",
    emoji: "🙋",
    tagline: "Người trả tiền cuối cùng",
    contribution: [
      "Trả tiền cho sản phẩm cuối cùng",
      "Quyết định sản phẩm nào tồn tại trên thị trường",
      "Tạo áp lực về chất lượng, an toàn, trải nghiệm",
    ],
    risks: [
      "Có thể trả giá cao mà không biết nông dân nhận bao nhiêu",
      "Thiếu thông tin về nguồn gốc và phân phối lợi ích",
    ],
    benefit: "Sản phẩm tiện lợi, hương vị ổn định, không gian, dịch vụ, niềm tin thương hiệu.",
    bargainingPower: "Trung bình",
    benefitShare: 18,
    theory:
      "Người tiêu dùng cũng là một chủ thể lợi ích. Nếu họ quan tâm tới truy xuất nguồn gốc và công bằng chuỗi giá trị, họ tạo áp lực tích cực lên doanh nghiệp.",
  },
];
