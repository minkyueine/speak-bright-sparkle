import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "\uCCB4\uD5D8 \uACB0\uC81C (\uB2E8\uB3C8 10\uC6D0) \uD83D\uDCB3",
    points: [
      "\uC2A4\uB9C8\uD2B8\uD3F0\uC774\uB098 PC\uB85C \uB124\uC774\uBC84 \uC2A4\uD1A0\uC5B4 \uC811\uC18D",
      "\uCD5C\uC0C1\uB2E8\uC758 [10\uC6D0 \uACB0\uC81C] \uC9C4\uD589",
      "\uBD80\uB2F4 \uC5C6\uC774 \uBAA8\uB4E0 \uD504\uB9AC\uBBF8\uC5C4 \uC2DC\uC2A4\uD15C \uACBD\uD5D8 \uC900\uBE44!",
    ],
    highlight: false,
  },
  {
    num: 2,
    title: "\uCE74\uD1A1 \uD574\uD53C\uCF5C & \uC2A4\uCF00\uC904 \uC870\uC728 \uD83D\uDCF1",
    points: [
      "\uCE74\uD1A1\uCC44\uB110 \uC544\uC778\uD654\uC0C1\uC601\uC5B4\uB85C \uBA54\uC138\uC9C0 \uB0A8\uAE30\uAE30 (\uBB34\uB8CC\uCCB4\uD5D8 \uAD6C\uB9E4\uC644\uB8CC, \uAD6C\uB9E4\uC790\uC131\uD568)",
      "1:1 \uC804\uB2F4 \uB9E4\uB2C8\uC800\uAC00 \uBB34\uB8CC\uCCB4\uD5D8 \uC2E0\uCCAD\uC11C \uB9C1\uD06C \uC804\uC1A1",
      "\uC608\uC0C1\uD558\uB294 \uC815\uADDC\uC218\uC5C5\uACFC \uC720\uC0AC\uD55C \uC2DC\uAC04\uB300\uB85C \uC2A4\uCF00\uC904 \uD655\uC815",
    ],
    highlight: false,
  },
  {
    num: 3,
    title: "\uC7A5\uBE44 \uD14C\uC2A4\uD2B8 \uBC0F OT \uD83D\uDDA5\uFE0F",
    points: [
      "\uAE30\uACC4\uCE58\uB77C\uB3C4 \uAC71\uC815 NO!",
      "Zoom \uC124\uCE58 \u2192 \uB9C8\uC774\uD06C/\uCE74\uBA54\uB77C \uD14C\uC2A4\uD2B8\uAE4C\uC9C0",
      "\uB9E4\uB2C8\uC800\uAC00 \uC6D0\uACA9\uC73C\uB85C \uAF3C\uAF3C\uD558\uAC8C \uC810\uAC80(\uD76C\uB9DD\uD558\uC2DC\uB294 \uBD84\uD55C\uD574\uC11C \uC9C4\uD589)",
    ],
    highlight: false,
  },
  {
    num: 4,
    title: "\uBCF8\uC218\uC5C5 & \uC785\uCCB4\uC801 \uB808\uBCA8 \uC9C4\uB2E8 \uD83C\uDF89",
    points: [
      "\uC6D0\uC5B4\uBBFC \uAC15\uC0AC\uB2D8\uACFC \uBD80\uB2F4 \uC5C6\uC774 1:1 \uB300\uD654",
      "\uC218\uC5C5 \uC9C1\uD6C4 \u2192 \uAC15\uC810/\uC57D\uC810 \uC0C1\uC138 \uBD84\uC11D",
      "\uC5B4\uD718\u00B7\uBB38\uBC95\u00B7\uC720\uCC3D\uC131\u00B7\uBC1C\uC74C '\uC785\uCCB4\uC801 \uB808\uBCA8 \uC9C4\uB2E8 \uB9AC\uD3EC\uD2B8' \uC81C\uACF5!",
    ],
    highlight: true,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-muted py-14 px-5 border-t border-border">
      <div className="text-center mb-10">
        <span className="text-primary font-bold tracking-widest text-xs bg-primary/10 px-4 py-1.5 rounded-full mb-3 inline-block shadow-sm">
          {"\u2705"} EASY START
        </span>
        <h2 className="text-xl font-black text-foreground mb-3 leading-tight">
          {"\u201C\uC124\uC815\uC774 \uC5B4\uB835\uC9C0 \uC54A\uC744\uAE4C\uC694?\u201D \uD83D\uDE1F"}
          <br />
          <span className="text-gradient-hero text-lg">{"\uACB0\uC81C\uB9CC \uD558\uC138\uC694. \uB098\uBA38\uC9C0\uB294 \uB2E4 \uD574\uB4DC\uB9BD\uB2C8\uB2E4."}</span> {"\uD83D\uDE4C"}
        </h2>
        <p className="text-muted-foreground text-sm">
          {"\uC804\uB2F4 \uB9E4\uB2C8\uC800\uAC00 A\uBD80\uD130 Z\uAE4C\uC9C0 \uBC00\uCC29 \uCF00\uC5B4!"}
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`${
              step.highlight
                ? "bg-gradient-warm border-2 border-primary shadow-brand"
                : "bg-card border border-border shadow-card"
            } rounded-2xl p-5 flex items-start gap-4`}
          >
            <div
              className={`w-10 h-10 ${
                step.highlight ? "bg-primary" : "bg-foreground"
              } text-primary-foreground rounded-full flex items-center justify-center font-black text-base shadow-md flex-shrink-0`}
            >
              {step.num}
            </div>
            <div>
              <h4 className={`font-black ${step.highlight ? "text-primary" : "text-foreground"} text-base mb-2`}>
                {step.title}
              </h4>
              <div className="space-y-1">
                {step.points.map((p, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">{"\u25B8"}</span>
                    <span className="text-muted-foreground leading-relaxed">{p}</span>
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

export default ProcessSection;
