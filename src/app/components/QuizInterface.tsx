import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Clock,
  GripVertical,
  Home,
  XCircle
} from "lucide-react";
import {
  MultipleChoiceQuestion,
  OrderingQuestion,
  Question
} from "../data/questions";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChemistryBackdrop } from "./ChemistryBackdrop";
import { LevelArtwork } from "./LevelArtwork";
import { playCorrectAnswerSound, playWrongAnswerSound } from "../utils/audio";

interface QuizInterfaceProps {
  levelId: number;
  questions: Question[];
  onComplete: (correctAnswers: number) => void;
  onBackToLevels: () => void;
}

function isOrderingQuestion(question: Question): question is OrderingQuestion {
  return question.type === "ordering";
}

function areOrdersEqual(items: string[], correctOrder: string[]) {
  return (
    items.length === correctOrder.length &&
    items.every((item, index) => item === correctOrder[index])
  );
}

interface ShuffledOption {
  text: string;
  originalIndex: number;
}

const QUESTION_TIME_SECONDS = 120;

function shuffleOptions(options: string[], correctAnswer: number): ShuffledOption[] {
  const shuffledOptions = options.map((text, originalIndex) => ({
    text,
    originalIndex
  }));

  for (let index = shuffledOptions.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledOptions[index], shuffledOptions[swapIndex]] = [
      shuffledOptions[swapIndex],
      shuffledOptions[index]
    ];
  }

  if (
    options.length > 1 &&
    correctAnswer >= 0 &&
    correctAnswer < shuffledOptions.length &&
    shuffledOptions[correctAnswer]?.originalIndex === correctAnswer
  ) {
    const swapIndex = (correctAnswer + 1) % shuffledOptions.length;
    [shuffledOptions[correctAnswer], shuffledOptions[swapIndex]] = [
      shuffledOptions[swapIndex],
      shuffledOptions[correctAnswer]
    ];
  }

  return shuffledOptions;
}

function shouldKeepOptionOrder(question: MultipleChoiceQuestion) {
  return question.options.some((text) => /\bboth\b/i.test(text));
}

function getShuffledOptions(question: Question) {
  if (isOrderingQuestion(question)) return [];

  if (shouldKeepOptionOrder(question)) {
    return question.options.map((text, originalIndex) => ({
      text,
      originalIndex
    }));
  }

  return shuffleOptions(question.options, question.correctAnswer);
}

