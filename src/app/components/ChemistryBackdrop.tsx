import { motion } from "motion/react";
import {
  Atom,
  Beaker,
  FlaskConical,
  Microscope,
  Pipette,
  TestTube,
  TestTubes,
  Thermometer,
  type LucideIcon
} from "lucide-react";

interface FloatingTool {
  Icon: LucideIcon;
  className: string;
  size: number;
  rotate: number;
  drift: number;
  duration: number;
}

const floatingTools: FloatingTool[] = [
  {
    Icon: Microscope,
    className: "left-[4%] top-[10%]",
    size: 150,
    rotate: -10,
    drift: 16,
    duration: 18
  },
  {
    Icon: FlaskConical,
    className: "right-[8%] top-[16%]",
    size: 132,
    rotate: 14,
    drift: 20,
    duration: 20
  },
  {
    Icon: TestTubes,
    className: "left-[12%] bottom-[12%]",
    size: 138,
    rotate: 9,
    drift: 18,
    duration: 22
  },
  {
    Icon: Beaker,
    className: "right-[13%] bottom-[9%]",
    size: 145,
    rotate: -12,
    drift: 14,
    duration: 19
  },
  {
    Icon: Pipette,
    className: "left-[42%] top-[5%]",
    size: 120,
    rotate: 38,
    drift: 18,
    duration: 21
  },
  {
    Icon: Thermometer,
    className: "right-[36%] bottom-[5%]",
    size: 112,
    rotate: -20,
    drift: 16,
    duration: 17
  },
  {
    Icon: Atom,
    className: "left-[48%] bottom-[28%]",
    size: 148,
    rotate: 0,
    drift: 22,
    duration: 24
  },
  {
    Icon: TestTube,
    className: "right-[3%] top-[52%]",
    size: 118,
    rotate: 24,
    drift: 15,
    duration: 18
  },
  {
    Icon: Atom,
    className: "left-[26%] top-[22%]",
    size: 92,
    rotate: 18,
    drift: 17,
    duration: 19
  },
  {
    Icon: TestTube,
    className: "left-[3%] top-[62%]",
    size: 96,
    rotate: -28,
    drift: 14,
    duration: 16
  },
  {
    Icon: FlaskConical,
    className: "right-[28%] top-[64%]",
    size: 98,
    rotate: -16,
    drift: 19,
    duration: 23
  },
  {
    Icon: Beaker,
    className: "left-[62%] top-[7%]",
    size: 88,
    rotate: 11,
    drift: 12,
    duration: 18
  },
  {
    Icon: Pipette,
    className: "right-[46%] top-[44%]",
    size: 84,
    rotate: 54,
    drift: 16,
    duration: 21
  }
];

const formulaTracks = [
  {
    text: "EDTA + M2+ -> M-EDTA",
    className: "left-[3%] top-[32%]",
    rotate: -8,
    delay: 0
  },
  {
    text: "Ox + ne- -> Red",
    className: "right-[5%] top-[38%]",
    rotate: 8,
    delay: 0.7
  },
  {
    text: "E = E0 - 0.059/n log Q",
    className: "left-[18%] bottom-[5%]",
    rotate: 4,
    delay: 1.3
  },
  {
    text: "I2 + starch",
    className: "right-[22%] bottom-[24%]",
    rotate: -6,
    delay: 1.9
  },
  {
    text: "MnO4- -> Mn2+",
    className: "left-[7%] bottom-[31%]",
    rotate: 7,
    delay: 2.4
  },
  {
    text: "Ce4+ + e- -> Ce3+",
    className: "right-[12%] bottom-[43%]",
    rotate: -5,
    delay: 2.9
  },
  {
    text: "Ag+ + Cl- -> AgCl",
    className: "left-[37%] top-[14%]",
    rotate: 5,
    delay: 3.2
  },
  {
    text: "pM = -log[M]",
    className: "right-[39%] top-[27%]",
    rotate: -7,
    delay: 3.6
  }
];

export function ChemistryBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_28%,rgba(251,191,36,0.09)_48%,rgba(20,184,166,0.14)_72%,transparent)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute left-0 right-0 top-1/4 h-px bg-cyan-200/20" />
      <div className="absolute left-0 right-0 top-2/3 h-px bg-amber-200/15" />
      <div className="absolute bottom-0 top-0 left-1/4 w-px bg-teal-200/15" />
      <div className="absolute bottom-0 top-0 right-1/3 w-px bg-fuchsia-200/10" />

      {formulaTracks.map(({ text, className, rotate, delay }) => (
        <motion.div
          key={text}
          className={`absolute rounded-xl border border-white/20 bg-white/[0.1] px-3 py-2 font-mono text-[0.68rem] text-white/35 backdrop-blur-sm md:px-4 md:text-sm ${className}`}
          initial={{ opacity: 0.22, rotate }}
          animate={{ opacity: [0.22, 0.48, 0.22], y: [0, -8, 0] }}
          transition={{
            delay,
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.div>
      ))}

      {floatingTools.map(({ Icon, className, size, rotate, drift, duration }) => (
        <motion.div
          key={`${Icon.displayName}-${className}`}
          className={`absolute text-cyan-100/30 drop-shadow-[0_0_18px_rgba(103,232,249,0.18)] ${className}`}
          initial={{ opacity: 0.24, rotate }}
          animate={{
            y: [0, drift, 0],
            rotate: [rotate, rotate + 5, rotate],
            opacity: [0.2, 0.42, 0.2]
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon size={size} strokeWidth={1.15} />
        </motion.div>
      ))}
    </div>
  );
}
