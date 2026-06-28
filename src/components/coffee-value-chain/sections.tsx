"use client";

import Image from "next/image";
import {
  comparisonRows,
  conclusionTakeaways,
  heroStats,
  imageMap,
  realPolicies,
  statePolicies,
  theoryCards,
} from "./data";
import { StakeholderTimeline } from "./StakeholderTimeline";
import { ConceptCard, CTAButton, Reveal, SectionShell, StatCard } from "./ui";

/* Ảnh trong khung bo góc, giữ tỷ lệ, không méo */
function Framed({
  src,
  alt,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-card border border-coffee/10 bg-coffee/5 shadow-md`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}

/* ============================ 1. HERO ============================ */
export function HeroSection({
  onStart,
  onSeeChain,
}: {
  onStart: () => void;
  onSeeChain: () => void;
}) {
  return (
    <section id="hero" className="bg-cream-light px-6 pb-24 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm font-medium text-coffee/60">
              Một bài học nhỏ về Kinh tế chính trị Mác - Lênin
            </p>
            <h1 className="display text-4xl font-extrabold text-coffee-dark sm:text-5xl lg:text-6xl">
              Một ly cà phê <span className="text-clay">85.000đ</span>: Ai đang hưởng lợi?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-coffee/85">
              Từ hạt cà phê ở nông trại đến ly cà phê ngoài quán, giá trị đã đi qua nhiều khâu khác
              nhau. Vậy phần lợi ích được chia như thế nào?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton variant="primary" onClick={onStart}>
                Bắt đầu tìm hiểu
              </CTAButton>
              <CTAButton variant="secondary" onClick={onSeeChain}>
                Xem hành trình hạt cà phê
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Framed
              src={imageMap.hero}
              alt="Hạt cà phê đi từ nông trại Đắk Lắk đến ly cà phê ngoài quán ở thành phố"
              ratio="aspect-[5/4]"
              priority
            />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-14">
          <div className="grid items-stretch gap-5 sm:grid-cols-3">
            {heroStats.map((s) => (
              <StatCard key={s.value} value={s.value} label={s.label} accent={s.accent} />
            ))}
          </div>
          <p className="mt-5 text-coffee/60">
            Hai con số này khác đơn vị, nên không thể đặt cạnh nhau để kết luận. Chúng chỉ để mở ra
            câu hỏi: phần lợi ích đang được chia ra sao?
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 2. CASE ============================ */
export function CaseSection() {
  return (
    <SectionShell
      id="case"
      tone="cream"
      title="Câu chuyện của anh Khánh"
      lead="Anh Khánh bán cà phê theo giá thu mua, nhưng ly cà phê ngoài quán lại có giá cao hơn rất nhiều. Khoảng cách đó không thể nhìn đơn giản bằng một phép so sánh."
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Framed src={imageMap.farmer} alt="Anh Khánh đang chăm sóc vườn cà phê ở Đắk Lắk" />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-loose text-coffee/85">
            Thu nhập của anh phụ thuộc vào giá thu mua, thời tiết, chi phí phân bón và việc thương
            lượng với thương lái. Trong khi đó, càng đi về phía quán cà phê, giá của hạt cà phê
            càng tăng nhờ chế biến, phục vụ, mặt bằng và thương hiệu.
          </p>
          <div className="mt-6 rounded-card border-l-4 border-clay bg-clay/10 p-6">
            <p className="text-sm font-semibold text-clay">Câu hỏi đặt ra</p>
            <p className="mt-2 text-lg font-medium leading-relaxed text-coffee-dark">
              Giá tăng lên ở những khâu nào, và ai mới là người chịu chi phí, rủi ro nhiều nhất?
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ========================== 3. THEORY =========================== */
export function TheorySection() {
  return (
    <SectionShell
      id="theory"
      tone="light"
      title="Vì sao mỗi bên lại muốn một điều khác nhau?"
      lead="Ai tham gia vào chuỗi cà phê cũng mong nhận được một phần lợi ích cho mình. Vấn đề là những mong muốn ấy thường không trùng nhau, và đó là lúc lợi ích các bên bắt đầu va vào nhau."
    >
      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {theoryCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <ConceptCard title={c.title} body={c.body} accent={c.accent} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ======================= 4. VALUE CHAIN ========================= */
export function ValueChainSection() {
  return (
    <SectionShell
      id="value-chain"
      tone="light"
      title="Hành trình của hạt cà phê"
      lead="Trước khi thành một ly cà phê, hạt cà phê đi qua nhiều khâu. Mỗi khâu tạo thêm giá trị, nhưng cũng phát sinh thêm chi phí. Bạn thử bấm vào từng chặng để xem họ làm gì, cần gì và chịu áp lực gì."
    >
      <Reveal className="mb-10">
        <Framed
          src={imageMap.valueChain}
          alt="Hạt cà phê đi qua các chặng: người trồng, thương lái, bên rang xay, quán cà phê và người uống"
          ratio="aspect-[16/5]"
          sizes="100vw"
        />
      </Reveal>
      <StakeholderTimeline />
    </SectionShell>
  );
}

/* ====================== 5. UNIT WARNING ========================= */
export function UnitWarningSection() {
  return (
    <SectionShell
      id="unit-warning"
      tone="cream"
      title="Đừng so vội 40.000đ/kg với 85.000đ/ly"
      lead="Một bên là giá theo kilogram nguyên liệu, một bên là giá của sản phẩm đã qua chế biến, phục vụ và trải nghiệm tại quán. Vì vậy, không thể chỉ đặt hai con số cạnh nhau rồi kết luận."
    >
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <Framed src={imageMap.unitWarning} alt="Cà phê nhân thô đặt cạnh một ly cà phê đã pha" />
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-card border-l-4 border-clay bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold leading-relaxed text-coffee-dark">
              Muốn so sánh cho đúng, cần quy về cùng đơn vị và cộng thêm các chi phí phát sinh ở
              từng khâu.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-card border border-coffee/10 bg-white shadow-sm">
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="bg-coffee/5 text-left">
                  <th className="p-3 font-bold text-coffee-dark">Khác nhau ở đâu</th>
                  <th className="p-3 font-bold text-leaf">Cà phê nhân /kg</th>
                  <th className="p-3 font-bold text-clay">Ly cà phê /ly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-coffee/10">
                {comparisonRows.map((r) => (
                  <tr key={r.dimension} className="align-top">
                    <td className="p-3 font-semibold text-coffee-dark">{r.dimension}</td>
                    <td className="p-3 leading-relaxed text-coffee/75">{r.raw}</td>
                    <td className="p-3 leading-relaxed text-coffee/75">{r.cup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ====================== 8. STATE ROLE =========================== */
export function StateRoleSection() {
  return (
    <SectionShell
      id="state-role"
      tone="blue"
      title="Khi thị trường cần người điều phối"
      lead="Nếu để các bên tự thương lượng hoàn toàn, bên yếu hơn dễ chịu thiệt. Vì vậy, chính sách có vai trò tạo luật chơi, hỗ trợ liên kết và giảm bớt rủi ro cho những người dễ tổn thương nhất."
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {statePolicies.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="h-full rounded-card border border-steel/25 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-coffee-dark">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-coffee/80">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ======================== 9. POLICY ============================= */
export function PolicySection() {
  return (
    <SectionShell
      id="policy"
      tone="blue"
      title="Góc nhìn từ chính sách"
      lead="Một vài chính sách có thể liên hệ khi bàn về liên kết sản xuất, tiêu thụ nông sản và phát triển nông nghiệp bền vững."
    >
      <div className="grid items-stretch gap-5 md:grid-cols-3">
        {realPolicies.map((p, i) => (
          <Reveal key={p.code} delay={i * 90}>
            <div className="flex h-full flex-col rounded-card border border-steel/25 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-steel">{p.code}</h3>
              <p className="mt-3 leading-relaxed text-coffee/80">{p.idea}</p>
              <p className="mt-auto border-t border-coffee/10 pt-3 text-sm leading-relaxed text-coffee/70">
                {p.relate}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-6 text-coffee/65">
          Đây là vài chính sách để liên hệ cho bài học. Chúng có thể hỗ trợ và định hướng, chứ
          không có nghĩa là mọi vấn đề đã được giải quyết xong.
        </p>
      </Reveal>
    </SectionShell>
  );
}

/* ====================== 12. CONCLUSION ========================== */
export function ConclusionSection({
  onRetryQuiz,
  onTryDebate,
  onSeeChain,
}: {
  onRetryQuiz: () => void;
  onTryDebate: () => void;
  onSeeChain: () => void;
}) {
  return (
    <SectionShell id="conclusion" tone="cream" title="Điều đáng nhớ sau cùng">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Framed src={imageMap.conclusion} alt="Hình ảnh cân bằng giữa các bên trong chuỗi cà phê" />
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-4">
            {conclusionTakeaways.map((t, i) => (
              <div key={t.title} className="flex gap-4 rounded-card border border-coffee/10 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream font-extrabold text-coffee">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-coffee-dark">{t.title}</h3>
                  <p className="mt-1 leading-relaxed text-coffee/80">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton variant="primary" onClick={onSeeChain}>
            Xem lại hành trình hạt cà phê
          </CTAButton>
          <CTAButton variant="accent" onClick={onTryDebate}>
            Thử tranh luận với AI
          </CTAButton>
          <CTAButton variant="secondary" onClick={onRetryQuiz}>
            Làm lại câu hỏi nhanh
          </CTAButton>
        </div>
      </Reveal>
    </SectionShell>
  );
}
