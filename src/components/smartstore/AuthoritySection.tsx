import { motion } from "framer-motion";
import trophyImg from "@/assets/trophy.jpg";

const AuthoritySection = () => {
  return (
    <section className="bg-muted py-20 px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full mix-blend-multiply blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-brand-dark text-brand-gold font-bold text-sm mb-4 tracking-widest shadow-md">
            🏅 PROVEN FACT
          </span>
          <h3 className="text-foreground font-black text-3xl md:text-5xl mb-4 leading-tight">
            '1위'라는 타이틀,
            <br />
            <span className="text-gradient-hero">아무나 쓸 수 없습니다.</span>
          </h3>
          <p className="text-muted-foreground text-lg">
            📊 데이터와 수많은 고객의 선택이 증명하는 진짜 화상영어
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* 랭키닷컴 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-card to-accent/30 border-[3px] border-brand-gold rounded-4xl p-10 flex flex-col items-center text-center shadow-gold hover:-translate-y-2 transition duration-500"
          >
            <div className="absolute -top-6 bg-brand-gold text-foreground font-black px-6 py-2 rounded-full shadow-lg text-sm border-2 border-card">
              대한민국 화상영어 부문
            </div>
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-card shadow-lg">
              <img src={trophyImg} alt="트로피" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-foreground font-black text-2xl mb-2">
              랭키닷컴 공인 트래픽 📈
            </h4>
            <p className="text-brand-orange font-black text-4xl md:text-5xl mb-4 text-glow-gold">
              3년 연속 1위
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed bg-card p-4 rounded-2xl shadow-card border border-border">
              2021, 2022, 2023년 기준!
              <br />
              수많은 타사를 제치고{" "}
              <strong className="text-foreground">
                압도적인 방문자 수와 만족도 1위
              </strong>
              를 굳건히 지키고 있습니다.
            </p>
          </motion.div>

          {/* 인플루언서 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-b from-card to-destructive/5 border-[3px] border-brand-red rounded-4xl p-10 flex flex-col items-center text-center shadow-brand hover:-translate-y-2 transition duration-500"
          >
            <div className="absolute -top-6 bg-brand-red text-primary-foreground font-black px-6 py-2 rounded-full shadow-lg text-sm border-2 border-card">
              깐깐한 셀럽의 선택
            </div>
            <div className="w-28 h-28 bg-gradient-to-br from-brand-red to-destructive rounded-full flex items-center justify-center text-6xl mb-6 border-4 border-card shadow-lg">
              🔥
            </div>
            <h4 className="text-foreground font-black text-2xl mb-2">
              누적 조회수 200만! 🎬
            </h4>
            <p className="text-brand-red font-black text-4xl md:text-5xl mb-4">
              유명 유튜버 극찬
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed bg-card p-4 rounded-2xl shadow-card border border-border">
              협찬에 깐깐하기로 소문난 유튜버들도
              <br />
              <strong className="text-foreground">
                직접 수강해 보고 "이건 진짜다!" 라며 강력 추천
              </strong>
              한 바로 그 브랜드입니다.
            </p>
          </motion.div>
        </div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { num: "50,000+", label: "누적 수강생", emoji: "👨‍🎓" },
            { num: "85%", label: "재수강률", emoji: "🔄" },
            { num: "100:1", label: "강사 선발 경쟁률", emoji: "🎯" },
            { num: "4.9/5.0", label: "평균 만족도", emoji: "⭐" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-3xl p-6 text-center shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300"
            >
              <span className="text-3xl mb-2 block">{stat.emoji}</span>
              <div className="text-2xl md:text-3xl font-black text-foreground">
                {stat.num}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