export function QuizInterface({
  levelId,
  questions,
  onComplete,
  onBackToLevels
}: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_SECONDS);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [orderedItems, setOrderedItems] = useState<string[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<ShuffledOption[]>(() =>
    getShuffledOptions(questions[0])
  );
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const answerLockedRef = useRef(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isOrdering = isOrderingQuestion(currentQuestion);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useLayoutEffect(() => {
    if (isOrderingQuestion(currentQuestion)) {
      setOrderedItems(currentQuestion.items);
      setShuffledOptions([]);
    } else {
      setOrderedItems([]);
      setShuffledOptions(getShuffledOptions(currentQuestion));
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [currentQuestion, currentQuestionIndex]);

  function handleAnswerSelect(answerIndex: number) {
    if (
      answerLockedRef.current ||
      selectedAnswer !== null ||
      isOrderingQuestion(currentQuestion)
    ) {
      return;
    }

    answerLockedRef.current = true;
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const selectedOption = shuffledOptions[answerIndex];
    const isAnswerCorrect =
      selectedOption?.originalIndex === currentQuestion.correctAnswer;
    if (isAnswerCorrect) {
      playCorrectAnswerSound();
    } else {
      playWrongAnswerSound();
    }
    setScore((previousScore) => previousScore + (isAnswerCorrect ? 1 : 0));
    setAnsweredQuestions((previousAnswered) => previousAnswered + 1);
  }

  function handleOrderingSubmit() {
    if (answerLockedRef.current || !isOrderingQuestion(currentQuestion)) return;

    answerLockedRef.current = true;
    setShowExplanation(true);

    const isOrderCorrect = areOrdersEqual(orderedItems, currentQuestion.correctOrder);
    if (isOrderCorrect) {
      playCorrectAnswerSound();
    } else {
      playWrongAnswerSound();
    }
    setScore((previousScore) => previousScore + (isOrderCorrect ? 1 : 0));
    setAnsweredQuestions((previousAnswered) => previousAnswered + 1);
  }

  function moveOrderingItem(fromIndex: number, toIndex: number) {
    if (showExplanation || fromIndex === toIndex) return;

    setOrderedItems((items) => {
      if (
        fromIndex < 0 ||
        fromIndex >= items.length ||
        toIndex < 0 ||
        toIndex >= items.length
      ) {
        return items;
      }

      const nextItems = [...items];
      const [movedItem] = nextItems.splice(fromIndex, 1);
      nextItems.splice(toIndex, 0, movedItem);
      return nextItems;
    });
  }

  function handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(QUESTION_TIME_SECONDS);
      answerLockedRef.current = false;
    } else {
      onComplete(score);
    }
  }

  useEffect(() => {
    if (showExplanation) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((seconds) => seconds - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (isOrderingQuestion(currentQuestion)) {
      handleOrderingSubmit();
    } else {
      handleAnswerSelect(-1);
    }
  }, [timeLeft, showExplanation, currentQuestion, orderedItems]);

  const selectedOriginalIndex =
    selectedAnswer === null ? null : shuffledOptions[selectedAnswer]?.originalIndex;
  const isCorrect = isOrdering
    ? areOrdersEqual(orderedItems, currentQuestion.correctOrder)
    : selectedOriginalIndex === currentQuestion.correctAnswer;
  const timeProgress = (timeLeft / QUESTION_TIME_SECONDS) * 100;
  const correctAnswerText = isOrdering
    ? ""
    : (currentQuestion as MultipleChoiceQuestion).options[
        (currentQuestion as MultipleChoiceQuestion).correctAnswer
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-cyan-950 px-4 pb-52 pt-4 md:pb-28 relative overflow-hidden">
      <ChemistryBackdrop />

      {/* NVU Branding */}
      <div className="absolute top-4 right-4 z-10 md:top-8 md:right-8 text-white/20 font-bold text-3xl md:text-6xl">
        NVU
      </div>

      <div className="max-w-4xl mx-auto relative z-10 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBackToLevels}
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 mb-4"
          >
            <Home size={20} />
            Back to Levels
          </button>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Level {levelId}
            </h2>
            <div className="text-white/80">
              Question {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-teal-500"
            ></motion.div>
          </div>

          <div className="mt-5">
            <LevelArtwork levelId={levelId} />
          </div>
        </div>

        {/* Timer */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-white">
              <Clock size={20} className={timeLeft <= 10 ? "text-red-400" : "text-cyan-400"} />
              <span className="font-bold">{timeLeft}s</span>
            </div>
            <div className="text-white/60 text-sm">
              Score: {score} / {answeredQuestions}
            </div>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <motion.div
              animate={{ width: `${timeProgress}%` }}
              className={`h-full ${
                timeLeft <= 10
                  ? "bg-gradient-to-r from-red-500 to-orange-500"
                  : "bg-gradient-to-r from-cyan-400 to-teal-500"
              }`}
            ></motion.div>
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl mb-6"
          >
            {currentQuestion.image && (
              <div className="mb-6 overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-2">
                <ImageWithFallback
                  src={currentQuestion.image.src}
                  alt={currentQuestion.image.alt}
                  className="h-auto max-h-[360px] w-full rounded-xl object-contain"
                />
              </div>
            )}

            <h3 className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              {currentQuestion.question}
            </h3>

            {!isOrderingQuestion(currentQuestion) ? (
              <div className="space-y-4">
                {shuffledOptions.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer =
                    option.originalIndex === currentQuestion.correctAnswer;
                  const showCorrect = showExplanation && isCorrectAnswer;
                  const showWrong = showExplanation && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showExplanation ? { scale: 1.02 } : {}}
                      whileTap={!showExplanation ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      data-feedback-sound="true"
                      className={`w-full text-left p-4 md:p-5 rounded-2xl border-2 transition-all ${
                        showCorrect
                          ? "bg-green-500/20 border-green-400 text-white"
                          : showWrong
                          ? "bg-red-500/20 border-red-400 text-white"
                          : isSelected
                          ? "bg-white/20 border-cyan-400 text-white"
                          : "bg-white/5 border-white/20 text-white/90 hover:bg-white/10 hover:border-white/40"
                      } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex-1 pr-4">{option.text}</span>
                        {showCorrect && <CheckCircle className="text-green-400" size={24} />}
                        {showWrong && <XCircle className="text-red-400" size={24} />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {orderedItems.map((item, index) => {
                  const isCorrectPosition =
                    showExplanation && item === currentQuestion.correctOrder[index];
                  const isWrongPosition = showExplanation && !isCorrectPosition;
                  const isDragTarget = dragOverIndex === index && draggedIndex !== index;

                  return (
                    <motion.div
                      key={item}
                      layout
                      draggable={!showExplanation}
                      onDragStart={(event) => {
                        setDraggedIndex(index);
                        event.dataTransfer.effectAllowed = "move";
                      }}
                      onDragOver={(event) => {
                        event.preventDefault();
                        setDragOverIndex(index);
                      }}
                      onDrop={(event) => {
                        event.preventDefault();
                        if (draggedIndex !== null) {
                          moveOrderingItem(draggedIndex, index);
                        }
                        setDraggedIndex(null);
                        setDragOverIndex(null);
                      }}
                      onDragEnd={() => {
                        setDraggedIndex(null);
                        setDragOverIndex(null);
                      }}
                      className={`flex items-center gap-3 rounded-2xl border-2 p-4 transition-all ${
                        isCorrectPosition
                          ? "border-green-400 bg-green-500/20 text-white"
                          : isWrongPosition
                          ? "border-red-400 bg-red-500/20 text-white"
                          : isDragTarget
                          ? "border-cyan-300 bg-cyan-400/15 text-white"
                          : "border-white/20 bg-white/5 text-white/90"
                      } ${showExplanation ? "" : "cursor-grab active:cursor-grabbing"}`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 font-bold">
                        {index + 1}
                      </div>
                      <GripVertical className="shrink-0 text-white/50" size={20} />
                      <span className="flex-1">{item}</span>
                      {!showExplanation && (
                        <div className="flex shrink-0 gap-2">
                          <button
                            type="button"
                            onClick={() => moveOrderingItem(index, index - 1)}
                            disabled={index === 0}
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
                            aria-label="Move item up"
                          >
                            <ArrowUp size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveOrderingItem(index, index + 1)}
                            disabled={index === orderedItems.length - 1}
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
                            aria-label="Move item down"
                          >
                            <ArrowDown size={16} />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {!showExplanation && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOrderingSubmit}
                    data-feedback-sound="true"
                    className="mt-2 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-4 font-bold text-white shadow-lg"
                  >
                    Confirm Order
                  </motion.button>
                )}

                {showExplanation && (
                  <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-5 text-white">
                    <h4 className="mb-3 text-lg font-bold text-cyan-100">
                      Correct order
                    </h4>
                    <ol className="space-y-2">
                      {currentQuestion.correctOrder.map((item, index) => (
                        <li key={item} className="flex gap-3">
                          <span className="font-bold text-cyan-200">
                            {index + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`rounded-3xl p-6 md:p-8 mb-6 ${
                isCorrect
                  ? "bg-green-500/10 border-2 border-green-400/50"
                  : "bg-red-500/10 border-2 border-red-400/50"
              }`}
            >
              <div className="flex items-start gap-4">
                {isCorrect ? (
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={28} />
                ) : (
                  <XCircle className="text-red-400 flex-shrink-0 mt-1" size={28} />
                )}
                <div className="flex-1">
                  <h4
                    className={`text-xl font-bold mb-3 ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    {currentQuestion.explanation ??
                      (isOrdering
                        ? "Review the correct order shown above."
                        : `Correct answer: ${correctAnswerText}`)}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg"
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight size={20} />
                  </>
                ) : (
                  <>
                    View Results
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
