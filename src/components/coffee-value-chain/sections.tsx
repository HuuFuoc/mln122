"use client";

import Image from "next/image";
import {
  actors,
  heroStats,
  imageMap,
  realPolicies,
  statePolicies,
  theoryCards,
  unitWarningRows,
  valueChainConclusion,
} from "./data";
import { Reveal, SectionShell, StatCard } from "./ui";

/* Helper: ảnh trong khung bo góc, giữ tỷ lệ, không méo */
function Framed({
  src,
  alt,
  ratio = "aspect-[4/3]",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-card border border-coffee/10 bg-coffee/5 shadow-sm`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

/* ============================ 1. HERO ============================ */
export function HeroSection({
  onStart,
  onPresentation,
}: {
  onStart: () => void;
  onPresentation: () => void;
}) {
  return (
    <section id="hero" className="bg-cream-light px-6 pb-20 pt-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 inline-block rounded-chip border border-coffee/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Kinh tế chính trị Mác - Lênin
            </span>
            <h1 className="display text-4xl font-extrabold text-coffee-dark sm:text-5xl lg:text-6xl">
              Một ly cà phê <span className="text-clay">85.000đ</span>: Ai đang hưởng lợi?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-coffee/85">
              Từ nông dân Đắk Lắk đến ly cà phê ở thành phố, chuỗi giá trị tạo ra nhiều lợi ích
              nhưng không phải chủ thể nào cũng nhận phần tương xứng.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={onStart}
                className="rounded-chip bg-coffee px-6 py-3 font-semibold text-cream shadow-sm transition hover:bg-coffee-dark active:translate-y-px"
              >
                Bắt đầu phân tích
              </button>
              <button
                onClick={onPresentation}
                className="rounded-chip border border-coffee/25 px-6 py-3 font-semibold text-coffee-dark transition hover:bg-coffee/5 active:translate-y-px"
              >
                Mở chế độ thuyết trình
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Framed src={imageMap.hero} alt="Chuỗi giá trị cà phê từ nông trại đến ly cà phê thành phố" ratio="aspect-[5/4]" priority />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((s) => (
              <StatCard key={s.value} value={s.value} label={s.label} accent={s.accent} />
            ))}
          </div>
          <p className="mt-4 text-sm italic text-coffee/60">
            Hai con số khác đơn vị nên không dùng để kết luận trực tiếp, mà dùng để mở vấn đề về
            phân phối lợi ích.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 2. CASE ============================ */
export function CaseSection() {
  return (
    <SectionShell id="case" tone="cream" kicker="Case study" title="Câu chuyện của anh Khánh">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <Framed src={imageMap.farmer} alt="Nông dân trồng cà phê ở Đắk Lắk" />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-coffee/85">
            Anh Khánh là nông dân trồng cà phê ở Đắk Lắk. Thu nhập của anh phụ thuộc nhiều vào
            giá thu mua, thời tiết, chi phí phân bón, nhân công và khả năng thương lượng với
            thương lái. Trong khi đó, khi cà phê đi qua các khâu rang xay, phân phối và bán lẻ,
            giá trị cuối cùng tăng lên nhờ chế biến, dịch vụ, thương hiệu, mặt bằng và trải nghiệm
            tiêu dùng.
          </p>
          <div className="mt-6 rounded-card border border-clay/30 bg-clay/10 p-6">
            <p className="text-sm font-bold uppercase tracking-wide text-clay">Vấn đề đặt ra</p>
            <p className="mt-2 text-lg font-medium leading-relaxed text-coffee-dark">
              Nếu chuỗi giá trị cùng tạo ra lợi ích, vì sao người sản xuất nguyên liệu có thể nhận
              phần lợi ích thấp và chịu rủi ro lớn hơn?
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
      kicker="Lý thuyết 5.3.1"
      title="Lợi ích kinh tế và quan hệ lợi ích kinh tế"
      lead="Ba khái niệm nền tảng theo giáo trình, làm cơ sở để phân tích chuỗi cà phê."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {theoryCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div className={`h-full rounded-card border-t-4 ${c.accent} bg-white p-6 shadow-sm`}>
              <h3 className="text-xl font-bold text-coffee-dark">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-coffee/80">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ======================= 4. VALUE CHAIN ========================= */
function PowerMeter({ level }: { level: number }) {
  return (
    <div className="mt-1 flex gap-1" aria-label={`Quyền lực thương lượng mức ${level} trên 4`}>
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={`h-1.5 flex-1 rounded-full ${n <= level ? "bg-coffee" : "bg-coffee/15"}`}
        />
      ))}
    </div>
  );
}

export function ValueChainSection() {
  return (
    <SectionShell
      id="value-chain"
      tone="light"
      kicker="Chuỗi quan hệ lợi ích"
      title="Nông dân, thương lái, rang xay, bán lẻ, người tiêu dùng"
      lead="Giá trị tăng dần qua từng khâu. Bấm theo dõi đóng góp, lợi ích, rủi ro và quyền lực thương lượng của mỗi chủ thể."
    >
      <Reveal className="mb-8">
        <Framed
          src={imageMap.valueChain}
          alt="Bản đồ chuỗi giá trị cà phê"
          ratio="aspect-[16/6]"
        />
      </Reveal>

      <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-coffee/60">
        <span>Nguyên liệu</span>
        <span className="h-px flex-1 bg-gradient-to-r from-leaf via-clay to-steel" />
        <span>Giá trị tăng dần</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {actors.map((a, i) => (
          <Reveal key={a.id} delay={i * 70}>
            <div className="flex h-full flex-col rounded-card border border-coffee/10 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{a.emoji}</span>
                <h3 className="font-bold leading-tight text-coffee-dark">{a.name}</h3>
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="font-semibold text-leaf">Đóng góp</dt>
                  <dd className="text-coffee/75">{a.contribution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-clay">Lợi ích</dt>
                  <dd className="text-coffee/75">{a.benefit}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-red-600">Rủi ro</dt>
                  <dd className="text-coffee/75">{a.risk}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-3">
                <p className="text-xs font-semibold text-coffee/60">Quyền lực thương lượng</p>
                <PowerMeter level={a.powerLevel} />
                <p className="mt-1 text-xs text-coffee/70">{a.power}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 rounded-card border border-coffee/10 bg-coffee-dark p-6 text-cream sm:p-8">
          <h3 className="text-xl font-bold">Ai hưởng lợi nhiều nhất?</h3>
          <p className="mt-3 leading-relaxed text-cream/80">{valueChainConclusion}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ====================== 5. UNIT WARNING ========================= */
export function UnitWarningSection() {
  return (
    <SectionShell id="unit-warning" tone="cream" kicker="Tư duy phản biện">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <Framed src={imageMap.unitWarning} alt="Cà phê nhân thô so với ly cà phê thành phẩm" />
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-card border-l-4 border-red-400 bg-white p-6 shadow-sm">
            <h2 className="display text-2xl font-extrabold text-coffee-dark sm:text-3xl">
              Không thể kết luận đơn giản: 40.000đ/kg so với 85.000đ/ly
            </h2>
            <p className="mt-4 leading-relaxed text-coffee/85">
              40.000đ/kg là giá nguyên liệu thô theo khối lượng. 85.000đ/ly là giá sản phẩm bán lẻ
              đã bao gồm rang xay, pha chế, sữa/đá/ly, nhân viên, mặt bằng, marketing, thương hiệu,
              thuế và trải nghiệm tiêu dùng. Vì vậy, hai con số này không chứng minh trực tiếp ai
              bóc lột ai, nhưng cho thấy cần phân tích cách giá trị được tạo ra và phân phối trong
              toàn chuỗi.
            </p>
          </div>
          <ul className="mt-5 divide-y divide-coffee/10 overflow-hidden rounded-card border border-coffee/10 bg-white">
            {unitWarningRows.map((r) => (
              <li key={r.layer} className="flex gap-4 px-5 py-3 text-sm">
                <span className="w-28 shrink-0 font-bold text-coffee-dark">{r.layer}</span>
                <span className="text-coffee/75">{r.detail}</span>
              </li>
            ))}
          </ul>
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
      kicker="Lý thuyết 5.3.2"
      title="Nhà nước có vai trò gì trong hài hòa lợi ích?"
      lead="Nhà nước không thay thế thị trường, nhưng có vai trò tạo khung pháp lý, điều tiết quan hệ lợi ích, bảo vệ lợi ích chính đáng của các chủ thể yếu thế, hạn chế mặt tiêu cực của thị trường và thúc đẩy phát triển bền vững."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {statePolicies.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="flex h-full gap-4 rounded-card border border-steel/25 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-steel/15 text-2xl">
                {p.emoji}
              </span>
              <div>
                <h3 className="font-bold text-coffee-dark">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-coffee/80">{p.body}</p>
              </div>
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
      kicker="Liên hệ thực tế Việt Nam"
      title="Một số chính sách có thể liên hệ"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {realPolicies.map((p, i) => (
          <Reveal key={p.code} delay={i * 90}>
            <div className="flex h-full flex-col rounded-card border border-steel/25 bg-white p-6 shadow-sm">
              <p className="text-base font-extrabold text-steel">{p.code}</p>
              <p className="mt-3 text-sm leading-relaxed text-coffee/80">{p.topic}</p>
              <p className="mt-auto border-t border-coffee/10 pt-3 text-sm leading-relaxed text-coffee-dark">
                <span className="font-semibold">Liên hệ case: </span>
                {p.relate}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-6 text-sm italic text-coffee/65">
          Các chính sách trên có thể hỗ trợ, định hướng và góp phần hài hòa lợi ích, không khẳng
          định đã giải quyết hoàn toàn vấn đề.
        </p>
      </Reveal>
    </SectionShell>
  );
}

/* ====================== 12. CONCLUSION ========================== */
export function ConclusionSection() {
  return (
    <SectionShell id="conclusion" tone="cream" kicker="Kết luận">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <Framed src={imageMap.conclusion} alt="Cân bằng lợi ích trong chuỗi giá trị cà phê" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display text-2xl font-extrabold text-coffee-dark sm:text-3xl">
            Hài hòa lợi ích không có nghĩa là chia đều, mà là phân phối hợp lý theo đóng góp, rủi
            ro và vai trò của từng chủ thể.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-coffee/85">
            Thị trường tạo động lực cho các chủ thể tìm kiếm lợi ích. Tuy nhiên, nếu thiếu liên
            kết, thiếu minh bạch và thiếu điều tiết, chủ thể yếu thế như nông dân có thể nhận phần
            lợi ích thấp hơn so với rủi ro họ gánh chịu. Vì vậy, cần kết hợp cơ chế thị trường với
            vai trò Nhà nước, hợp tác xã, doanh nghiệp và người tiêu dùng để xây dựng chuỗi cà phê
            công bằng và bền vững hơn.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
