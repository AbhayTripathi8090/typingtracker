const ProgressBar = ({ timeLeft, selectedTime }) => {
    return (
      <div className="w-full max-w-2xl bg-gray-700 h-2 mt-4 rounded-lg overflow-hidden">
        <div
          className="bg-blue-500 h-2 transition-all"
          style={{ width: `${(timeLeft / selectedTime) * 100}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  