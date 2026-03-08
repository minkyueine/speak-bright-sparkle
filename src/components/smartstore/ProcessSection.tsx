import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "체험 결제 (단돈 10원) 💳",
    desc: '스마트폰이나 PC로 네이버 스토어 최상단의 [10원 결제]를 진행해 주세요. 부담 없는 가격으로 아인잉글리쉬의 모든 프리미엄 시스템을 경험하실 수 있습니다.',
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
    desc: '원어민 강사님과 부담 없이 가벼운 1:1 대화를 나눕니다. 수업 직후, 나의 강점과 약점(어휘, 문법, 유창성, 발음)이 상세히 분석된 "입체적 레벨 진단 리포트"를 받아보실 수 있습니다.',
    highlight: true,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-muted py-24 px-6 border-t border-border">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest text-sm bg-primary/10 px-5 py-2 rounded-full mb-4 inline-block shadow-sm">
          ✅ EASY START
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
          "화상 영어가 처음인데, 어렵지 않을까요?" 😟
          <br />
          <span className="text-gradient-hero">결제만 하세요. 나머지는 다 해드립니다. 🙌</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          전담 매니저가 A부터 Z까지 밀착 케어해 드립니다.
          <br />복잡한 설치나 매뉴얼 정독 없이, 편안하게 수업만 준비하세요.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${
              step.highlight
                ? "bg-gradient-warm border-2 border-primary shadow-brand"
                : "bg-card border border-border shadow-card"
            } rounded-4xl p-6 md:p-8 flex items-start gap-6 hover:-translate-y-1 transition duration-300`}
          >
            <div
              className={`w-12 h-12 ${
                step.highlight ? "bg-primary" : "bg-foreground"
              } text-primary-foreground rounded-full flex items-center justify-center font-black text-xl shadow-md flex-shrink-0`}
            >
              {step.num}
            </div>
            <div>
              <h4 className={`font-black ${step.highlight ? "text-primary" : "text-foreground"} text-xl md:text-2xl mb-2`}>
                {step.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
