import {
  Activity,
  Atom,
  BatteryCharging,
  Beaker,
  FlaskConical,
  Gauge,
  LucideIcon,
  Pipette,
  TestTubes,
  Zap
} from "lucide-react";
import { motion } from "motion/react";

interface LevelArtworkProps {
  levelId: number;
  compact?: boolean;
}

interface LevelVisual {
  Icon: LucideIcon;
  accentIcon: LucideIcon;
  label: string;
  gradient: string;
  ring: string;
}

export const levelVisuals: LevelVisual[] = [
  {
    Icon: FlaskConical,
    accentIcon: Beaker,
    label: "Complexometry",
    gradient: "from-cyan-400 via-sky-500 to-teal-400",
    ring: "border-cyan-200/35"
  },
  {
    Icon: Pipette,
    accentIcon: TestTubes,
    label: "Indicators",
    gradient: "from-emerald-400 via-teal-500 to-lime-400",
    ring: "border-emerald-200/35"
  },
  {
    Icon: Zap,
    accentIcon: Atom,
    label: "Redox",
    gradient: "from-violet-400 via-fuchsia-500 to-rose-400",
    ring: "border-fuchsia-200/35"
  },
  {
    Icon: Activity,
    accentIcon: Zap,
    label: "Systems",
    gradient: "from-amber-300 via-orange-500 to-red-500",
    ring: "border-orange-200/35"
  },
  {
    Icon: Gauge,
    accentIcon: BatteryCharging,
    label: "Potential",
    gradient: "from-lime-300 via-emerald-500 to-cyan-400",
    ring: "border-lime-200/35"
  },
  {
    Icon: TestTubes,
    accentIcon: FlaskConical,
    label: "Titrants",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    ring: "border-sky-200/35"
  },
  {
    Icon: Beaker,
    accentIcon: Pipette,
    label: "Iodimetry",
    gradient: "from-rose-400 via-pink-500 to-orange-400",
    ring: "border-rose-200/35"
  },
  {
    Icon: BatteryCharging,
    accentIcon: Gauge,
    label: "Electrochemistry",
    gradient: "from-violet-400 via-indigo-500 to-cyan-400",
    ring: "border-indigo-200/35"
  }
];

export function getLevelVisual(levelId: number) {
  return levelVisuals[(levelId - 1) % levelVisuals.length];
}

export function LevelArtwork({ levelId, compact = false }: LevelArtworkProps) {
  const visual = getLevelVisual(levelId);
  const { Icon, accentIcon: AccentIcon } = visual;

  if (compact) {
    return (
      <div
        className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border ${visual.ring} bg-white/10`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-75`} />
        <Icon className="relative z-10 text-white drop-shadow-lg" size={34} />
        <AccentIcon
          className="absolute -bottom-2 -right-2 text-white/35"
          size={34}
          strokeWidth={1.5}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl border ${visual.ring} bg-white/10 p-5 shadow-2xl backdrop-blur-xl`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-20`} />
      <div className="absolute inset-x-5 top-1/2 h-px bg-white/25" />
      <div className="absolute left-8 right-8 top-1/3 h-px rotate-12 bg-white/15" />
      <div className="absolute left-8 right-8 top-2/3 h-px -rotate-12 bg-white/15" />

      <div className="relative flex items-center gap-4">
        <motion.div
          animate={{ rotate: [0, 5, -4, 0], y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${visual.gradient} shadow-xl`}
        >
          <Icon className="text-white" size={56} strokeWidth={1.7} />
        </motion.div>

        <div className="min-w-0">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Visual topic
          </div>
          <div className="mt-1 text-2xl font-bold text-white">
            {visual.label}
          </div>
          <div className="mt-3 flex items-center gap-2 text-white/70">
            <AccentIcon size={20} />
            <span>Level {levelId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
