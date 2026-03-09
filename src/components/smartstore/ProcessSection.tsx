import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "체험 결제 (단돈 10원) 💳",
    points: [
      "스마트폰이나 PC로 네이버 스토어 접속",
      "최상단의 [10원 결제] 진행",
      "부담 없이 모든 프리미엄 시스템 경험 준비!",
    ],
    highlight: false,
  },
  {
    num: 2,
    title: "카톡 해피콜 & 스케줄 조율 📱",
    points: [
      "카톡채널 아인화상영어로 메세지 남기기 (무료체험 구매완료, 구매자성함)",
      "1:1 전담 매니저가 카톡/전화 연락",
      "가장 편한 날짜와 시간으로 체험 수업 확정",
    ],
    highlight: false,
  },
  {
    num: 3,
    title: "장비 테스트 및 OT 🖥️",
    points: [
      "기계치라도 걱정 NO!",
      "Zoom 설치 → 마이크/카메라 테스트까지",
      "매니저가 원격으로 꼼꼼하게 점검",
    ],
    highlight: false,
  },
  {
    num: 4,
    title: "본수업 & 입체적 레벨 진단 🎉",
    points: [
      "원어민 강사님과 부담 없이 1:1 대화",
      "수업 직후 → 강점/약점 상세 분석",
      "어휘·문법·유창성·발음 '입체적 레벨 진단 리포트' 제공!",
    ],
    highlight: true,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-muted py-14 px-5 border-t border-border">
      <div className="text-center mb-10">
        <span className="text-primary font-bold tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-3 inline-block shadow-sm">
          ✅ EASY START
        </span>
        <h2 className="text-xl font-black text-foreground mb-3 leading-tight">
          "설정이 어렵지 않을까요?" 😟
          <br />
          <span className="text-gradient-hero text-lg">결제만 하세요. 나머지는 다 해드립니다.</span> 🙌
        </h2>
        <p className="text-muted-foreground text-sm">
          전담 매니저가 A부터 Z까지 밀착 케어!
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`${\
              step.highlight
                ? "bg-gradient-warm border-2 border-primary shadow-brand"
                : "bg-card border border-border shadow-card"
            } rounded-2xl p-5 flex items-start gap-4`}
          >
            <div
              className={`w-10 h-10 ${\
                step.highlight ? "bg-primary" : "bg-foreground"
              } text-primary-foreground rounded-full flex items-center justify-center font-black text-base shadow-md flex-shrink-0`}
            >
              {step.num}
            </div>
            <div>
              <h4 className={`font-black ${step.highlight ? "text-primary" : "text-foreground"} text-base mb-2`}>
                {step.title}
              </h4>
              <div className="space-y-1">
                {step.points.map((p, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span className="text-muted-foreground leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
