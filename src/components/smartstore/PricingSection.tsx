import { motion } from "framer-motion";

const plans = [
  {
    title: "주 2회",
    sub: "월 8회",
    desc: "바쁜 일상 속 가벼운 시작 🌱",
    price: "94,000",
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
    price: "169,000",
    best: false,
    features: ["1:1 원어민 맞춤 수업", "실시간 교정 피드백", "모든 교재 무상 제공"],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-card py-14 px-5 border-t border-border">
      <div className="text-center mb-10">
        <h2 className="text-xl font-black text-foreground mb-2">
          💰 업계 최저가 수준의<br />정직한 수강료
        </h2>
        <p className="text-muted-foreground text-sm">
          마케팅 거품 ❌ → 강사진과 수업 퀄리티에 올인! 💎
        </p>
      </div>

      <div className="space-y-5">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-6 ${
              plan.best
                ? "bg-gradient-warm border-2 border-primary shadow-brand relative"
                : "bg-card border border-border shadow-card"
            }`}
          >
            {plan.best && (
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-black px-5 py-1.5 rounded-full shadow-lg text-xs w-3/4 text-center">
                🏆 가장 많이 선택하는 BEST
              </div>
            )}
            <div className={plan.best ? "mt-3" : ""}>
              <h4 className="text-xl font-black text-foreground mb-1">
                {plan.title}{" "}
                <span className="text-sm font-normal text-muted-foreground">/ {plan.sub}</span>
              </h4>
              <p className={`text-xs mb-4 pb-4 border-b ${plan.best ? "text-primary font-bold border-primary/20" : "text-muted-foreground border-border"}`}>
                {plan.desc}
              </p>
              <ul className="space-y-2 mb-5 text-sm text-foreground/80">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-primary">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`text-center pt-4 border-t ${plan.best ? "border-primary/20" : "border-border"}`}>
              <div className={`text-3xl font-black ${plan.best ? "text-primary" : "text-foreground"}`}>
                {plan.price}
                <span className="text-base font-bold text-muted-foreground ml-1">원~</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <div className="bg-muted rounded-2xl p-5 border border-border">
          <p className="text-sm text-muted-foreground">
            ☕ <strong className="text-foreground">커피 한 잔 값</strong>으로 원어민 1:1 수업!
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            주 5회 기준 <strong className="text-primary text-base font-black">1회당 약 6,000원</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
