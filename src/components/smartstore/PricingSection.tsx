import { motion } from "framer-motion";

const plans = [
  {
    title: "주 2회",
    sub: "월 8회",
    desc: "바쁜 일상 속 가벼운 시작 🌱",
    price: "60,000",
    best: false,
    features: ["1:1 원어민 맞춤 수업", "실시간 교정 피드백", "모든 교재 무상 제공"],
  },
  {
    title: "주 3회",
    sub: "월 12회",
    desc: "실력이 가장 빠르게 느는 최적의 횟수 🚀",
    price: "80,000",
    best: true,
    features: [
      "1:1 원어민 맞춤 수업",
      "실시간 교정 피드백",
      "모든 교재 무상 제공",
      "학습 습관 형성 최적화 ✨",
    ],
  },
  {
    title: "주 5회",
    sub: "월 20회",
    desc: "단기간 완벽한 영어 몰입 환경 🔥",
    price: "120,000",
    best: false,
    features: ["1:1 원어민 맞춤 수업", "실시간 교정 피드백", "모든 교재 무상 제공"],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-card py-24 px-6 border-t border-border">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          💰 업계 최저가 수준의 정직한 수강료
        </h2>
        <p className="text-muted-foreground text-lg">
          마케팅 거품을 빼고 오직 강사진과 수업 퀄리티에 투자했습니다. 💎
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`rounded-4xl p-8 flex flex-col justify-between transition duration-300 ${
              plan.best
                ? "bg-gradient-warm border-2 border-primary shadow-brand md:-translate-y-4 relative"
                : "bg-card border border-border shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.best && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-black px-6 py-2 rounded-full shadow-lg text-sm w-4/5 text-center">
                🏆 가장 많이 선택하는 BEST
              </div>
            )}
            <div className={plan.best ? "mt-4" : ""}>
              <h4 className="text-2xl font-black text-foreground mb-2">
                {plan.title}{" "}
                <span className="text-base font-normal text-muted-foreground">/ {plan.sub}</span>
              </h4>
              <p className={`text-sm mb-6 pb-6 border-b ${plan.best ? "text-primary font-bold border-primary/20" : "text-muted-foreground border-border"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-4 mb-8 text-sm text-foreground/80">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-primary">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`text-center mt-auto pt-6 border-t ${plan.best ? "border-primary/20" : "border-border"}`}>
              <div className={`text-3xl md:text-4xl font-black ${plan.best ? "text-primary" : "text-foreground"}`}>
                {plan.price}
                <span className="text-lg font-bold text-muted-foreground ml-1">원~</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Per-class cost */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-12 text-center"
      >
        <div className="bg-muted rounded-3xl p-6 border border-border">
          <p className="text-lg text-muted-foreground">
            ☕ <strong className="text-foreground">커피 한 잔 값</strong>으로 원어민 1:1 수업을!
            <br />
            <span className="text-sm">주 5회 기준 <strong className="text-primary">1회당 약 6,000원</strong> — 카페 아메리카노 한 잔 가격입니다.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
