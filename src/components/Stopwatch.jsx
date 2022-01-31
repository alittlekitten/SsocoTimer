/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";

let nowTime = 0;

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const isPressed = useRef(false);
  const speed = useRef(300);
  const timeout = useRef(null);
  const playInterval = useRef(null);
  const status = useRef("stop");

  const onIncrease = () => {
    isPressed.current = true;
    repeatCount(1);
  };

  const onDecrease = () => {
    isPressed.current = true;
    repeatCount(-1);
  };

  const offPress = () => {
    isPressed.current = false;
    speed.current = 300;
    clearTimeout(timeout.current);
  };

  const repeatCount = (cnt) => {
    if (isPressed.current) {
      if (speed.current > 30) speed.current -= 10;
      setTime((prev) => {
        if (!(prev === 0 && cnt === -1)) {
          nowTime = prev + cnt;
          return prev + cnt;
        }
        return 0;
      });
      timeout.current = setTimeout(() => {
        repeatCount(cnt);
      }, speed.current);
    }
  };

  const inputChange = (e) => {
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) {
      nowTime = 0;
      setTime(0);
    } else {
      nowTime = +onlyNumber;
      setTime(+onlyNumber);
    }
  };

  const timePlay = () => {
    if (status.current === "play") clearInterval(playInterval.current);
    else status.current = "play";
    playInterval.current = setInterval(() => {
      --nowTime;
      setTime((prev) => {
        if (prev !== 0) {
          console.log(nowTime);
          return --prev;
        } else {
          clearInterval(playInterval.current);
          clearTimeout(timeout.current);
          return 0;
        }
      });
    }, 1000);
  };

  const timePause = () => {
    status.current = "pause";
    clearInterval(playInterval.current);
  };

  const timeReset = () => {
    status.current = "stop";
    clearInterval(playInterval.current);
    setTime(0);
  };

  return (
    <div css={totalContainer({ nowTime })}>
      <div css={watchContainer}>
        <Plus
          alt="더하기"
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="plus"
        />
        <input type="text" value={time || 0} onChange={inputChange}></input>
        <Minus
          alt="빼기"
          onMouseDown={onDecrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="minus"
        />
      </div>
      <div css={playContainer}>
        <Play onClick={timePlay} className="play" />
        <Pause onClick={timePause} className="pause" />
        <Stop alt="정지" onClick={timeReset} className="stop" />
      </div>
    </div>
  );
};

const totalContainer = (props) => css`
  padding: 1.5rem;
  background-color: ${props.time === 3
    ? "#ffd3d3"
    : props.time === 2
    ? "#ff9b9b"
    : props.time === 1
    ? "#ff5e5e"
    : "white"};
`;

const watchContainer = css`
  display: flex;
  justify-content: center;

  .plus:hover {
    fill: #bcfcff;
  }

  .minus:hover {
    fill: #ffc4c4;
  }
`;

const playContainer = (props) => css`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  & :not(:first-of-type) {
    margin-left: 1rem;
  }

  .play {
    fill: ${props.status === "play" ? "red" : "black"};
  }

  .play:hover {
    width: 52px;
    height: 52px;
    fill: red;
  }

  .lap:hover {
    width: 52px;
    height: 52px;
    fill: red;
  }

  .pause:hover {
    width: 52px;
    height: 52px;
    fill: red;
  }

  .stop:hover {
    width: 52px;
    height: 52px;
    fill: red;
  }
`;

export default Stopwatch;
