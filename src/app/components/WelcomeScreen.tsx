import { motion } from "motion/react";
import {
  ArrowRight,
  Atom,
  Beaker,
  FlaskConical,
  GraduationCap,
  Microscope,
  TestTubes
} from "lucide-react";
import { ChemistryBackdrop } from "./ChemistryBackdrop";

interface WelcomeScreenProps {
  onStart: () => void;
}

const mohamedWhatsappUrl = "https://wa.me/201033117802";
const adhamPortfolioUrl =
  "https://adham1611.github.io/Professional-Portfolio-Website/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaARruedleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeK1QQZtNd_BCE1cDSArvrlA9d9AsuUxDJmngceSAopUtwR2blxkleNc6MV_Q_aem_trd9XK80pOy5nZXfajumJw";

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pb-56 pt-8 md:pb-36 relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-800 to-cyan-950">
      <ChemistryBackdrop />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 text-white/5"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Microscope size={200} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-white/5"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Beaker size={180} />
        </motion.div>
      </div>

      {/* NVU Branding */}
      <div className="absolute top-8 right-8 z-10 text-white/20 font-bold text-6xl">
        NVU
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-40 rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-8 shadow-2xl">
              <GraduationCap size={80} className="text-cyan-300" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mb-8 flex max-w-2xl items-center justify-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl"
        >
          {[FlaskConical, Atom, TestTubes, Beaker].map((Icon, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <Icon size={28} />
              </div>
              {index < 3 && <div className="h-px w-6 bg-cyan-200/35" />}
            </div>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Pharmaceutical Analytical Chemistry II
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-cyan-200 mb-2"
        >
          Nile Valley University (NVU)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-white/70 mb-12 max-w-md mx-auto"
        >
          <div className="mb-2 font-semibold text-white/85">Under supervision</div>
          <div>Dr. John Maher Boushra</div>
          <div>Dr. Esraa Hossam</div>
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl font-bold rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative z-10 flex items-center gap-3">
            Start Game
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={22} />
            </motion.span>
          </span>
        </motion.button>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>60s per question</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <span>Instant feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Progressive difficulty</span>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white/70 backdrop-blur-xl md:text-base"
        >
          <p className="font-semibold text-white/85">
            Made by{" "}
            <a
              href={mohamedWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-200 transition hover:text-white hover:underline"
            >
              Eng/Mohamed Ewaida
            </a>{" "}
            and{" "}
            <a
              href={adhamPortfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-200 transition hover:text-white hover:underline"
            >
              Eng/Adham Hieba
            </a>
          </p>
        </motion.footer>
      </motion.div>

    </div>
  );
}
