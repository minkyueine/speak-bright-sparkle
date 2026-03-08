import { motion } from "framer-motion";

const ComparisonSection = () => {
  const rows = [
    { label: "강사 선발", others: "이력서만 확인", ain: "100:1 경쟁률 + TESOL 필수" },
    { label: "수업 후 피드백", others: "없음 또는 단순 코멘트", ain: "4대 영역 진단 리포트 제공" },
    { label: "전담 매니저", others: "없음 (셀프 관리)", ain: "1:1 VVIP 전담 매니저 배정" },
    { label: "강사 영상 공개", others: "프로필 사진 + 10초 음성", ain: "실제 수업 영상 100% 공개 🎬" },
    { label: "스케줄 관리", others: "매번 고객센터 연락", ain: "마이페이지 완전 자동화 📱" },
    { label: "교재", others: "별도 구매 또는 무료 PDF", ain: "프리미엄 자체 교재 무제한 무료 📚" },
    { label: "환불 정책", others: "위약금/수수료 있음", ain: "100% 환불 보장 ✅" },
  ];

  return (
    <section className="bg-card py-24 px-6 border-b border-border">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-sm bg-primary/10 px-5 py-2 rounded-full shadow-sm">
          ⚡ VERSUS COMPARISON
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mt-6 mb-4 leading-tight">
          직접 비교해 보세요 👀
          <br />
          <span className="text-gradient-hero">다른 화상영어 vs 아인잉글리쉬</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          숫자와 팩트로 증명하는 압도적 차이! 🏆
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto overflow-hidden rounded-4xl border border-border shadow-card"
      >
        {/* Header */}
        <div className="grid grid-cols-3 bg-foreground text-primary-foreground">
          <div className="p-4 md:p-6 font-bold text-center border-r border-primary-foreground/10">
            비교 항목
          </div>
          <div className="p-4 md:p-6 font-bold text-center border-r border-primary-foreground/10 text-primary-foreground/60">
            😐 타사
          </div>
          <div className="p-4 md:p-6 font-black text-center text-brand-gold">
            🏆 아인잉글리쉬
          </div>
        </div>
        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-card" : "bg-muted"} border-t border-border`}
          >
            <div className="p-4 md:p-5 font-bold text-foreground text-sm md:text-base border-r border-border flex items-center">
              {row.label}
            </div>
            <div className="p-4 md:p-5 text-muted-foreground text-sm border-r border-border flex items-center">
              {row.others}
            </div>
            <div className="p-4 md:p-5 text-primary font-bold text-sm flex items-center">
              {row.ain}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
