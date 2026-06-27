import Section from "./Section";
import Reveal from "./Reveal";

const milestones = [
  {
    step: "Mốc 1",
    emoji: "🌱",
    title: "Sản xuất",
    body: "Anh Khánh trồng cà phê ở Đắk Lắk: chi phí giống, phân bón, nước tưới, nhân công, chăm sóc, thu hoạch, phơi sơ chế, cộng rủi ro thời tiết và sâu bệnh.",
  },
  {
    step: "Mốc 2",
    emoji: "🤝",
    title: "Bán cho thương lái",
    body: "Anh bán cà phê nhân với giá 40.000đ/kg. Cần tiền trả nợ vật tư nên thường phải bán ngay sau thu hoạch.",
  },
  {
    step: "Mốc 3",
    emoji: "🏭",
    title: "Vào chuỗi chế biến",
    body: "Cà phê được thu gom, vận chuyển, rang xay, phối trộn, đóng gói hoặc đưa vào hệ thống pha chế.",
  },
  {
    step: "Mốc 4",
    emoji: "☕",
    title: "Bán tại TP.HCM",
    body: "Một ly cà phê trong chuỗi bán lẻ được bán 85.000đ/ly, kèm theo dịch vụ, không gian và thương hiệu.",
  },
  {
    step: "Mốc 5",
    emoji: "📉",
    title: "Cú sốc thị trường",
    body: "Khi giá thế giới giảm, anh Khánh có thể lỗ vì giá thu mua giảm. Chuỗi bán lẻ thường ổn định hơn nhờ hợp đồng, thương hiệu và khả năng chuyển rủi ro.",
  },
];

export default function StorySection() {
  return (
    <Section
      id="story"
      tone="cream"
      title="Hành trình của anh Khánh"
      subtitle="Một câu chuyện về kiểu vận hành của chuỗi giá trị cà phê, kể theo dòng thời gian."
    >
      <ol className="relative ml-3 border-l-2 border-dashed border-coffee/20 pl-8">
        {milestones.map((m, i) => (
          <li key={m.step} className="mb-9 last:mb-0">
            <Reveal delay={i * 90}>
              <span className="absolute -left-[22px] flex h-10 w-10 items-center justify-center rounded-full bg-cream-soft text-xl ring-2 ring-coffee/15">
                {m.emoji}
              </span>
              <div className="rounded-card border border-coffee/10 bg-white/70 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-earth">
                  {m.step}
                </p>
                <h3 className="mt-1 text-lg font-bold text-coffee-dark">{m.title}</h3>
                <p className="mt-1.5 leading-relaxed text-coffee/80">{m.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="mt-8 rounded-card border-l-4 border-earth bg-earth/10 px-5 py-4 text-sm leading-relaxed text-coffee-dark">
          <strong>Ghi chú học thuật:</strong> Đây là tình huống để phân tích quan hệ lợi ích.
          Không nên hiểu là kết luận tài chính chính xác về một doanh nghiệp cụ thể nếu không có
          báo cáo chi phí và hợp đồng thực tế.
        </p>
      </Reveal>
    </Section>
  );
}
