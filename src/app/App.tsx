import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LevelSelection } from "./components/LevelSelection";
import { QuizInterface } from "./components/QuizInterface";
import { ResultModal } from "./components/ResultModal";
import { ButtonSound } from "./components/ButtonSound";
import { LEVELS } from "./data/questions";

type GameState = "welcome" | "levelSelection" | "quiz" | "result";

export default function App() {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState(1);
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [currentCorrectAnswers, setCurrentCorrectAnswers] = useState(0);
  const totalLevels = LEVELS.length;

  const handleStart = () => {
    setGameState("levelSelection");
  };

  const handleSelectLevel = (levelId: number) => {
    setCurrentLevel(levelId);
    setGameState("quiz");
  };

  const handleQuizComplete = (correctAnswers: number) => {
    setCurrentCorrectAnswers(correctAnswers);

    const totalQuestions = currentLevelData?.questions.length ?? 0;
    const percentage =
      totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    // Update scores
    const newScores = { ...scores };
    if (!newScores[currentLevel] || percentage > newScores[currentLevel]) {
      newScores[currentLevel] = percentage;
      setScores(newScores);
    }

    // Unlock next level if passed and not already unlocked
    if (
      percentage >= 50 &&
      currentLevel === unlockedLevels &&
      currentLevel < totalLevels
    ) {
      setUnlockedLevels(unlockedLevels + 1);
    }

    setGameState("result");
  };

  const handleRetry = () => {
    setGameState("quiz");
  };

  const handleNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    setGameState("quiz");
  };

  const handleBackToLevels = () => {
    setGameState("levelSelection");
  };

  const handleBackToHome = () => {
    setGameState("welcome");
  };

  const currentLevelData = LEVELS.find((level) => level.id === currentLevel);

  return (
    <div className="size-full">
      <ButtonSound />

      {gameState === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {gameState === "levelSelection" && (
        <LevelSelection
          unlockedLevels={unlockedLevels}
          scores={scores}
          onSelectLevel={handleSelectLevel}
          onBackToHome={handleBackToHome}
        />
      )}

      {gameState === "quiz" && currentLevelData && (
        <QuizInterface
          levelId={currentLevel}
          questions={currentLevelData.questions}
          onComplete={handleQuizComplete}
          onBackToLevels={handleBackToLevels}
        />
      )}

      {gameState === "result" && currentLevelData && (
        <ResultModal
          levelId={currentLevel}
          correctAnswers={currentCorrectAnswers}
          totalQuestions={currentLevelData.questions.length}
          onRetry={handleRetry}
          onNextLevel={handleNextLevel}
          onBackToLevels={handleBackToLevels}
          hasNextLevel={currentLevel < totalLevels}
        />
      )}
    </div>
  );
}
