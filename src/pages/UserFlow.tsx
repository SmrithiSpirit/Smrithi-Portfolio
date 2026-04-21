const steps = [
  { num: 1, title: "Onboarding",desc: "User downloads app and completes quick setup questionnaire",color: "#7ec8c8" },
  { num: 2, title: "Goal Setting",desc: "Define personal screen time goals and focus areas",color: "#85b8d6" },
  { num: 3, title: "Baseline Tracking",desc: "App monitors usage patterns for 7 days without intervention",color: "#9fb0d8" },
  { num: 4, title: "Insights Delivery",desc: "Personalized insights and recommendations presented",color: "#b0a0d4" },
  { num: 5, title: "Focus Mode Activation",desc: "User activates focus sessions with customizable settings",color: "#c49ecf" },
  { num: 6, title: "Progress Review",desc: "Weekly summary with achievements and areas for improvement",color: "#d49aba" },
];

const ArrowRight = ({ color }: { color: string }) => (
  <div className="flex items-center justify-center w-9 shrink-0">
    <svg width="28" height="16" viewBox="0 0 28 16">
      <path d="M0 8 H22"        stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 3 L26 8 L18 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const ArrowDown = ({ color }: { color: string }) => (
  <div className="flex items-center justify-center h-9 shrink-0">
    <svg width="16" height="28" viewBox="0 0 16 28">
      <path d="M8 0 V22"        stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18 L8 26 L13 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </div>
);

const Card = ({ step }: { step: typeof steps[number] }) => (
  <div
    className="bg-white rounded-2xl p-6 shadow-md w-48 shrink-0"
    style={{ borderTop: `3px solid ${step.color}` }}
  >
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mb-3"
      style={{ background: step.color }}
    >
      {step.num}
    </div>
    <p className="text-sm font-bold text-gray-900 leading-snug mb-1">{step.title}</p>
    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
  </div>
);

export function UserFlow() {
  const row1 = steps.slice(0, 3);             // 1 → 2 → 3  (left to right)
  const row2 = steps.slice(3, 6);             // 4 ← 5 ← 6  (right to left)

  return (
    <section className="py-20 px-4 md:px-8 bg-card/30">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          User{" "}
          <span className="bg-gradient-to-r from-[#7ec8c8] to-[#a0b4d6] bg-clip-text text-transparent">
            Flow
          </span>
        </h2>
        <p className="text-gray-400 text-sm">
          The core journey from app discovery to sustained habit change.
        </p>
      </div>

      <div className="flex flex-col items-center gap-0">
        {/* Row 1 — left to right */}
        <div className="flex items-center justify-center">
          {row1.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <Card step={step} />
              {i < 2 && <ArrowRight color={steps[i + 1].color} />}
            </div>
          ))}
        </div>

        {/* Down arrow aligned to right card (step 3) */}
        <div className="flex justify-end w-full max-w-[672px] pr-24">
          <ArrowDown color={steps[3].color} />
        </div>

        {/* Row 2 — visually 6→5→4 (left to right, continuing from step 3 down) */}
        <div className="flex items-center justify-center">
          {[...row2].reverse().map((step, i, arr) => (
            <div key={step.num} className="flex items-center">
              <Card step={step} />
              {i < arr.length - 1 && <ArrowRight color={arr[i + 1].color} />}
            </div>
          ))}
        </div>

        {/* Down arrow aligned to left card (step 6) */}
        <div className="flex justify-start w-full max-w-[672px] pl-24">
          <ArrowDown color="#e8a0a0" />
        </div>

        {/* End badge */}
        <div className="flex justify-start w-full max-w-[672px] pl-12">
          <div className="bg-gradient-to-r from-[#d49aba] to-[#c49ecf] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-md shadow-purple-200">
            🔁 Habit Loop Continues
          </div>
        </div>
      </div>
    </section>
  );
}