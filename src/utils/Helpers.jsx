export const calculateStats = (input, text, timeLeft, selectedTime) => {
    const wordsTyped = input.trim().split(/\s+/).filter(Boolean).length;
    const charTyped = input.replace(/\s/g, "").length;
    const correctChars = input.split("").filter((char, i) => char === text[i]).length;
  
    const minutesElapsed = (selectedTime - timeLeft) / 60;
    const wpm = minutesElapsed > 0 ? Math.round(wordsTyped / minutesElapsed) : 0;
    const cpm = minutesElapsed > 0 ? Math.round(charTyped / minutesElapsed) : 0;
    const accuracy = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100;
  
    return { wpm, cpm, accuracy };
  };
  