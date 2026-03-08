import { motion } from "framer-motion";

const reviews = [
  {
    name: "30대 직장인 김*영 님",
    emoji: "👩‍💼",
    title: '"영어회의 울렁증, 아인으로 극복!" 🎉',
    text: '"외국계 회사로 이직 후 매일 20분씩 말하기 훈련을 했더니 이제는 제 의견을 당당하게 말합니다. 선생님이 너무 친절하셔서 실수해도 부끄럽지 않아요!"',
  },
  {
    name: "초4 학부모 박*진 님",
    emoji: "👩",
    title: '"영어 학원 끊고 아인으로 정착!" 🏠',
    text: '"문법 위주 학원에 지쳐하던 아이가 영어를 놀이로 생각하기 시작했어요. 라즈키즈 원서 연동 수업은 신의 한 수! 이젠 아이가 먼저 선생님을 기다립니다."',
  },
  {
    name: "20대 대학생 이*현 님",
    emoji: "👨‍🎓",
    title: '"AI 회화 1년 → 결국 아인으로" 🤖➡️👩‍🏫',
    text: '"AI 어플로 1년 연습했는데 실제론 패턴만 나오더라고요. 아인 6개월 후 진짜 사람과 티키타카하는 법을 배웠습니다!"',
  },
  {
    name: "40대 직장인 최*석 님",
    emoji: "👨‍💻",
    title: '"필리핀 선생님 발음 걱정? 기우!" 👌',
    text: '"발음이 또렷하고, 틀린 문법을 기가 막히게 캐치해서 교정해 주십니다. 주 2회로 시작했다가 지금은 주 5회로 늘려 영어 완전 정복 중!"',
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-brand-darker py-14 px-5">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black text-primary-foreground mb-3"
        >
          "진짜 영어가 늘까요?" 🤔
          <br />
          <span className="text-primary text-xl">수강생 찐 후기 💬</span>
        </motion.h2>
        <p className="text-secondary-foreground/50 text-sm">
          🔄 재수강률 85% 이상의 이유를 확인하세요.
        </p>
      </div>

      <div className="space-y-5">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary p-5 rounded-2xl shadow-xl border border-secondary/80 relative"
          >
            <div className="absolute top-4 right-4 text-4xl opacity-10">❝</div>
            <div className="flex items-center mb-4 border-b border-secondary-foreground/10 pb-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-2xl bg-secondary-foreground/10 mr-3 border-2 border-primary">
                {review.emoji}
              </div>
              <div>
                <div className="font-bold text-primary-foreground text-sm">{review.name}</div>
                <div className="text-brand-gold text-xs mt-0.5">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <h4 className="text-base font-bold text-primary mb-2">{review.title}</h4>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
