import { motion } from "framer-motion";

const ComparisonSection = () => {
  const rows = [
    { label: "강사 선발", others: "이력서만 확인", ain: "33:1 경쟁률 + TESOL 필수" },
    { label: "수업 후 피드백", others: "없음 또는 단순 코멘트", ain: "4대 영역 진단 리포트 📊" },
    { label: "전담 매니저", others: "없음 (셀프)", ain: "1:1 VIP 전담 매니저 🤝" },
    { label: "강사 영상", others: "프로필 사진만", ain: "실제 수업 영상 100% 공개 🎬" },
    { label: "스케줄 관리", others: "매번 연락 필요", ain: "마이페이지 자동화 📱" },
    { label: "교재", others: "별도 구매", ain: "프리미엄 교재 무제한 무료 📚" },
    
  ];

  return (
    <section className="bg-card py-14 px-5 border-b border-border">
      <div className="text-center mb-8">
        <span className="text-primary font-bold text-xs bg-primary/10 px-4 py-1.5 rounded-full shadow-sm">
          ⚡ VERSUS COMPARISON
        </span>
        <h2 className="text-2xl font-black text-foreground mt-4 mb-2 leading-tight">
          직접 비교해 보세요 👀
          <br />
          <span className="text-gradient-hero text-xl">타사 vs 아인잉글리쉬</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          숫자와 팩트로 증명하는 압도적 차이! 🏆
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-border shadow-card"
      >
        {/* Header */}
        <div className="grid grid-cols-[0.7fr_1fr_1.5fr] bg-foreground text-primary-foreground text-xs">
          <div className="p-3 font-bold text-center border-r border-primary-foreground/10">
            비교 항목
          </div>
          <div className="p-3 font-bold text-center border-r border-primary-foreground/10 text-primary-foreground/60">
            😐 타사
          </div>
          <div className="p-3 font-black text-center text-brand-gold">
            🏆 아인
          </div>
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[0.7fr_1fr_1.5fr] ${i % 2 === 0 ? "bg-card" : "bg-muted"} border-t border-border`}
          >
            <div className="p-3 font-bold text-foreground text-xs border-r border-border flex items-center">
              {row.label}
            </div>
            <div className="p-3 text-muted-foreground text-xs border-r border-border flex items-center">
              {row.others}
            </div>
            <div className="p-3 text-primary font-bold text-xs flex items-center">
              {row.ain}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ComparisonSection;
