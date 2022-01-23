/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useRef } from "react";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";
import Play from "../images/play.svg";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const isPressed = useRef(false);
  const speed = useRef(300);

  const onIncrease = () => {
    isPressed.current = true;
    repeatCount(1);
  };

  const offPress = () => {
    isPressed.current = false;
    speed.current = 300;
  };

  const onDecrease = () => {
    isPressed.current = true;
    repeatCount(-1);
  };

  const repeatCount = (cnt) => {
    console.log("ww");
    console.log("상태", isPressed, cnt, time);
    if (isPressed.current) {
      if (speed.current > 50) speed.current -= 10;
      setTime((prev) => prev + cnt);
      setTimeout(() => {
        repeatCount(cnt);
        console.log("w2w");
      }, speed.current);
    }
  };

  return (
    <>
      <div css={watchContainer}>
        <img
          src={Plus}
          alt="더하기"
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
        ></img>
        <input type="text" value={time}></input>
        <img
          src={Minus}
          alt="빼기"
          onMouseDown={onDecrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
        ></img>
      </div>
      <div css={playContainer}>
        <img src={Play} alt="시작"></img>
      </div>
    </>
  );
};

const watchContainer = css`
  display: flex;
  justify-content: center;
`;

const playContainer = css`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export default Stopwatch;
