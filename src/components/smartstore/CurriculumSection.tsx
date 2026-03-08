import { motion } from "framer-motion";

const courses = [
  {
    category: "JUNIOR 🧒",
    subtitle: "놀이처럼 배우는 우리 아이 첫 영어",
    gradient: "from-blue-500 to-blue-600",
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-50",
    dotColor: "bg-blue-500",
    items: [
      { title: "파닉스 마스터", desc: "알파벳 음가부터 정확한 발음까지, 기초 필수 코스", level: "Level 1-2" },
      { title: "미국 교과서 읽기", desc: "베스트셀러 교재로 일상 회화와 기초 문법 자연 습득", level: "Level 3-5" },
      { title: "라즈키즈 원서 토론", desc: "원서 독후 활동으로 독해력과 말하기 동시 훈련", level: "전 레벨" },
    ],
  },
  {
    category: "ADULT BASIC ✈️",
    subtitle: "당장 써먹는 성인 실전 영어",
    gradient: "bg-gradient-hero",
    accentColor: "text-primary",
    bgAccent: "bg-primary/5",
    dotColor: "bg-primary",
    best: true,
    items: [
      { title: "왕초보 입트이기", desc: "원어민 핵심 패턴 100가지 반복 훈련", level: "Level 1-3" },
      { title: "여행 서바이벌", desc: "해외 여행, 카페 주문, 공항 체크인 상황별 대비", level: "Level 4-6" },
      { title: "자유 프리토킹", desc: "관심 주제로 원어민과 자유 대화", level: "Level 5+" },
    ],
  },
  {
    category: "PROFESSIONAL 💼",
    subtitle: "커리어를 바꾸는 비즈니스 영어",
    gradient: "from-gray-800 to-gray-900",
    accentColor: "text-gray-700",
    bgAccent: "bg-gray-50",
    dotColor: "bg-gray-700",
    items: [
      { title: "비즈니스 이메일/미팅", desc: "영문 이메일, PT, 바이어 미팅 실무 영어", level: "Level 7-8" },
      { title: "CNN/BBC 뉴스 토론", desc: "글로벌 이슈로 논리적 원어민식 토론 훈련", level: "Level 9-10" },
      { title: "IELTS/TOEFL 스피킹", desc: "시험 유형별 전문 훈련으로 목표 점수 달성", level: "Level 7+" },
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section className="bg-muted py-14 px-5 border-b border-border">
      <div className="text-center mb-10">
        <span className="text-primary font-bold tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
          📚 10-STEP MASTER PLAN
        </span>
        <h2 className="text-2xl font-black text-foreground mb-3 leading-tight">
          "교재가 부실할까 봐 걱정?" 🤷
          <br />
          <span className="text-gradient-hero text-xl">업계 최고 수준 커리큘럼</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          왕초보부터 비즈니스 프레젠테이션까지
          <br />15개 이상의 코스 로드맵! 🎯
        </p>
      </div>

      {/* Level Roadmap - mobile version */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-center bg-card p-4 rounded-2xl shadow-card mb-8 border border-border relative"
      >
        <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-muted -translate-y-1/2 rounded-full z-0" />
        <div className="absolute top-1/2 left-8 w-1/3 h-1.5 bg-gradient-hero -translate-y-1/2 rounded-full z-0" />
        {[
          { label: "1-3", sub: "입문", active: true },
          { label: "4-6", sub: "초중급", active: true },
          { label: "7-8", sub: "중고급", active: false },
          { label: "9-10", sub: "네이티브", active: false },
        ].map((level) => (
          <div key={level.label} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                level.active ? "border-primary" : "border-border"
              } bg-card border-[3px] rounded-full flex items-center justify-center font-black text-foreground text-xs shadow-md mb-1`}
            >
              {level.label}
            </div>
            <span className={`font-bold text-[10px] ${level.active ? "text-foreground" : "text-muted-foreground"}`}>
              {level.sub}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Course Cards */}
      <div className="space-y-6">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-card rounded-3xl shadow-card overflow-hidden border border-border ${
              course.best ? "shadow-brand border-2 border-primary relative" : ""
            }`}
          >
            {course.best && (
              <div className="absolute top-0 right-0 bg-brand-red text-primary-foreground font-black px-3 py-1 rounded-bl-xl text-[10px] z-20 shadow-md">
                🔥 가장 인기!
              </div>
            )}
            <div className={`${course.best ? "bg-gradient-hero" : `bg-gradient-to-r ${course.gradient}`} p-5 text-center`}>
              <h3 className="text-lg font-black text-primary-foreground mb-1">{course.category}</h3>
              <p className="text-primary-foreground/70 text-xs">{course.subtitle}</p>
            </div>
            <div className="p-5">
              <ul className="space-y-4">
                {course.items.map((item, j) => (
                  <li key={j} className="relative pl-5 border-l-2 border-border last:border-l-transparent">
                    <span className={`absolute -left-[7px] top-0.5 w-3 h-3 ${course.dotColor} rounded-full border-[3px] border-card`} />
                    <h4 className="font-bold text-foreground text-sm mb-0.5">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    <span className={`inline-block mt-1.5 text-[10px] font-bold ${course.accentColor} ${course.bgAccent} px-2 py-0.5 rounded`}>
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Free Textbook Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 bg-card rounded-3xl p-6 border border-border shadow-card text-center"
      >
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-3 shadow-sm">
          <span className="text-base">🎁</span>
          <span className="font-bold text-xs">추가 결제 절대 NO!</span>
        </div>
        <h3 className="text-xl font-black text-foreground mb-3">
          프리미엄 전 과목 교재
          <br />
          <span className="text-primary border-b-4 border-primary/30">무제한 열람! 📖</span>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          아인 교육 연구소에서 매달 업데이트하는 최신 자체 교재!
          내 실력에 맞게 마음껏 활용하세요. ✨
        </p>
      </motion.div>
    </section>
  );
};

export default CurriculumSection;
