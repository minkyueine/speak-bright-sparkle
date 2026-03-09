import { motion } from "framer-motion";
import teacherImg from "@/assets/teacher-portrait.jpg";
import filipinoTeacherImg from "@/assets/filipino-teacher.jpg";
import businessImg from "@/assets/business-english.jpg";
import childImg from "@/assets/child-lesson.jpg";
import vipManagerImg from "@/assets/vip-manager.jpg";
import smartMypageImg from "@/assets/smart-mypage.jpg";
import heroImg from "@/assets/hero-video-lesson.jpg";
import teacherVideoImg from "@/assets/teacher-video-preview.jpg";

const usps = [
  {
    num: "01",
    title: "상위 1% 엘리트 전문 강사진 👩‍🏫",
    highlights: [
      "단순 아르바이트생 ❌",
      "명문대 교육학 전공 + TESOL 자격증 보유",
      "필리핀 최정예 강사진으로만 구성",
    ],
    accent: "특유의 압도적 친화력과 밝은 에너지로,\n왕초보도 금방 입이 트이는 기적!",
    img: filipinoTeacherImg,
    tags: ["경쟁률 331", "명문대/교육전공"],
    checkTitle: "✔ 서구권 대비 확실한 장점",
    benefits: [
      { icon: "✅", title: "무한한 인내심과 세심함", desc: "서구권 강사보다 훨씬 꼼꼼하게 수강생 페이스에 맞춰 기다려주고 교정" },
      { icon: "✅", title: "혹독한 역량 강화", desc: "아인 직영 교육센터에서 매월 발음 교정 및 티칭 스킬 보수 교육 의무 이수" },
    ],
  },
  {
    num: "02",
    title: "초밀착 피드백 시스템 📊",
    highlights: [
      "수업만 하고 끝나는 무책임한 화상영어 ❌",
      "수업 중 → 채팅창 통한 즉각 문장 교정",
      "수업 후 → 4대 영역 진단 리포트 제공",
    ],
    accent: "문법 · 어휘 · 발음 · 유창성\n강사가 직접 작성하는 입체적 진단!",
    img: businessImg,
    tags: ["문법 교정", "발음 분석", "실시간 리포트"],
    checkTitle: "✔ 내 약점을 부수는 복습 시스템",
    benefits: [
      { icon: "📝", title: "STEP 1 — 1:1 교정", desc: "내가 틀린 문장 vs 올바른 원어민식 표현을 비교하여 정확한 교정 포인트 제공" },
      { icon: "💬", title: "STEP 2 — 코멘트", desc: "매 수업마다 강사님의 따뜻하고 디테일한 코멘트로 동기부여와 방향성 제시" },
    ],
  },
  {
    num: "03",
    title: "1:1 전담 매니저 VIP 케어 🤝",
    highlights: [
      "결제만 유도하고 방치하는 곳 ❌",
      "수강생마다 전문 1:1 전담 매니저 배정",
      "레벨 진단 → 교재 추천 → 슬럼프 상담까지",
    ],
    accent: "든든한 페이스메이커가 되어 드립니다!",
    img: vipManagerImg,
    tags: ["슬럼프 극복", "1:1 VIP 케어"],
    checkTitle: "✔ 사람의 온기가 담긴 휴먼 케어",
    benefits: [
      { icon: "💛", title: "빠르고 친절한 소통", desc: "궁금한 점·불편한 점 → 카카오톡으로 즉각 해결" },
      { icon: "🗺️", title: "맞춤형 로드맵 제시", desc: "정기 학습 상황 체크 → 현재 레벨에 최적의 방향 안내" },
    ],
  },
  {
    num: "04",
    title: "'스마트 마이페이지' 📱",
    highlights: [
      "매번 매니저에게 연락하던 번거로움 ❌",
      "막대한 투자로 구축한 독자적 자동화 시스템",
      "눈치 보지 않고 내 마음대로 스마트 관리!",
    ],
    accent: null,
    img: smartMypageImg,
    tags: ["자동화 시스템", "투명한 관리"],
    checkTitle: "✔ 클릭 한 번으로 끝나는 압도적 편리함",
    benefits: [
      { icon: "💡", title: "자율 스케줄링", desc: "강사/시간 변경, 휴강, 장기 연기 → 셀프 신청 가능" },
      { icon: "💡", title: "투명한 학습 기록", desc: "일일평가서 + 월말 평가서 데이터 자동 누적 제공" },
      { icon: "💡", title: "행정 자동화", desc: "결제 내역 실시간 확인, 영수증·수강권 24시간 즉시 출력" },
    ],
  },
  {
    num: "05",
    title: '강사 실제 수업 영상\n100% 공개 🎬',
    highlights: [
      '"녹음 파일만 듣고 고르지 마세요!"',
      "보정된 사진 + 12초 음성만으로 선택 → 실망 😞",
      "아인은 업계 유일! 모든 강사의 실제 수업 영상까지 투명 공개",
    ],
    accent: null,
    img: teacherVideoImg,
    tags: ["업계 유일 🔴", "100% 투명 공개"],
    checkTitle: "✔ 실패 확률 0%! 내 맘에 쏙 드는 강사 매칭",
    benefits: [
      { icon: "▶️", title: "미리 보는 수업 스타일", desc: "차분한 vs 텐션 높은 스타일? 표정, 억양, 피드백 방식을 눈으로 직접 확인" },
      { icon: "▶️", title: "근거 있는 실력 자신감", desc: "완벽한 확신 없다면 절대 100% 공개 불가 → 아인만의 투명한 약속" },
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
        <h2 className="text-xl font-black text-foreground mt-4 mb-2 leading-tight">
          단순한 화상영어가 아닙니다.
          <br />
          <span className="text-gradient-hero">결과를 만드는 아인만의 5대 초격차 💎</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          비용을 낮추기 위해 타협하는<br />타사와 비교를 거부합니다.
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

              {/* Key highlights as scannable bullets */}
              <div className="space-y-1.5 mb-4">
                {usp.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0 font-bold">▸</span>
                    <span className={`${h.includes("❌") ? "text-muted-foreground" : "text-foreground font-semibold"} leading-relaxed`}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {usp.accent && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 mb-4">
                  <p className="text-primary font-black text-sm leading-relaxed whitespace-pre-line text-center">
                    {usp.accent}
                  </p>
                </div>
              )}
              
              <div className="bg-muted rounded-2xl p-4 border border-border">
                <h4 className="font-black text-foreground text-sm mb-3">{usp.checkTitle}</h4>
                <div className="space-y-3">
                  {usp.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="text-base mt-0.5 flex-shrink-0">{b.icon}</span>
                      <div className="text-sm">
                        <strong className="text-foreground">{b.title}</strong>
                        <p className="text-muted-foreground leading-relaxed mt-0.5">{b.desc}</p>
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
