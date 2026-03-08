import { motion } from "framer-motion";
import teacherImg from "@/assets/teacher-portrait.jpg";
import businessImg from "@/assets/business-english.jpg";
import childImg from "@/assets/child-lesson.jpg";
import heroImg from "@/assets/hero-video-lesson.jpg";

const usps = [
  {
    num: "01",
    title: "상위 1% 엘리트 전문 강사진 👩‍🏫",
    desc: "명문대 교육학 전공 및 TESOL 자격증을 보유한 필리핀 최정예 강사진. 압도적인 친화력과 밝은 에너지로, 왕초보도 금방 입이 트이는 기적을 만듭니다.",
    img: teacherImg,
    tags: ["경쟁률 100:1", "명문대/교육전공"],
    benefits: [
      { icon: "✅", title: "무한한 인내심", desc: "수강생 페이스에 맞춰 꼼꼼히 교정" },
      { icon: "✅", title: "매월 보수 교육", desc: "발음 교정 및 티칭 스킬 의무 이수" },
    ],
  },
  {
    num: "02",
    title: "초밀착 과학적 피드백 📊",
    desc: '수업 중 채팅창 즉각 교정, 수업 후 4대 영역(문법·어휘·발음·유창성) 진단 리포트가 제공됩니다.',
    img: businessImg,
    tags: ["문법 교정", "발음 분석", "실시간 리포트"],
    benefits: [
      { icon: "📝", title: "STEP 1", desc: "틀린 문장 vs 원어민식 표현 1:1 비교" },
      { icon: "💬", title: "STEP 2", desc: "매 수업 디테일한 강사 코멘트" },
    ],
  },
  {
    num: "03",
    title: "1:1 전담 매니저 VVIP 케어 🤝",
    desc: "레벨 진단부터 교재 추천, 학습 슬럼프 상담까지 든든한 페이스메이커가 되어 드립니다.",
    img: childImg,
    tags: ["슬럼프 극복", "1:1 VVIP 케어"],
    benefits: [
      { icon: "💛", title: "즉각 소통", desc: "카카오톡으로 빠르고 친절하게 해결" },
      { icon: "🗺️", title: "맞춤 로드맵", desc: "정기 학습 체크 후 방향성 안내" },
    ],
  },
  {
    num: "04",
    title: "스마트 마이페이지 📱",
    desc: "매니저에게 매번 연락할 필요 없이, 독자적인 자동화 시스템으로 스케줄·학습기록·결제를 한 곳에서 관리하세요.",
    img: heroImg,
    tags: ["완전 자동화", "투명한 관리"],
    benefits: [
      { icon: "💡", title: "자율 스케줄링", desc: "강사/시간 변경, 휴강 즉시 신청" },
      { icon: "💡", title: "학습 기록", desc: "일일/월말 평가서 자동 누적" },
    ],
  },
  {
    num: "05",
    title: "강사 실제 수업 영상 100% 공개 🎬",
    desc: '업계 유일! 보정된 사진이나 10초 녹음이 아닌, 실제 수업 진행 영상까지 투명하게 공개합니다.',
    img: teacherImg,
    tags: ["업계 유일 🔴", "100% 투명 공개"],
    benefits: [
      { icon: "▶️", title: "수업 스타일 미리보기", desc: "표정, 억양, 피드백 방식 직접 확인" },
      { icon: "▶️", title: "실력 자신감", desc: "공개할 수 있는 아인만의 투명한 약속" },
    ],
  },
];

const USPSection = () => {
  return (
    <section className="bg-card py-14 px-5 border-b border-border">
      <div className="text-center mb-10">
        <span className="text-primary font-bold text-xs bg-primary/10 px-4 py-1.5 rounded-full shadow-sm">
          🚀 SUPER GAP SYSTEM
        </span>
        <h2 className="text-2xl font-black text-foreground mt-4 mb-2 leading-tight">
          결과를 만드는
          <br />
          <span className="text-gradient-hero">아인만의 5대 초격차 💎</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          비용을 낮추기 위해 타협하는 타사와 비교를 거부합니다.
        </p>
      </div>

      <div className="space-y-8">
        {usps.map((usp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-card border border-border"
          >
            <div className="relative h-48">
              <img src={usp.img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                {usp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${
                      tag.includes("🔴")
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground/20 backdrop-blur-md text-primary-foreground border border-primary-foreground/30"
                    } text-[10px] font-bold px-2.5 py-1 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <div className="text-primary font-black text-lg mb-1 opacity-80">{usp.num}</div>
              <h3 className="text-lg font-black text-foreground mb-3 leading-snug whitespace-pre-line">
                {usp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">{usp.desc}</p>
              <div className="bg-muted rounded-2xl p-4 border border-border space-y-2.5">
                {usp.benefits.map((b, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="text-base mt-0.5">{b.icon}</span>
                    <div className="text-sm">
                      <strong className="text-foreground">{b.title}:</strong>{" "}
                      <span className="text-muted-foreground">{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default USPSection;
