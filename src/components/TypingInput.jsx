const TypingInput = ({ input, handleChange, timeLeft }) => {
    return (
      <input
        type="text"
        className="mt-6 p-3 w-full max-w-2xl border border-gray-600 rounded-lg text-white text-lg outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Start typing here..."
        value={input}
        onChange={handleChange}
        disabled={timeLeft === 0}
      />
    );
  };
  
  export default TypingInput;
  