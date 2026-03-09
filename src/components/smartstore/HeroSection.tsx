import { motion } from "framer-motion";
import heroImg from "@/assets/hero-video-lesson.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-brand-darker overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />

      <div className="relative z-10 text-center px-5 pt-14 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-bold mb-3 tracking-[0.15em] text-xs">
          
          ✨ 수많은 화상영어, 더 이상 헤매지 마세요 ✨
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-light mb-2 text-secondary-foreground/80">
          
          왜 결국 <strong className="font-black text-primary-foreground text-glow">'아인잉글리쉬'</strong>에
          <br />정착할 수밖에 없을까요?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-8">
          
          <h1 className="text-4xl font-black leading-tight mb-4">
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
          className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-6 rounded-3xl mx-auto shadow-brand">
          
          <p className="text-secondary-foreground/80 font-medium mb-2 text-base">
            품질에 대한 자신감으로 준비했습니다 💪
          </p>
          <p className="text-brand-gold font-black text-2xl mb-4">
            체험수업 단돈 10원! 🔥
          </p>
          <div className="text-primary-foreground text-xs opacity-80 border-t border-primary-foreground/20 pt-4 mt-1 font-light leading-relaxed">
            후회없는 빠른 선택으로 1위의 차이를 느껴보세요.
          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;