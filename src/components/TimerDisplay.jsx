const TimerDisplay = ({ timeLeft }) => {
    return (
      <p className="text-yellow-400">
        ⏳ Time Left: <span className="font-bold">{timeLeft}s</span>
      </p>
    );
  };
  
  export default TimerDisplay;
  