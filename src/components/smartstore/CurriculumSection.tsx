import { motion } from "framer-motion";

const courses = [
  {
    category: "JUNIOR COURSE 🧒",
    subtitle: "놀이처럼 배우는 우리 아이 첫 영어",
    gradient: "from-blue-500 to-blue-600",
    borderColor: "border-blue-100",
    accentColor: "text-blue-600",
    bgAccent: "bg-blue-50",
    dotColor: "bg-blue-500",
    items: [
      { title: "파닉스 마스터 (Phonics)", desc: "알파벳 음가부터 정확한 발음 기호까지, 영어를 처음 접하는 아이를 위한 필수 기초 코스", level: "Level 1-2" },
      { title: "미국 교과서 읽기 (Let's Go)", desc: "세계적인 베스트셀러 교재를 활용하여 일상 회화 패턴과 기초 문법을 자연스럽게 습득", level: "Level 3-5" },
      { title: "라즈키즈 원서 토론 (Raz-kids)", desc: "수천 권의 원서를 읽고 강사님과 독후 활동을 진행하며 독해력과 논리적인 말하기 동시 훈련", level: "전 레벨 맞춤" },
    ],
  },
  {
    category: "ADULT BASIC ✈️",
    subtitle: "당장 써먹는 성인 생존 실전 영어",
    gradient: "bg-gradient-hero",
    borderColor: "border-primary",
    accentColor: "text-primary",
    bgAccent: "bg-primary/5",
    dotColor: "bg-primary",
    best: true,
    items: [
      { title: "왕초보 입트이기 (Pattern)", desc: "문법 강박증 탈출! 원어민이 가장 많이 쓰는 100가지 핵심 패턴을 반복 훈련하여 즉각 발화", level: "Level 1-3" },
      { title: "일상/여행 서바이벌 (Survival)", desc: "해외 여행, 카페 주문, 공항 체크인 등 실제 상황별 영어를 완벽하게 대비", level: "Level 4-6" },
      { title: "자유 토론 프리토킹 (Free Talk)", desc: "정해진 교재 없이 내가 좋아하는 관심 주제로 원어민과 자유롭게 대화하며 실력 극대화", level: "Level 5+" },
    ],
  },
  {
    category: "PROFESSIONAL 💼",
    subtitle: "커리어를 바꾸는 고급 비즈니스 영어",
    gradient: "from-gray-800 to-gray-900",
    borderColor: "border-gray-200",
    accentColor: "text-gray-700",
    bgAccent: "bg-gray-50",
    dotColor: "bg-gray-700",
    items: [
      { title: "비즈니스 이메일/미팅 (BIZ)", desc: "영문 이메일 작성부터 프레젠테이션, 바이어 미팅까지 실무에서 바로 써먹는 비즈니스 영어", level: "Level 7-8" },
      { title: "CNN/BBC 뉴스 토론 (News)", desc: "최신 글로벌 이슈를 주제로 논리적이고 세련된 원어민식 토론 훈련", level: "Level 9-10" },
      { title: "IELTS/TOEFL 스피킹 (Test Prep)", desc: "시험 유형별 전문 훈련으로 목표 점수를 확실하게 달성하는 코스", level: "Level 7+" },
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section className="bg-muted py-24 px-6 border-b border-border">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest text-sm bg-primary/10 px-5 py-2 rounded-full mb-6 inline-block shadow-sm">
          📚 10-STEP MASTER PLAN
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
          "교재가 부실할까 봐 걱정이신가요?" 🤷
          <br />
          <span className="text-gradient-hero">
            업계 최고 수준의 방대한 커리큘럼
          </span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          알파벳 조차 모르는 왕초보부터 고급 비즈니스 프레젠테이션까지.
          <br />
          15개 이상의 완벽한 코스 로드맵이 준비되어 있습니다! 🎯
        </p>
      </div>

      {/* Level Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto hidden md:flex justify-between items-center bg-card p-8 rounded-4xl shadow-card mb-14 border border-border relative"
      >
        <div className="absolute top-1/2 left-16 right-16 h-2 bg-muted -translate-y-1/2 rounded-full z-0" />
        <div className="absolute top-1/2 left-16 w-1/3 h-2 bg-gradient-hero -translate-y-1/2 rounded-full z-0" />
        {[
          { label: "L 1-3", sub: "입문/왕초보", active: true },
          { label: "L 4-6", sub: "초중급/의사표현", active: true },
          { label: "L 7-8", sub: "중고급/심화토론", active: false },
          { label: "L 9-10", sub: "최상위/네이티브", active: false },
        ].map((level) => (
          <div key={level.label} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-16 h-16 ${
                level.active ? "border-primary" : "border-border"
              } bg-card border-4 rounded-full flex items-center justify-center font-black text-foreground text-xl shadow-lg mb-2`}
            >
              {level.label}
            </div>
            <span className={`font-bold ${level.active ? "text-foreground" : "text-muted-foreground"}`}>
              {level.sub}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Course Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`bg-card rounded-4xl shadow-card overflow-hidden hover:-translate-y-2 transition duration-300 border ${course.borderColor} ${
              course.best ? "md:scale-105 z-10 shadow-brand border-2 border-primary relative" : ""
            }`}
          >
            {course.best && (
              <div className="absolute top-0 right-0 bg-brand-red text-primary-foreground font-black px-4 py-1 rounded-bl-xl text-xs z-20 shadow-md">
                🔥 가장 인기!
              </div>
            )}
            <div className={`${course.best ? "bg-gradient-hero" : `bg-gradient-to-r ${course.gradient}`} p-8 text-center`}>
              <h3 className="text-2xl font-black text-primary-foreground mb-2">
                {course.category}
              </h3>
              <p className="text-primary-foreground/70 text-sm">{course.subtitle}</p>
            </div>
            <div className="p-8">
              <ul className="space-y-6">
                {course.items.map((item, j) => (
                  <li key={j} className="relative pl-6 border-l-2 border-border last:border-l-transparent">
                    <span className={`absolute -left-2 top-0 w-4 h-4 ${course.dotColor} rounded-full border-4 border-card`} />
                    <h4 className="font-bold text-foreground text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <span className={`inline-block mt-2 text-xs font-bold ${course.accentColor} ${course.bgAccent} px-2 py-1 rounded`}>
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
        className="max-w-5xl mx-auto mt-16 bg-card rounded-4xl p-10 md:p-14 border border-border shadow-card text-center"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full mb-4 shadow-sm">
          <span className="text-xl">🎁</span>
          <span className="font-bold text-sm">레벨업/코스 변경 시 추가 결제 절대 NO!</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
          수백 권의 프리미엄 전 과목 교재를
          <br />
          <span className="text-primary border-b-4 border-primary/30">무제한으로 열람하세요! 📖</span>
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          시중의 뻔한 교재가 아닙니다. 아인의 교육 연구소에서 매달 업데이트하는 최신 트렌드 자체 교재!
          내 실력과 목적에 맞게 마음껏 활용하세요. ✨
        </p>
      </motion.div>
    </section>
  );
};

export default CurriculumSection;
