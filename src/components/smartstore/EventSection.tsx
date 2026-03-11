import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    text: (
      <>
        네이버 쇼핑에서 <strong className="text-foreground">3만 원 수강권</strong>을{" "}
        <strong className="text-foreground">1매</strong> 구매합니다.
      </>
    ),
  },
  {
    num: "02",
    text: (
      <>
        카톡으로 <strong className="text-foreground">구매영수증 전달</strong>과 적립 받을{" "}
        <strong className="text-foreground">아인잉글리쉬 아이디</strong>
        <br />
        알려주시고 발송처리 요청해 주세요.
      </>
    ),
  },
  {
    num: "03",
    text: <>해당 내용 확인 후 발송처리 완료해드립니다.</>,
  },
  {
    num: "04",
    text: (
      <>
        <span className="inline-flex items-center gap-1">
          <span className="bg-primary text-primary-foreground text-[10px] font-black w-4 h-4 rounded-full inline-flex items-center justify-center">1</span>
          구매 확정,
        </span>{" "}
        <span className="inline-flex items-center gap-1">
          <span className="bg-primary text-primary-foreground text-[10px] font-black w-4 h-4 rounded-full inline-flex items-center justify-center">2</span>
          리뷰 작성,
        </span>{" "}
        <span className="inline-flex items-center gap-1">
          <span className="bg-primary text-primary-foreground text-[10px] font-black w-4 h-4 rounded-full inline-flex items-center justify-center">3</span>
          알림 받기와
        </span>{" "}
        <span className="inline-flex items-center gap-1">
          <span className="bg-primary text-primary-foreground text-[10px] font-black w-4 h-4 rounded-full inline-flex items-center justify-center">4</span>
          찜 누르기
        </span>
        <br />
        완료 후 카카오톡으로 포인트 적립 요청해 주세요.
      </>
    ),
  },
];

const notes = [
  "수강신청 시 포인트 사용 범위는 전체 수강료의 30%까지 사용할 수 있습니다.",
  "보유하신 포인트를 모두 소진하고자 한다면, 적립금 금액의 30% 이상의 수강료로 수강 신청해 주시면 됩니다.",
  "매월 1만 원씩 추가 적립을 받으시려면 매월 위와 같은 방법으로 구매 후 진행해 주시면 됩니다.",
  "네이버 쇼핑으로 구매한 수강권은 부분 환불이 되지 않습니다.",
  "해당 적립금 사용 전에만 한불 절차 진행이 가능합니다.",
  "적립금 사용 후 남은 적립금은 현금으로 드리지 않습니다.",
  "네이버 1인 1계정으로만 해당 수강권 월 1구매 가능합니다.",
];

const EventSection = () => {
  return (
    <section className="bg-muted py-14 px-5 border-t border-border">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <span className="text-primary font-bold tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-3 inline-block shadow-sm">
          🎉 THANK YOU EVENT
        </span>
        <h2 className="text-2xl font-black text-foreground mt-4 mb-2 leading-tight">
          재수강 감사 이벤트
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          네이버 쇼핑에서 3만 원 수강권 구매 시
        </p>
      </motion.div>

      {/* Coupon Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-card rounded-3xl border border-border shadow-card overflow-hidden mb-6"
      >
        <div className="bg-gradient-warm p-6 text-center border-b border-border">
          <div className="bg-gradient-hero text-primary-foreground font-black text-sm px-5 py-2 rounded-full inline-block shadow-brand mb-4">
            4만 원 적립 해드려요!
          </div>
          <div className="mt-2">
            <span className="text-xs text-muted-foreground tracking-wider font-bold">BONUS COUPON</span>
            <div className="text-4xl font-black text-gradient-hero mt-1">40,000원</div>
            <span className="text-xs text-muted-foreground mt-1 inline-block">재수강생 전용</span>
          </div>
        </div>
        <div className="p-5 text-center">
          <p className="text-foreground font-bold text-sm">
            월 1매 구입 시
          </p>
          <p className="text-lg font-black text-foreground mt-1">
            <span className="text-gradient-hero">1만 원 추가 적립!</span> 🎁
          </p>
        </div>
      </motion.div>

      {/* 참여 대상 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-card rounded-2xl border border-border shadow-card p-5 mb-6 text-center"
      >
        <h3 className="text-primary font-black text-base mb-2">🎯 참여 대상</h3>
        <div className="bg-muted rounded-xl px-4 py-3 inline-block">
          <span className="font-black text-foreground text-sm">재수강생</span>
        </div>
        <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
          매월(적립 시점에서 30일 경과 후) 1매씩 1회 구매 가능
        </p>
        <p className="text-muted-foreground text-[10px] mt-1">
          *신규 학생은 홈페이지에서 이벤트 진행중
        </p>
      </motion.div>

      {/* 진행 방법 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-6"
      >
        <h3 className="text-xl font-black text-foreground text-center mb-6">📋 진행 방법</h3>
        <div className="space-y-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border shadow-card p-4 flex items-start gap-4"
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-hero text-primary-foreground rounded-full flex items-center justify-center font-black text-xs shadow-brand">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-primary/20" />
                )}
              </div>
              <div className="pt-2">
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-muted-foreground text-[10px] text-center mt-3">
          *네이버 쇼핑으로 처음 결제해 보시는 분은<br />
          카톡으로 문의주시면 도와드리겠습니다.
        </p>
      </motion.div>

      {/* 참고 사항 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="bg-card rounded-2xl border border-border shadow-card p-5"
      >
        <h4 className="font-black text-foreground text-sm mb-4 text-center">📌 참고 사항</h4>
        <div className="space-y-2.5">
          {notes.map((note, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="text-primary font-black flex-shrink-0 mt-0.5">{i + 1}.</span>
              <span className="text-muted-foreground leading-relaxed">{note}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-border">
          <p className="text-[10px] text-muted-foreground text-center">
            *이외 추가 문의사항은 고객센터 1666-8701로 연락해 주세요.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EventSection;
