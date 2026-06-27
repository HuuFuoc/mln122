export type SectionMeta = {
  id: string;
  label: string;
  short: string;
};

/** Thứ tự section dùng cho điều hướng & chế độ thuyết trình */
export const sections: SectionMeta[] = [
  { id: "hero", label: "Mở đầu", short: "01" },
  { id: "story", label: "Tình huống anh Khánh", short: "02" },
  { id: "chain", label: "Chuỗi lợi ích", short: "03" },
  { id: "simulator", label: "85.000đ đi đâu?", short: "04" },
  { id: "shock", label: "Cú sốc giá", short: "05" },
  { id: "policy", label: "Policy Lab", short: "06" },
  { id: "quiz", label: "Progress Test", short: "07" },
  { id: "conclusion", label: "Kết luận", short: "08" },
];
