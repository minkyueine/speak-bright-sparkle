import { motion } from "framer-motion";
import reviewerBusinesswoman from "@/assets/reviewer-businesswoman.png";
import reviewerMother from "@/assets/reviewer-mother.png";
import reviewerStudent from "@/assets/reviewer-student.png";
import reviewerOfficeman from "@/assets/reviewer-officeman.png";

const reviews = [
{
  name: "30대 직장인 김*영 님",
  img: reviewerBusinesswoman,
  title: '"영어회의 울렁증, 아인으로 극복!" 🎉',
  highlights: [
  "외국계 이직 후 회의 시간마다 꿀 먹은 벙어리",
  "비즈니스 코스로 매일 20분씩 말하기 훈련",
  "이제는 제 의견을 당당하게 발표!"],

  best: "실수해도 부끄럽지 않다는 게 가장 큰 장점 💛"
},
{
  name: "초4 학부모 박*진 님",
  img: reviewerMother,
  title: '"영어 학원 끊고 아인으로 완전 정착!" 🏠',
  highlights: [
  "문법 위주 학원에 지쳐하던 아이",
  "아인 만나고 영어를 '놀이'로 생각하기 시작",
  "라즈키즈 원서 연동 수업 → 신의 한 수!"],

  best: "이젠 아이가 먼저 컴퓨터 켜고 선생님을 기다립니다 🖥️"
},
{
  name: "20대 대학생 이*현 님",
  img: reviewerStudent,
  title: '"AI 회화 1년 → 결국 아인으로!" 🤖➡️👩‍🏫',
  highlights: [
  "AI 어플로 1년 넘게 혼자 연습",
  "실제 외국인 앞에선 기계처럼 패턴만 반복",
  "아인 6개월 후 → 진짜 '사람'과 티키타카하는 법 습득"],

  best: "원어민의 말이 정확히 들리고 대답이 자연스럽게! 🎯"
},
{
  name: "40대 직장인 최*석 님",
  img: reviewerOfficeman,
  title: '"필리핀 발음 걱정? 완벽한 기우!" 👌',
  highlights: [
  "처음엔 발음·억양이 걱정",
  "첫 수업 후 편견이 산산조각!",
  "오히려 발음이 또렷, 틀린 문법 기가 막히게 캐치"],

  best: "주 2회 → 너무 만족해서 주 5회로 확대! 🔥"
}];


const ReviewSection = () => {
  return (
    <section className="bg-brand-darker py-14 px-5">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-black text-primary-foreground mb-3 leading-tight">
          
          "진짜 영어가 늘까요?" 🤔
          <br />
          <span className="text-primary text-lg">결과로 증명하는 수강생 찐 후기 💬</span>
        </motion.h2>
        <p className="text-secondary-foreground/50 text-sm">🔄 재수강률 95% 이상의 이유를 직접 확인해 보세요.
          <br />직접 확인해 보세요.
        </p>
      </div>

      <div className="space-y-5">
        {reviews.map((review, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-secondary p-5 rounded-2xl shadow-xl border border-secondary/80 relative">
          
            <div className="absolute top-4 right-4 text-4xl opacity-10">❝</div>
            <div className="flex items-center mb-4 border-b border-secondary-foreground/10 pb-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center overflow-hidden bg-white mr-3 border-2 border-primary">
                <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-primary-foreground text-sm">{review.name}</div>
                <div className="text-brand-gold text-xs mt-0.5">★★★★★</div>
              </div>
            </div>
            <h4 className="text-base font-bold text-primary mb-3">{review.title}</h4>
            
            {/* Scannable bullet highlights */}
            <div className="space-y-1.5 mb-3">
              {review.highlights.map((h, j) =>
            <div key={j} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                  <span className="text-secondary-foreground/70 leading-relaxed">{h}</span>
                </div>
            )}
            </div>
            
            {/* Best quote highlight */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
              <p className="text-primary-foreground font-bold text-sm text-center">
                {review.best}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

};

export default ReviewSection;