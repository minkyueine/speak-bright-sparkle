import { motion } from "framer-motion";

const courses = [
  {
    category: "JUNIOR COURSE 🧒",
    subtitle: "놀이처럼 배우는 우리 아이 첫 영어",
    gradient: "from-blue-500 to-blue-600",
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
    accentColor: "text-primary",
    bgAccent: "bg-primary/5",
    dotColor: "bg-primary",
    best: true,
    items: [
      { title: "왕초보 입트이기 (Pattern)", desc: "문법 강박증 탈출! 원어민이 가장 많이 쓰는 100가지 핵심 패턴을 반복 훈련하여 즉각 발화", level: "Level 1-3" },
      { title: "상황별 여행/생존 회화", desc: "공항, 호텔, 식당, 카페 등 해외 현지에서 발생할 수 있는 모든 상황을 롤플레잉하며 실전 대비", level: "Level 3-5" },
      { title: "프리토킹 입문 (Daily Talk)", desc: "정해진 대본 없이, 날씨, 취미, 일상 등의 가벼운 주제로 자유롭게 대화하며 자신감 200% 충전", level: "Level 4-6" },
    ],
  },
  {
    category: "ADVANCED CAREER 💼",
    subtitle: "프로페셔널한 스펙업 & 고급 토론",
    gradient: "from-gray-800 to-gray-900",
    accentColor: "text-gray-700",
    bgAccent: "bg-gray-50",
    dotColor: "bg-gray-700",
    items: [
      { title: "비즈니스 실무 (Business)", desc: "영문 이메일 작성법, 바이어 미팅, 화상 회의, 프레젠테이션 등 세련된 고급 비즈니스 어휘 마스터", level: "Level 6-8" },
      { title: "영자 신문 & 뉴스 토론", desc: "매주 업데이트되는 글로벌 시사, 경제 이슈 기사를 읽고 원어민 강사와 깊이 있는 찬반 토론 진행", level: "Level 7-10" },
      { title: "공인 스피킹/면접 대비", desc: "OPIc, TOEIC Speaking 및 외국계 기업 영어 면접 기출 문제를 바탕으로 한 실전 모의고사 훈련", level: "Level 6-9" },
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
        <h2 className="text-xl font-black text-foreground mb-3 leading-tight">
          "교재가 부실할까 봐<br />걱정이신가요?" 🤷
          <br />
          <span className="text-gradient-hero text-lg">업계 최고 수준의 방대한 커리큘럼</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
          알파벳조차 모르는 왕초보부터<br />고급 비즈니스 프레젠테이션까지.
          <br /><br />
          단순히 '프리토킹'만 하다가 끝나는 수업이 아닙니다.
          <br />당신의 목표가 무엇이든 아인잉글리쉬에는<br />
          <strong className="text-foreground">15개 이상의 완벽한 코스 로드맵</strong>이 준비되어 있습니다. 🎯
        </p>
      </div>

      {/* Level Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-between items-center bg-card p-4 rounded-2xl shadow-card mb-8 border border-border relative"
      >
        <div className="absolute top-1/2 left-8 right-8 h-1.5 bg-muted -translate-y-1/2 rounded-full z-0" />
        <div className="absolute top-1/2 left-8 w-1/3 h-1.5 bg-gradient-hero -translate-y-1/2 rounded-full z-0" />
        {[
          { label: "L 1-3", sub: "입문/왕초보", active: true },
          { label: "L 4-6", sub: "초중급/의사표현", active: true },
          { label: "L 7-8", sub: "중고급/심화토론", active: false },
          { label: "L 9-10", sub: "최상위/네이티브", active: false },
        ].map((level) => (
          <div key={level.label} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-10 h-10 ${
                level.active ? "border-primary" : "border-border"
              } bg-card border-[3px] rounded-full flex items-center justify-center font-black text-foreground text-[10px] shadow-md mb-1`}
            >
              {level.label}
            </div>
            <span className={`font-bold text-[9px] ${level.active ? "text-foreground" : "text-muted-foreground"} text-center leading-tight`}>
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
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
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

      {/* 교재 안내 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-card rounded-2xl p-4 border border-border shadow-card"
      >
        <p className="text-muted-foreground text-xs leading-relaxed text-center">
          💡 위 모든 교재와 커리큘럼은 <strong className="text-foreground">추가 결제 없이 전면 무료</strong>로 제공되며,
          수강 중 언제든지 매니저를 통해 코스를 자유롭게 변경하실 수 있습니다.
        </p>
      </motion.div>

      {/* Raz-kids 독점 제휴 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-gradient-warm rounded-3xl p-6 border-2 border-primary shadow-brand"
      >
        <div className="text-center mb-4">
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mb-2">
            🤝 독점 제휴 · 타사 월 3만 원 상당 전면 무료
          </span>
          <h3 className="text-lg font-black text-foreground mb-1">
            전 세계 800만의 선택
          </h3>
          <p className="text-primary font-black text-xl">
            라즈키즈(Raz-kids) 연동 📚
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          미국/캐나다 공립학교 정식 채택 도서관! 약 3천 권 이상의 방대한 영어 원서를 마음껏 읽고 듣습니다.
          아인 강사님과의 독후 토론 활동으로 원서의 흡수율을 200% 끌어올리세요.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <span className="text-xl mb-1 block">📚</span>
            <div className="text-foreground font-black text-base">3,000+ 권</div>
            <div className="text-muted-foreground text-[10px]">방대한 영어 원서</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <span className="text-xl mb-1 block">📈</span>
            <div className="text-foreground font-black text-base">29개 레벨</div>
            <div className="text-muted-foreground text-[10px]">유아부터 성인까지 완벽 호환</div>
          </div>
        </div>
      </motion.div>

      {/* Free Textbook Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 bg-card rounded-3xl p-6 border border-border shadow-card text-center"
      >
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-3 shadow-sm">
          <span className="text-base">🎁</span>
          <span className="font-bold text-xs">레벨업/코스 변경 시 추가 결제 절대 NO!</span>
        </div>
        <h3 className="text-xl font-black text-foreground mb-2">
          이 모든 프리미엄 콘텐츠가
        </h3>
        <p className="text-primary font-black text-2xl mb-3">
          추가 결제 없이 0원! 🎉
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          수백 권의 프리미엄 전 과목 교재를<br />무제한으로 열람하세요!
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          시중의 뻔한 교재가 아닙니다. 아인의 교육 연구소에서 매달 업데이트하는 최신 트렌드 자체 교재!
          내 실력과 목적에 맞게 마음껏 활용하세요. ✨
        </p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            교재비 명목으로 결제를 유도하는 타사와<br /><strong className="text-foreground">확실하게 비교해 보세요.</strong>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CurriculumSection;
