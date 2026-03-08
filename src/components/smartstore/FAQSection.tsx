import { motion } from "framer-motion";

const faqs = [
  {
    q: "선생님 배정이나 교재 선정은 어떻게 하나요?",
    a: "첫 결제 후, 매니저가 직접 연락드려 수강생의 레벨과 선호하는 스타일에 맞춰 최적의 강사님과 교재를 1:1로 매칭해 드립니다. 처음이라 막막하셔도 모두 알아서 세팅해 드립니다. 😊",
  },
  {
    q: "갑자기 일정이 생기면 수업 휴강이나 연기 신청이 가능한가요?",
    a: "네, 가능합니다! 홈페이지 '나의 강의실'을 통해 수업 시작 일정 시간 전까지 간편하게 휴강 및 대체 수업을 신청하실 수 있습니다. 수강생의 스케줄을 최우선으로 존중합니다. 📅",
  },
  {
    q: "정말 불만족하면 100% 환불/취소가 되나요?",
    a: "네! 체험 수업 후 본인의 학습 스타일과 맞지 않는다고 판단되시면 위약금이나 수수료 없이 100% 깔끔하게 취소 처리해 드립니다. 아인의 강의력에 대한 굳은 자신감입니다. 💪",
  },
  {
    q: "필리핀 선생님 발음이 괜찮을까요?",
    a: "경쟁률 100:1을 통과한 상위 1% 엘리트입니다. 실제 수업 영상도 100% 공개하고 있으니 직접 확인해 보세요! 🎯",
  },
  {
    q: "아이와 성인 모두 가능한가요?",
    a: "네! 5세부터 성인까지 파닉스, 일상 회화, 비즈니스 영어, IELTS/TOEIC Speaking까지 전 코스가 준비되어 있습니다. 📚",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-card py-14 px-5">
      <div className="mb-12">
        <h3 className="text-xl font-black text-foreground mb-2 text-center">
          ❓ 결제 전 자주 묻는 질문 FAQ
        </h3>
        <p className="text-muted-foreground text-sm text-center mb-6">
          궁금한 점은 여기서 먼저 확인해 보세요!
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-muted p-4 rounded-2xl"
            >
              <h4 className="font-bold text-sm text-foreground mb-2 flex items-start">
                <span className="text-primary mr-2 text-lg leading-none font-black flex-shrink-0">Q</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-muted-foreground ml-6 leading-relaxed text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-dark rounded-3xl p-8 text-center shadow-dark relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
        <div className="relative z-10">
          <span className="inline-block bg-brand-red text-primary-foreground font-black px-4 py-1.5 rounded-full text-xs mb-6 animate-pulse shadow-lg">
            🔴 이달의 체험수업 정원 마감 임박
          </span>
          <h2 className="text-2xl font-black text-primary-foreground mb-4 leading-tight">
            모든 의심은
            <br />
            <span className="text-brand-gold border-b-4 border-brand-gold pb-0.5 inline-block mt-1">
              단돈 10원으로 직접 판단하세요! ✨
            </span>
          </h2>
          <p className="text-secondary-foreground/60 text-sm mb-8 leading-relaxed">
            다른 곳에서 비싼 돈 내고 후회하지 마세요.
            <br />☕ 커피 한 모금도 안 되는 가격으로,
            <br />1위 화상영어의 품격을 증명하겠습니다.
          </p>
          <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-5 rounded-2xl animate-float shadow-2xl">
            <p className="text-brand-gold font-bold mb-3 text-sm">
              👆 지금 바로 상단 구매 옵션을 확인하세요!
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">☝️</span>
              <p className="text-primary-foreground font-black text-xl tracking-tight">
                상단 [구매하기] 클릭!
              </p>
              <span className="text-2xl">☝️</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 text-center">
        <p className="text-muted-foreground text-[10px] leading-relaxed">
          * 상세한 환불 규정 및 연기/취소 매뉴얼은<br />홈페이지 및 결제 완료 후 알림톡으로 투명하게 제공됩니다.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
