import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "체험 결제 (단돈 10원) 💳",
    desc: "스마트폰이나 PC로 네이버 스토어 최상단의 [10원 결제]를 진행해 주세요. 부담 없는 가격으로 아인잉글리쉬의 모든 프리미엄 시스템을 경험하실 수 있습니다.",
    highlight: false,
  },
  {
    num: 2,
    title: "카톡 해피콜 & 스케줄 조율 📱",
    desc: "결제가 확인되면, 배정된 1:1 전담 매니저가 카카오톡 알림톡(또는 전화)으로 연락을 드립니다. 수강생이 가장 편한 날짜와 시간으로 체험 수업 스케줄을 확정합니다.",
    highlight: false,
  },
  {
    num: 3,
    title: "장비 테스트 및 OT 🖥️",
    desc: "기계치라도 걱정하지 마세요! 수업 전, 매니저가 Zoom(줌) 프로그램 설치부터 마이크/카메라 화면 테스트까지 원격으로 꼼꼼하고 친절하게 점검해 드립니다.",
    highlight: false,
  },
  {
    num: 4,
    title: "본수업 & 입체적 레벨 진단 🎉",
    desc: "원어민 강사님과 부담 없이 가벼운 1:1 대화를 나눕니다. 수업 직후, 나의 강점과 약점(어휘, 문법, 유창성, 발음)이 상세히 분석된 '입체적 레벨 진단 리포트'를 받아보실 수 있습니다.",
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
          "화상 영어가 처음인데,<br />설정이 어렵지 않을까요?" 😟
          <br />
          <span className="text-gradient-hero text-lg">결제만 하세요. 나머지는 다 해드립니다. 🙌</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          전담 매니저가 A부터 Z까지 밀착 케어해 드립니다.
          <br />복잡한 설치나 매뉴얼 정독 없이,
          <br />편안하게 수업만 준비하세요.
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
            className={`${
              step.highlight
                ? "bg-gradient-warm border-2 border-primary shadow-brand"
                : "bg-card border border-border shadow-card"
            } rounded-2xl p-5 flex items-start gap-4`}
          >
            <div
              className={`w-10 h-10 ${
                step.highlight ? "bg-primary" : "bg-foreground"
              } text-primary-foreground rounded-full flex items-center justify-center font-black text-base shadow-md flex-shrink-0`}
            >
              {step.num}
            </div>
            <div>
              <h4 className={`font-black ${step.highlight ? "text-primary" : "text-foreground"} text-base mb-1`}>
                {step.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
