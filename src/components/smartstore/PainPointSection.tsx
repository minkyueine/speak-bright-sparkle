import { motion } from "framer-motion";
import childImg from "@/assets/child-lesson.jpg";
import painAdultImg from "@/assets/pain-adult.jpg";
import teacherImg from "@/assets/teacher-portrait.jpg";

const painPoints = [
  {
    case: "CASE 01",
    caseLabel: "우리 아이 😢",
    title: '"매일 학원에 가는데,\n외국인 앞에선 꿀 먹은 벙어리예요."',
    quote: '"파닉스도 다 뗐고, 단어 시험도 맨날 백 점이라는데... 정작 영어로 말을 걸면 입을 꾹 닫아버려요."',
    desc: '언어가 아닌 "과목"으로 영어를 암기하고 있기 때문입니다. 틀리면 혼나는 주입식 환경에서는 아이가 절대 자신 있게 입을 열 수 없습니다.',
    img: childImg,
    color: "border-brand-gold",
    badgeColor: "bg-brand-gold text-foreground",
    quoteColor: "border-l-brand-gold",
  },
  {
    case: "CASE 02",
    caseLabel: "어른/직장인 😰",
    title: '"머릿속으로 영작하느라,\n대화 타이밍을 다 놓쳐버립니다."',
    quote: '"완벽한 문장을 만들려다 보니 결국 Yes, Yes만 하다가 끝나요."',
    desc: "상대방의 말을 한국어로 해석 ➔ 내 할 말을 한국어로 생각 ➔ 다시 영어로 번역. 이 복잡한 필터를 거치는 동안 대화는 이미 지나가 버립니다.",
    img: painAdultImg,
    color: "border-primary",
    badgeColor: "bg-primary text-primary-foreground",
    quoteColor: "border-l-primary",
  },
  {
    case: "CASE 03",
    caseLabel: "공통의 문제 😵",
    title: '"외국인만 다가오면\n머릿속이 하얗게 백지장으로 변해요."',
    quote: '"How are you? 같이 아는 말인데도 막상 눈을 마주치면 당황해서 시선을 피하게 됩니다."',
    desc: "지극히 당연한 현상입니다. 수능과 토익 점수는 높을지 몰라도, 막상 눈을 마주치고 소리 내어 말해본 '실전 경험'이 몇 시간도 되지 않기 때문입니다.",
    img: teacherImg,
    color: "border-brand-red",
    badgeColor: "bg-brand-red text-primary-foreground",
    quoteColor: "border-l-brand-red",
  },
];

const PainPointSection = () => {
  return (
    <section className="bg-brand-darker py-14 px-5 relative">
      <div className="text-center mb-10 relative z-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-brand-red font-black tracking-widest text-xs bg-destructive/10 px-4 py-2 rounded-full mb-4 inline-block shadow-lg border border-brand-red/20"
        >
          🚨 긴급 진단 리포트
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-black text-primary-foreground leading-tight mb-4"
        >
          시간과 돈을 수없이 투자했는데,
          <br />
          <span className="text-gradient-gold inline-block border-b-4 border-primary pb-1 text-xl">
            우리의 영어는 왜 항상 제자리일까요? 🤔
          </span>
        </motion.h2>
        <p className="text-secondary-foreground/60 text-sm font-light">
          나, 그리고 우리 아이의 이야기인지 확인해 보세요.
        </p>
      </div>

      <div className="space-y-6 relative z-10">
        {painPoints.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-card rounded-3xl shadow-xl overflow-hidden border-l-[6px] ${p.color}`}
          >
            <div className="relative h-48">
              <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent flex items-end p-4">
                <span className={`${p.badgeColor} font-black px-3 py-1 rounded-lg text-xs`}>
                  {p.case}. {p.caseLabel}
                </span>
              </div>
            </div>
            <div className="p-5 bg-gradient-warm">
              <h3 className="text-lg font-black text-foreground mb-3 leading-snug whitespace-pre-line">
                {p.title}
              </h3>
              <div className={`bg-muted p-3 rounded-xl mb-3 border-l-4 ${p.quoteColor}`}>
                <p className="text-foreground/70 italic font-medium text-sm">{p.quote}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">{p.desc.split(".")[0]}.</strong>{" "}
                {p.desc.split(".").slice(1).join(".")}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center relative z-10"
      >
        <div className="bg-primary/10 backdrop-blur-md border border-primary/30 rounded-2xl p-6">
          <p className="text-2xl font-black text-primary-foreground mb-2">
            💡 해답은 단 하나.
          </p>
          <p className="text-base text-secondary-foreground/80 font-medium leading-relaxed">
            "영어를 <span className="text-brand-gold font-black">입으로 말하는 실전 경험</span>을
            압도적으로 늘려야 합니다."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PainPointSection;
