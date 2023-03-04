import React, { useEffect, useState } from "react";

export const RandomQuoteGenerator = (props) => {
  const [activeQuote, setActiveQuote] = useState(0);
  const quotes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  
  function selectRandomQuote() {
    const len = quotes.length;
    setActiveQuote(Math.floor(Math.random() * len));
  }

  return (
    <div>
      <p>
        <i>"{quotes[activeQuote]}"</i>
      </p>
      <button onClick={selectRandomQuote}>click me</button>
    </div>
  );
};
