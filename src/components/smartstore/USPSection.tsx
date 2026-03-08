import { motion } from "framer-motion";
import teacherImg from "@/assets/teacher-portrait.jpg";
import businessImg from "@/assets/business-english.jpg";
import childImg from "@/assets/child-lesson.jpg";
import heroImg from "@/assets/hero-video-lesson.jpg";

const usps = [
  {
    num: "01",
    title: "상위 1% 엘리트 전문 강사진 👩‍🏫",
    desc: "아인잉글리쉬는 단순히 영어만 할 줄 아는 아르바이트생을 쓰지 않습니다. 명문대 교육학 전공 및 TESOL 자격증을 보유한 필리핀 최정예 강사진으로 구성되어 있습니다. 필리핀 강사님 특유의 압도적인 친화력과 밝은 에너지로, 영어를 두려워하는 왕초보도 금방 입이 트이는 기적을 만듭니다.",
    img: teacherImg,
    tags: ["경쟁률 100:1", "명문대/교육전공"],
    benefits: [
      { icon: "✅", title: "무한한 인내심과 세심함", desc: "서구권 강사보다 훨씬 꼼꼼하게 수강생의 페이스에 맞춰 기다려주고 교정해 드립니다." },
      { icon: "✅", title: "혹독한 역량 강화", desc: "아인 직영 교육센터에서 매월 발음 교정 및 티칭 스킬 보수 교육을 의무적으로 이수합니다." },
    ],
  },
  {
    num: "02",
    title: "입체적이고 과학적인 초밀착 피드백 📊",
    desc: '수업만 하고 끝나는 무책임한 화상영어가 아닙니다. 수업 중에는 채팅창을 통한 즉각적인 문장 교정이, 수업 후에는 강사가 직접 작성한 4대 영역(문법, 어휘, 발음, 유창성) 진단 리포트가 제공됩니다.',
    img: businessImg,
    tags: ["문법 교정", "발음 분석", "실시간 리포트"],
    benefits: [
      { icon: "📝", title: "STEP 1", desc: "내가 틀린 문장과 올바른 원어민식 표현 1:1 비교" },
      { icon: "💬", title: "STEP 2", desc: "매 수업 강사님의 따뜻하고 디테일한 코멘트" },
    ],
  },
  {
    num: "03",
    title: "1:1 전담 매니저의 VVIP 밀착 케어 🤝",
    desc: "결제만 유도하고 방치하는 곳과는 다릅니다. 아인잉글리쉬는 수강생마다 전문 교육을 받은 1:1 전담 매니저가 배정되어, 레벨 진단부터 교재 추천, 학습 슬럼프 상담까지 든든한 페이스메이커가 되어 드립니다.",
    img: childImg,
    tags: ["슬럼프 극복", "1:1 VVIP 케어"],
    benefits: [
      { icon: "💛", title: "빠르고 친절한 소통", desc: "궁금한 점이나 불편한 점 발생 시 카카오톡을 통해 즉각적이고 친절하게 해결해 드립니다." },
      { icon: "🗺️", title: "맞춤형 로드맵 제시", desc: "정기적인 학습 상황 체크를 통해 현재 레벨에 가장 적합한 방향성을 안내합니다." },
    ],
  },
  {
    num: "04",
    title: "오랜 연구로 완성된 '스마트 마이페이지' 📱",
    desc: "이전처럼 매번 매니저에게 연락해서 스케줄 변경을 요청하던 번거로움은 잊으세요! 오랜 기간 막대한 투자를 통해 아인만의 독자적인 마이페이지 자동화 시스템을 구축했습니다.",
    img: heroImg,
    tags: ["완전 자동화", "투명한 관리", "자체 개발 시스템"],
    benefits: [
      { icon: "💡", title: "자율 스케줄링", desc: "강사/시간 변경, 학생 휴강, 장기 연기 등 눈치 보지 않고 즉시 신청 가능" },
      { icon: "💡", title: "투명한 학습 기록", desc: "매 수업 일일평가서 및 세밀한 월말 평가서 데이터 자동 누적 제공" },
      { icon: "💡", title: "스마트 행정 자동화", desc: "결제 내역 실시간 확인, 영수증 및 수강권(증빙용) 24시간 즉시 출력 가능" },
    ],
  },
  {
    num: "05",
    title: '"녹음 파일만 듣고 고르지 마세요!" 🎬\n강사 실제 수업 영상 100% 공개',
    desc: '보정된 프로필 사진과 10초짜리 짧은 음성 녹음만 듣고 선생님을 선택했다가, 막상 나와 스타일이 맞지 않아 실망하신 적 있으신가요? 아인잉글리쉬는 업계에서 유일하게 모든 강사진의 "자기소개 영상"은 물론, "실제 수업 진행 영상"까지 투명하게 공개합니다.',
    img: teacherImg,
    tags: ["업계 유일 🔴", "100% 투명 공개"],
    benefits: [
      { icon: "▶️", title: "미리 보는 수업 스타일", desc: "차분한 스타일? 텐션 높은 스타일? 선생님의 실제 표정, 억양, 피드백 방식을 눈으로 직접 확인하세요." },
      { icon: "▶️", title: "근거 있는 완벽한 실력 자신감", desc: "강사 실력에 완벽한 확신이 없다면 절대 100% 공개할 수 없는 아인만의 투명한 약속입니다." },
    ],
  },
];

const USPSection = () => {
  return (
    <section className="bg-card py-24 px-6 border-b border-border">
      <div className="text-center mb-20">
        <span className="text-primary font-bold text-sm md:text-base bg-primary/10 px-5 py-2 rounded-full shadow-sm">
          🚀 SUPER GAP SYSTEM
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mt-6 mb-4 leading-tight">
          단순한 화상영어가 아닙니다.
          <br />
          결과를 만드는{" "}
          <span className="text-gradient-hero">아인만의 5대 초격차 💎</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          비용을 낮추기 위해 타협하는 타사와 비교를 거부합니다.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-20">
        {usps.map((usp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-stretch gap-10`}
          >
            <div className="w-full md:w-5/12 relative rounded-4xl overflow-hidden shadow-2xl group min-h-[300px]">
              <img
                src={usp.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {usp.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${
                      tag.includes("🔴") || tag.includes("인기")
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary-foreground/20 backdrop-blur-md text-primary-foreground border border-primary-foreground/30"
                    } text-xs font-bold px-3 py-1.5 rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <div className="text-primary font-black text-2xl mb-2 opacity-80">
                {usp.num}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight whitespace-pre-line leading-tight">
                {usp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {usp.desc}
              </p>
              <div className="bg-muted rounded-3xl p-6 border border-border">
                <div className="space-y-3">
                  {usp.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5">{b.icon}</span>
                      <div>
                        <strong className="text-foreground">{b.title}:</strong>{" "}
                        <span className="text-muted-foreground text-sm">{b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default USPSection;
