import React, { useEffect, useState } from "react";

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 2000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, []);

  return Math.floor(count);
};

const BigNumberCounter = (props) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let res = props.data;
    if (res) {
      setNumber(parseFloat(res));
    }
  }, [props]);

  return (
    <div class="m-5">
      <div class="p-2">
        <span class="font-bold text-2xl">
          {props.dollar_amount ? "$" : ""}
          {number === 0 ? (
            <span>0</span>
          ) : (
            <CountUpAnimation>{number}</CountUpAnimation>
          )}
        </span>
      </div>
      <div class="mt-5">
        <h2 class="font-bold">{props.title ? props.title : "N/A"}</h2>
      </div>
    </div>
  );
};
export default BigNumberCounter;
