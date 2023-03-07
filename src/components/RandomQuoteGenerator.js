import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
export const RandomQuoteGenerator = (props) => {
  const [activeQuote, setActiveQuote] = useState(0);
  const quotes = [
    "“I live by one rule: No office romances, no way. Very messy, inappropriate...no. But, I live by another rule: Just do it...Nike.” – Michael Scott",
    "“In the Schrute family, the youngest child raises the others. I've been raising children since I was a baby.” – Dwight Schrute",
    "“’R' is among the most menacing of sounds. That's why they call it 'murder' and not 'mukduk.'”  — Dwight Schrute",
    "“I'm not usually the butt of the joke. I'm usually the face of the joke.” – Michael Scott",
    "“The eyes are the groin of the face.”  — Dwight Schrute",
    "“I work hard all day. I like knowing that there's going to be a break. Most days I just sit and wait for the break.” – Kevin Malone",
    "“I am fast. To give you a reference point. I'm somewhere between a snake and a mongoose. And a panther.” – Dwight Schrute",
    "“Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.” – Dwight Schrute",
    "“There’s a lot of beauty in ordinary things. Isn’t that kind of the point?” – Pam Beesly",
    "“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.” – Michael Scott",
  ];

  function selectRandomQuote() {
    const len = quotes.length;
    setActiveQuote(Math.floor(Math.random() * len));
  }

  return (
    <div>
      <div class="grid grid-rows-2 mt-10">
        <div class="row-span-1">
          <p class="text-2xl">
            <i>{quotes[activeQuote]}</i>
          </p>
        </div>
        <div class="justify-center items-center row-span-1 mt-10">
        <Button variant="outlined" size="medium" startIcon={<ReplayIcon />} onClick={selectRandomQuote} style={{color:"black", borderColor:"black"}}>Outlined</Button>
        </div>
      </div>
    </div>
  );
};
