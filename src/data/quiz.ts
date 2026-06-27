export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  /** index của đáp án đúng */
  answer: number;
  explain: string;
};

export const quiz: QuizQuestion[] = [
  {
    id: "q1",
    question: "Lợi ích kinh tế là gì?",
    options: [
      "Chỉ là lợi nhuận của doanh nghiệp",
      "Lợi ích vật chất mà chủ thể đạt được trong hoạt động kinh tế",
      "Chỉ là tiền lương của người lao động",
      "Chỉ là giá bán sản phẩm",
    ],
    answer: 1,
    explain:
      "Lợi ích kinh tế là lợi ích vật chất mà các chủ thể mong muốn đạt được khi tham gia hoạt động kinh tế.",
  },
  {
    id: "q2",
    question: "Trong chuỗi cà phê, vì sao nông dân thường có vị thế yếu?",
    options: [
      "Vì nông dân không đóng góp gì",
      "Vì sản xuất nhỏ lẻ, thiếu thông tin, khó dự trữ và phụ thuộc đầu ra",
      "Vì người tiêu dùng không uống cà phê",
      "Vì thương hiệu không quan trọng",
    ],
    answer: 1,
    explain:
      "Nông dân tạo ra nguyên liệu nền tảng nhưng sản xuất nhỏ lẻ, ít thông tin, khó dự trữ nên quyền thương lượng thấp.",
  },
  {
    id: "q3",
    question: "Nhà nước can thiệp để hài hòa lợi ích bằng cách nào?",
    options: [
      "Xóa bỏ toàn bộ thị trường",
      "Để thị trường tự vận hành hoàn toàn, không cần chính sách",
      "Ban hành pháp luật, hỗ trợ liên kết, tín dụng, thông tin, tiêu chuẩn và bảo vệ nhóm yếu thế",
      "Chỉ hỗ trợ doanh nghiệp lớn",
    ],
    answer: 2,
    explain:
      "Nhà nước không làm thay thị trường mà điều tiết bằng pháp luật, chính sách hỗ trợ để quan hệ lợi ích hài hòa hơn.",
  },
  {
    id: "q4",
    question: "Mâu thuẫn lợi ích trong chuỗi cà phê thể hiện rõ nhất ở đâu?",
    options: [
      "Các bên không cần nhau",
      "Nông dân muốn giá cao, bên mua muốn giá thấp, bán lẻ muốn tối ưu lợi nhuận, người tiêu dùng muốn giá hợp lý",
      "Người tiêu dùng không có lợi ích",
      "Nhà nước không có vai trò nào",
    ],
    answer: 1,
    explain:
      "Các chủ thể vừa thống nhất (cần nhau) vừa mâu thuẫn ở khâu phân chia giá trị cuối cùng.",
  },
  {
    id: "q5",
    question: "Vì sao hợp tác xã quan trọng với nông dân?",
    options: [
      "Vì giúp nông dân bán lẻ từng kg dễ hơn",
      "Vì gom sản lượng, chuẩn hóa chất lượng, ký hợp đồng lớn và tăng sức thương lượng",
      "Vì thay thế hoàn toàn vai trò Nhà nước",
      "Vì giúp loại bỏ người tiêu dùng khỏi chuỗi",
    ],
    answer: 1,
    explain:
      "Hợp tác xã nâng vị thế nông dân: gom hàng, chuẩn hóa chất lượng, tiếp cận hợp đồng và hỗ trợ, giúp quan hệ lợi ích cân bằng hơn.",
  },
];
