/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [speed, setSpeed] = useState(300);

  const onIncrease = () => {
    setIsPressed(true);
    repeatCount(1);
  };

  const offPress = () => {
    setIsPressed(false);
    setSpeed(300);
  };

  const onDecrease = () => {
    setIsPressed(true);
    repeatCount(-1);
  };

  const repeatCount = (cnt) => {
    console.log("ww");
    console.log("상태", isPressed, cnt);
    if (isPressed) {
      if (time > 0) setTime(time + cnt);
      if (speed > 100) setSpeed(speed - 10);
      setTimeout(() => {
        repeatCount(cnt);
        console.log("w2w");
      }, 300);
    }
  };

  return (
    <div css={watchContainer}>
      <img
        src={Plus}
        alt="더하기"
        onMouseDown={onIncrease}
        onMouseUp={offPress}
      ></img>
      <input type="text" value={time}></input>
      <img
        src={Minus}
        alt="빼기"
        onMouseDown={onDecrease}
        onMouseUp={offPress}
      ></img>
    </div>
  );
};

const watchContainer = css`
  display: flex;
  justify-content: center;
`;

export default Stopwatch;
