import { motion } from "motion/react";
import { Lock, Trophy, ChevronRight, Star } from "lucide-react";
import { ChemistryBackdrop } from "./ChemistryBackdrop";
import { LevelArtwork } from "./LevelArtwork";

interface LevelSelectionProps {
  unlockedLevels: number;
  scores: { [key: number]: number };
  onSelectLevel: (level: number) => void;
  onBackToHome: () => void;
}

export function LevelSelection({
  unlockedLevels,
  scores,
  onSelectLevel,
  onBackToHome
}: LevelSelectionProps) {
  const levels = [
    { id: 1, name: "Level 1", description: "Complexometry Basics", color: "from-cyan-500 to-blue-500" },
    { id: 2, name: "Level 2", description: "Advanced Indicators", color: "from-teal-500 to-emerald-500" },
    { id: 3, name: "Level 3", description: "Oxidation & Reduction", color: "from-purple-500 to-pink-500" },
    { id: 4, name: "Level 4", description: "Redox Systems", color: "from-amber-500 to-red-500" },
    { id: 5, name: "Level 5", description: "Redox Potential", color: "from-lime-500 to-teal-500" },
    { id: 6, name: "Level 6", description: "Redox Titrants", color: "from-sky-500 to-indigo-500" },
    { id: 7, name: "Level 7", description: "Iodimetry & Applications", color: "from-rose-500 to-orange-500" },
    { id: 8, name: "Level 8", description: "Electrochemical Methods", color: "from-violet-500 to-fuchsia-500" }
  ];
  const totalLevels = levels.length;
  const displayedUnlockedLevels = Math.min(unlockedLevels, totalLevels);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-cyan-950 px-4 pb-52 pt-4 md:px-8 md:pb-36 md:pt-8 relative overflow-hidden">
      <ChemistryBackdrop />

      {/* NVU Branding */}
      <div className="absolute top-8 right-8 z-10 text-white/20 font-bold text-4xl md:text-6xl">
        NVU
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <button
            onClick={onBackToHome}
            className="mb-6 text-white/60 hover:text-white transition-colors flex items-center gap-2 mx-auto"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Select Your Level
          </h1>
          <p className="text-cyan-200 text-lg">
            Complete each level with 50% or higher to unlock the next
          </p>
        </motion.div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => {
            const isLocked = level.id > unlockedLevels;
            const score = scores[level.id];
            const isPassed = score !== undefined && score >= 50;

            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isLocked ? { y: -10 } : {}}
                className="relative"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border ${
                    isLocked
                      ? "bg-white/5 border-white/10"
                      : "bg-white/10 border-white/20"
                  } p-8 shadow-2xl transition-all ${
                    !isLocked ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                  data-sound-click={!isLocked ? "true" : undefined}
                  onClick={() => !isLocked && onSelectLevel(level.id)}
                >
                  {/* Gradient Background */}
                  {!isLocked && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-10`}
                    ></div>
                  )}
                  {!isLocked && (
                    <div className="absolute -right-6 -top-6 opacity-20">
                      <LevelArtwork levelId={level.id} compact />
                    </div>
                  )}

                  {/* Lock Icon */}
                  {isLocked && (
                    <div className="absolute top-4 right-4">
                      <Lock size={24} className="text-white/30" />
                    </div>
                  )}

                  {/* Trophy Icon */}
                  {isPassed && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 right-4"
                    >
                      <Trophy size={28} className="text-yellow-400" />
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <LevelArtwork levelId={level.id} compact />
                      <span
                        className={`text-3xl font-bold ${
                          isLocked ? "text-white/35" : "text-white"
                        }`}
                      >
                        {level.id}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isLocked ? "text-white/40" : "text-white"
                      }`}
                    >
                      {level.name}
                    </h3>

                    <p
                      className={`mb-6 ${
                        isLocked ? "text-white/30" : "text-white/70"
                      }`}
                    >
                      {level.description}
                    </p>

                    {/* Score Display */}
                    {score !== undefined && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/70 text-sm">
                            Best Score
                          </span>
                          <span
                            className={`font-bold ${
                              isPassed ? "text-green-400" : "text-orange-400"
                            }`}
                          >
                            {score}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full ${
                              isPassed
                                ? "bg-gradient-to-r from-green-400 to-emerald-500"
                                : "bg-gradient-to-r from-orange-400 to-red-500"
                            }`}
                          ></motion.div>
                        </div>
                      </div>
                    )}

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      {isLocked ? (
                        <span className="text-white/40 text-sm flex items-center gap-2">
                          <Lock size={16} />
                          Locked
                        </span>
                      ) : score === undefined ? (
                        <span className="text-cyan-400 text-sm flex items-center gap-2">
                          <Star size={16} />
                          Not attempted
                        </span>
                      ) : isPassed ? (
                        <span className="text-green-400 text-sm flex items-center gap-2">
                          ✓ Passed
                        </span>
                      ) : (
                        <span className="text-orange-400 text-sm flex items-center gap-2">
                          Try again
                        </span>
                      )}

                      {!isLocked && (
                        <ChevronRight
                          size={20}
                          className="text-white/60 group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {displayedUnlockedLevels}/{totalLevels}
              </div>
              <div className="text-white/60">Levels Unlocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {Object.values(scores).filter((s) => s >= 50).length}
              </div>
              <div className="text-white/60">Levels Passed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">
                {Object.keys(scores).length}
              </div>
              <div className="text-white/60">Levels Attempted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
