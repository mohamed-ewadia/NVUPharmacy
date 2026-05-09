import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "motion/react";
import {
  ChevronRight,
  Home,
  RotateCcw,
  Sparkles,
  Star,
  TrendingUp,
  Trophy
} from "lucide-react";
import { ChemistryBackdrop } from "./ChemistryBackdrop";
import { LevelArtwork } from "./LevelArtwork";

interface ResultModalProps {
  levelId: number;
  correctAnswers: number;
  totalQuestions: number;
  onRetry: () => void;
  onNextLevel: () => void;
  onBackToLevels: () => void;
  hasNextLevel: boolean;
}

export function ResultModal({
  levelId,
  correctAnswers,
  totalQuestions,
  onRetry,
  onNextLevel,
  onBackToLevels,
  hasNextLevel
}: ResultModalProps) {
  const normalizedCorrectAnswers = Math.min(
    Math.max(correctAnswers, 0),
    totalQuestions
  );
  const wrongAnswers = Math.max(totalQuestions - normalizedCorrectAnswers, 0);
  const percentage =
    totalQuestions > 0
      ? Math.round((normalizedCorrectAnswers / totalQuestions) * 100)
      : 0;
  const passed = percentage >= 50;
  const isFinalLevelPassed = passed && !hasNextLevel;
  const isExcellent = percentage >= 80;
  const circumference = 2 * Math.PI * 82;

  useEffect(() => {
    if (!isFinalLevelPassed) return;

    const duration = 1800;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 34,
      spread: 360,
      ticks: 70,
      zIndex: 20
    };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        window.clearInterval(interval);
        return;
      }

      const particleCount = 45 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.12, 0.38), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.62, 0.88), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => window.clearInterval(interval);
  }, [isFinalLevelPassed]);

  const getMessage = () => {
    if (isFinalLevelPassed) return "Congratulations";
    if (isExcellent) return "Outstanding Performance!";
    if (passed) return "Great Job!";
    return "Keep Trying!";
  };

  const getEncouragement = () => {
    if (isFinalLevelPassed) return "";
    if (isExcellent)
      return "You've mastered this level. Your pharmaceutical knowledge is exceptional.";
    if (passed)
      return "You've passed this level and unlocked the next step.";
    return "Review the material and try again. You are getting closer.";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-900 via-teal-800 to-cyan-950 text-white relative overflow-x-hidden overflow-y-auto">
      <ChemistryBackdrop />

      <div className="absolute top-4 right-4 z-10 md:top-8 md:right-8 text-white/20 font-bold text-3xl md:text-6xl">
        NVU
      </div>

      <main className="relative z-10 min-h-screen w-full px-4 pb-52 pt-6 md:px-8 md:pb-36 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col justify-center gap-6 md:min-h-[calc(100vh-4rem)]"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <LevelArtwork levelId={levelId} compact />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  Level {levelId} Result
                </p>
                {isFinalLevelPassed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 130, damping: 12 }}
                    className="relative mt-2"
                  >
                    <motion.div
                      aria-hidden="true"
                      animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        repeatDelay: 0.4
                      }}
                      className="absolute -right-5 -top-5 text-yellow-200 md:-right-8 md:-top-7"
                    >
                      <Sparkles size={38} />
                    </motion.div>
                    <h2 className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent drop-shadow-[0_0_28px_rgba(250,204,21,0.38)] sm:text-6xl md:text-8xl">
                      {getMessage()}
                    </h2>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
                      {getMessage()}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                      {getEncouragement()}
                    </p>
                  </>
                )}
              </div>
            </div>

            <div
              className={`inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full md:h-24 md:w-24 ${
                passed
                  ? "bg-gradient-to-br from-green-400 to-emerald-500"
                  : "bg-gradient-to-br from-orange-400 to-red-500"
              }`}
            >
              {passed ? (
                <Trophy size={48} className="text-white" />
              ) : (
                <Star size={48} className="text-white" />
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <section className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
                <div className="relative mx-auto h-56 w-56 md:h-64 md:w-64">
                  <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                    <circle
                      cx="100"
                      cy="100"
                      r="82"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="14"
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="82"
                      fill="none"
                      stroke={passed ? "#10b981" : "#f97316"}
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{
                        strokeDashoffset:
                          circumference - (percentage / 100) * circumference
                      }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl font-bold md:text-7xl">
                      {percentage}%
                    </div>
                    <div className="mt-2 text-sm font-medium text-white/65">
                      Final Score
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <div className="text-sm font-medium text-white/60">
                      Questions Answered Correctly
                    </div>
                    <div className="mt-2 text-4xl font-bold md:text-5xl">
                      {normalizedCorrectAnswers}
                      <span className="text-2xl text-white/50">
                        {" "}
                        / {totalQuestions}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-green-300/20 bg-green-400/10 p-4">
                      <div className="text-3xl font-bold text-green-300">
                        {normalizedCorrectAnswers}
                      </div>
                      <div className="mt-1 text-sm text-white/65">Correct</div>
                    </div>
                    <div className="rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4">
                      <div className="text-3xl font-bold text-orange-300">
                        {wrongAnswers}
                      </div>
                      <div className="mt-1 text-sm text-white/65">Wrong</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col justify-between gap-5 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  Status
                </div>
                <div className="mt-3 text-4xl font-bold">
                  {passed ? "Passed" : "Needs Retry"}
                </div>
                <p className="mt-3 text-white/70">
                  Passing requires 50% or more. Your recorded score for this
                  level is based on the percentage above.
                </p>
              </div>

              {passed && hasNextLevel && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 rounded-2xl border border-green-400/40 bg-green-500/15 p-4"
                >
                  <TrendingUp className="mt-0.5 shrink-0 text-green-300" size={24} />
                  <span className="text-white/90">
                    Level {levelId + 1} unlocked. You can now advance to the
                    next challenge.
                  </span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  onClick={onRetry}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white transition-all hover:bg-white/20"
                >
                  <RotateCcw size={20} />
                  Try Again
                </button>

                {passed && hasNextLevel ? (
                  <button
                    onClick={onNextLevel}
                    className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 font-bold text-white shadow-lg transition-all hover:from-cyan-600 hover:to-teal-600"
                  >
                    Next Level
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={onBackToLevels}
                    className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 font-bold text-white shadow-lg transition-all hover:from-cyan-600 hover:to-teal-600"
                  >
                    <Home size={20} />
                    Back to Levels
                  </button>
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
