import { motion } from "framer-motion";
import heroImg from "@/assets/hero-video-lesson.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-brand-darker overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />

      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-bold mb-4 tracking-[0.2em] text-sm md:text-base"
        >
          ✨ 수많은 화상영어, 더 이상 헤매지 마세요 ✨
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl font-light mb-2 text-secondary-foreground/80"
        >
          왜 결국 <strong className="font-black text-primary-foreground text-glow">'아인잉글리쉬'</strong>에
          <br />정착할 수밖에 없을까요?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-10"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            비교할수록
            <br />
            <span className="text-gradient-gold text-glow-gold">
              압도적인 1위 🏆
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-8 md:p-10 rounded-4xl w-full max-w-lg mx-auto shadow-brand"
        >
          <p className="text-secondary-foreground/80 font-medium mb-3 text-lg">
            품질에 대한 자신감으로 준비했습니다 💪
          </p>
          <p className="text-brand-gold font-black text-3xl md:text-4xl mb-5">
            체험수업 단돈 10원! 🔥
          </p>
          <div className="text-primary-foreground text-sm opacity-80 border-t border-primary-foreground/20 pt-5 mt-2 font-light">
            나와 맞지 않는다면 100% 취소 가능합니다.
            <br />☕ 커피 한 모금 값으로 1위의 차이를 느껴보세요.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
