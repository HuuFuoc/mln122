import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hài hòa lợi ích trong chuỗi giá trị cà phê Việt Nam",
  description:
    "Website thuyết trình môn Kinh tế chính trị Mác - Lênin: phân tích quan hệ lợi ích kinh tế trong chuỗi giá trị cà phê và vai trò của Nhà nước trong hài hòa lợi ích.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
