import Section from "./Section";
import Reveal from "./Reveal";

const sources = [
  {
    name: "Nghị định 98/2018/NĐ-CP",
    desc: "Khuyến khích phát triển hợp tác, liên kết trong sản xuất và tiêu thụ sản phẩm nông nghiệp.",
    url: "https://vanban.chinhphu.vn/default.aspx?docid=194092&pageid=27160",
  },
  {
    name: "Quyết định 150/QĐ-TTg (28/01/2022)",
    desc: "Chiến lược phát triển nông nghiệp và nông thôn bền vững giai đoạn 2021-2030, tầm nhìn 2050.",
    url: "https://vanban.chinhphu.vn/?docid=205277&pageid=27160",
  },
  {
    name: "Nghị định 55/2015/NĐ-CP",
    desc: "Chính sách tín dụng phục vụ phát triển nông nghiệp, nông thôn (đã có sửa đổi, cần kiểm tra hiệu lực).",
    url: "https://vbpl.vn/nganhangnhanuoc/Pages/vbpq-van-ban-goc.aspx?ItemID=67618",
  },
];

export default function ConclusionSection() {
  return (
    <Section id="conclusion" tone="coffee" title="Ai hưởng lợi, và Nhà nước làm gì?">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-card border border-cream/15 bg-cream/5 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-earth-soft">
              Câu 1. Ai hưởng lợi nhiều nhất?
            </p>
            <p className="mt-3 leading-relaxed text-cream/85">
              Khâu <strong className="text-cream">bán lẻ</strong> và các khâu kiểm soát{" "}
              <strong className="text-cream">thương hiệu, chế biến, phân phối</strong> thường giữ
              lại nhiều giá trị gia tăng hơn. Điều này có phần hợp lý vì họ tạo thêm giá trị dịch
              vụ. Nhưng nông dân tạo ra nguyên liệu ban đầu, chịu rủi ro lớn nhất mà nhận phần
              thấp, nên sự phân chia{" "}
              <strong className="text-cream">chưa thật sự công bằng</strong> khi nông dân thiếu
              quyền thương lượng.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-card border border-cream/15 bg-cream/5 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-earth-soft">
              Câu 2. Nhà nước can thiệp thế nào?
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-cream/85">
              <li>① Hỗ trợ hợp tác xã để nông dân tăng sức thương lượng.</li>
              <li>② Phát triển hợp đồng liên kết sản xuất và tiêu thụ.</li>
              <li>③ Tín dụng nông nghiệp để không phải bán gấp.</li>
              <li>④ Đầu tư kho bãi, sơ chế, chế biến sâu.</li>
              <li>⑤ Minh bạch thông tin giá; truy xuất nguồn gốc, thương hiệu vùng.</li>
              <li>⑥ Khuyến khích doanh nghiệp chia sẻ lợi ích; hoàn thiện pháp luật chống ép giá.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <blockquote className="mt-8 rounded-card border-l-4 border-earth bg-earth/10 p-6 text-xl font-medium leading-relaxed text-cream sm:p-8">
          “Một ly cà phê 85.000đ phản ánh cả chuỗi sản xuất, chế biến, phân phối và thương hiệu.
          Nhà nước cần điều tiết để các quan hệ lợi ích phát triển hài hòa, công bằng và bền vững
          hơn.”
        </blockquote>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-earth-soft">
            Nguồn chính sách tham khảo
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {sources.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-card border border-cream/15 bg-cream/5 p-4 transition hover:border-earth-soft hover:bg-cream/10"
              >
                <p className="text-sm font-bold text-cream">{s.name} ↗</p>
                <p className="mt-1 text-xs leading-relaxed text-cream/65">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="mt-10 text-center text-xs text-cream/40">
        Sản phẩm học tập môn Kinh tế chính trị Mác - Lênin. Số liệu trong simulator là giả lập.
        Dùng phím mũi tên trái phải để trình chiếu.
      </p>
    </Section>
  );
}
