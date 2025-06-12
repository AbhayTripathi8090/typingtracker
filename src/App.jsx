import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TypingText from "./components/TypingText";
import TypingInput from "./components/TypingInput";
import TimerDisplay from "./components/TimerDisplay";
import StatsDisplay from "./components/StatsDisplay";
import ProgressBar from "./components/ProgressBar";
import { calculateStats } from "./utils/Helpers";

function App() {
  const [text] = useState(
    "the early morning breeze brushed against the tall grass as the sun began to rise over the quiet hills animals woke from their sleep stretching and moving slowly into the light the forest echoed with soft rustles and distant bird calls everything felt peaceful and alive in that gentle moment the stream flowed quietly over smooth stones insects buzzed softly nearby the world seemed to hold its breath before the day began people still slept in their homes unaware of the beauty just outside their doors nature whispered its secrets in the wind carrying stories from tree to tree without end"
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedTime, setSelectedTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const handleChange = (e) => {
    if (!isRunning) setIsRunning(true);
    setInput(e.target.value);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [isRunning, timeLeft, selectedTime]);

  useEffect(() => {
    if (!isRunning || input.length === 0) return;
    const { wpm, cpm, accuracy } = calculateStats(
      input,
      text,
      timeLeft,
      selectedTime
    );
    setWpm(wpm);
    setCpm(cpm);
    setAccuracy(accuracy);
  }, [input, timeLeft, selectedTime]);

  const resetGame = () => {
    setInput("");
    setTimeLeft(selectedTime);
    setIsRunning(false);
    setWpm(0);
    setCpm(0);
    setAccuracy(100);
  };

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value);
    setSelectedTime(newTime);
    setTimeLeft(newTime);
    resetGame();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <Navbar />

      {
        <select
          onChange={handleTimeChange}
          value={selectedTime}
          className="mb-4 mt-4 p-2 text-lg bg-gray-800 text-white border border-gray-600 rounded-lg"
        >
          <option value="30">30s - Easy</option>
          <option value="60">60s - Medium</option>
          <option value="90">90s - Hard</option>
        </select>
      }

      <TypingText text={text} input={input} />
      <TypingInput
        input={input}
        handleChange={handleChange}
        timeLeft={timeLeft}
      />
      <ProgressBar timeLeft={timeLeft} selectedTime={selectedTime} />
      <TimerDisplay timeLeft={timeLeft} />
      <StatsDisplay wpm={wpm} cpm={cpm} accuracy={accuracy} />

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition cursor-pointer"
      >
        🔄 Restart
      </button>
    </div>
  );
}

export default App;
