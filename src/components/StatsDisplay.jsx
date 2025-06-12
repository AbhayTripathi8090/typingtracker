const StatsDisplay = ({ wpm, cpm, accuracy }) => {
    return (
      <div className="mt-6 text-lg flex flex-col items-center space-y-2">
        <p className="text-green-400">
          ⚡ WPM: <span className="font-bold">{wpm}</span>
        </p>
        <p className="text-red-400">
          🎯 CPM: <span className="font-bold">{cpm}</span>
        </p>
        <p className="text-purple-400">
          🎯 Accuracy: <span className="font-bold">{accuracy}%</span>
        </p>
      </div>
    );
  };
  
  export default StatsDisplay;
  