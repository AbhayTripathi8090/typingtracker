
const TypingText = ({ text, input }) => {
  const words = text.split(" ");
  const inputWords = input.trim().split(/\s+/);

  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl text-lg shadow-md">
      <div className="text-center break-words whitespace-pre-wrap">
        {words.map((word, index) => {
          let color = "text-gray-400";

          if (inputWords[index]) {
            if (inputWords[index] === word) {
              color = "text-green-500";
            } else {
              color = "text-red-500";
            }
          }

          return (
            <span key={index} className={`${color} mr-1`}>
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TypingText;
