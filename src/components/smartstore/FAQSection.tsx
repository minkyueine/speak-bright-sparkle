import { motion } from "framer-motion";

const faqs = [
{
  q: "선생님 배정이나 교재 선정은 어떻게 하나요?",
  points: [
  "첫 결제 후 매니저가 직접 연락",
  "수강생 레벨·선호 스타일에 맞춰 최적의 강사님+교재 1:1 매칭",
  "처음이라 막막해도 모두 알아서 세팅! 😊"]

},
{
  q: "갑자기 일정이 생기면 휴강/연기 가능한가요?",
  points: [
  "가능합니다!",
  "홈페이지 '나의 강의실' → 간편하게 휴강 및 대체 수업 신청",
  "수강생 스케줄을 최우선으로 존중 📅"]

},
{
  q: "필리핀 선생님 발음이 괜찮을까요?",
  points: [
  "경쟁률 100:1 통과한 상위 1% 엘리트",
  "실제 수업 영상도 100% 공개 → 직접 확인 가능 🎯"]

},
{
  q: "아이와 성인 모두 가능한가요?",
  points: [
  "네! 5세~성인까지",
  "파닉스 → 일상 회화 → 비즈니스 → IELTS/TOEIC Speaking",
  "전 코스 완비! 📚"]

}];


const FAQSection = () => {
  return (
    <section className="bg-card py-14 px-5">
      <div className="mb-8">
        <h3 className="text-xl font-black text-foreground mb-2 text-center">
          ❓ 자주 묻는 질문 FAQ
        </h3>
        <p className="text-muted-foreground text-sm text-center mb-6">
          궁금한 점은 여기서 먼저 확인!
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) =>
          <div key={i} className="bg-muted rounded-2xl border-none px-4 py-4">
              <div className="flex items-start gap-2 text-sm font-bold text-foreground mb-2">
                <span className="text-primary font-black flex-shrink-0">Q</span>
                <span>{faq.q}</span>
              </div>
              <div className="space-y-1.5 ml-6">
                {faq.points.map((p, j) =>
              <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span className="text-muted-foreground leading-relaxed">{p}</span>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Final CTA */}
      <div
        className="bg-gradient-dark rounded-3xl p-8 text-center shadow-dark relative overflow-hidden">
        
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
          <div className="space-y-1 text-sm text-secondary-foreground/60 mb-8">
            <p>저가 수업 듣고 시간낭비 하지 마시고  
비싼 돈 주고 후회하지 마세요.</p>
            <p>☕ 커피 한 모금도 안 되는 가격으로</p>
            <p className="text-primary-foreground font-bold">1위 화상영어의 품격을 증명하겠습니다.</p>
          </div>
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
          * 환불 규정 및 연기/취소 매뉴얼은<br />홈페이지 및 결제 완료 후 알림톡으로 투명 제공
        </p>
      </div>
    </section>);
};

export default FAQSection;