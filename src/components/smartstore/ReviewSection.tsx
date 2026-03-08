import { motion } from "framer-motion";

const reviews = [
  {
    name: "30대 직장인 김*영 님",
    emoji: "👩‍💼",
    title: '"영어회의 울렁증, 아인으로 극복했어요!" 🎉',
    text: '"외국계 회사로 이직 후 회의 시간마다 꿀 먹은 벙어리였는데, 아인잉글리쉬 비즈니스 코스로 매일 20분씩 말하기 훈련을 했더니 이제는 제 의견을 당당하게 말할 수 있게 되었습니다. 무엇보다 선생님이 너무 친절하셔서 실수해도 부끄럽지 않다는 게 가장 큰 장점이에요!"',
  },
  {
    name: "초4 학부모 박*진 님",
    emoji: "👩",
    title: '"영어 학원 끊고 아인으로 완전 정착합니다." 🏠',
    text: '"문법 위주 학원에 지쳐하던 아이가 아인 화상영어를 만나고 영어를 \'놀이\'로 생각하기 시작했어요. 특히 라즈키즈 원서 연동 수업은 정말 신의 한 수입니다. 억지로 학원 보내던 시절이 후회되네요. 이젠 아이가 먼저 컴퓨터 켜고 선생님을 기다립니다."',
  },
  {
    name: "20대 대학생 이*현 님",
    emoji: "👨‍🎓",
    title: '"AI 회화 1년 하다가 결국 아인으로 왔습니다." 🤖➡️👩‍🏫',
    text: '"AI 회화 어플로 1년 넘게 혼자 말하기 연습을 했는데, 막상 실제 외국인 앞에서는 기계처럼 정해진 패턴만 나오더라고요. 아인에서 6개월 집중 훈련을 받고 나니 진짜 \'사람\'과 티키타카하는 법을 배웠습니다. 이젠 원어민의 말이 정확히 들리고 대답이 자연스럽게 나옵니다!"',
  },
  {
    name: "40대 직장인 최*석 님",
    emoji: "👨‍💻",
    title: '"선생님 발음 걱정? 완벽한 기우였습니다." 👌',
    text: '"처음엔 필리핀 선생님이라 발음이나 억양이 걱정됐습니다. 그런데 첫 수업을 하자마자 제 편견이 산산조각 났어요. 오히려 발음이 또렷하고, 제가 틀린 문법을 기가 막히게 캐치해서 꼼꼼히 교정해 주십니다. 주 2회로 시작했다가 너무 만족해서 지금은 주 5회로 늘려 영어 완전 정복 중입니다!"',
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
          className="text-xl font-black text-primary-foreground mb-3 leading-tight"
        >
          "진짜 영어가 늘까요?" 🤔
          <br />
          <span className="text-primary text-lg">결과로 증명하는 수강생 찐 후기 💬</span>
        </motion.h2>
        <p className="text-secondary-foreground/50 text-sm">
          🔄 재수강률 85% 이상의 이유를<br />직접 확인해 보세요.
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
                <div className="text-brand-gold text-xs mt-0.5">★★★★★</div>
              </div>
            </div>
            <h4 className="text-base font-bold text-primary mb-3">{review.title}</h4>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
