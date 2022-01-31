/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";

const Timer = () => {
  const [time, setTime] = useState(0); // 시간
  const [lap, setLap] = useState([]); // 랩
  const [status, setStatus] = useState("stop");
  const isPressed = useRef(false); // 마우스 눌렸는지 여부
  const speed = useRef(300); // 마우스를 꾹 눌렀을 때 증감 스피드
  const timeout = useRef(null); // 증감 스피드를 조절 및 재귀적 사용을 위한 setTimeout 변수
  const playInterval = useRef(null); // 재생버튼을 눌렀을 때 발생하는 Interval을 담기 위한 변수

  // 마우스 클릭할 때 동작들

  const onIncrease = () => {
    isPressed.current = true;
    repeatCount(1);
    timePause();
  };

  const onDecrease = () => {
    isPressed.current = true;
    repeatCount(-1);
    timePause();
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
      setTime(0);
    } else {
      setTime(+onlyNumber);
    }
    timePause();
  };

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    if (status === "play") {
      clearInterval(playInterval.current);
      console.log(1);
    } else {
      console.log(2);
      setStatus("play");
    }
    playInterval.current = setInterval(() => {
      setTime((prev) => {
        if (prev !== 0) --prev;
        if (prev === 0) {
          setStatus("stop");
          clearInterval(playInterval.current);
          clearTimeout(timeout.current);
        }
        return prev;
      });
    }, 1000);
  };

  const timeLap = () => {
    if (status === "play") setLap((prev) => [...prev, time]);
  };

  const timePause = () => {
    setStatus("pause");
    clearInterval(playInterval.current);
  };

  const timeReset = () => {
    setStatus("stop");
    setLap([]);
    clearInterval(playInterval.current);
    setTime(0);
  };

  return (
    <div css={totalContainer({ time })}>
      <div css={watchContainer}>
        <Plus
          alt="더하기"
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="plus"
        />
        <input type="text" value={time} onChange={inputChange}></input>
        <Minus
          alt="빼기"
          onMouseDown={onDecrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="minus"
        />
      </div>
      <div css={playContainer({ status })}>
        <Play onClick={timePlay} className="play" />
        <Lap onClick={timeLap} className="lap" />
        <Pause onClick={timePause} className="pause" />
        <Stop alt="정지" onClick={timeReset} className="stop" />
      </div>
      <div css={lapContainer}>
        <h3>-- lap --</h3>
        {lap.map((elem) => (
          <p>{elem}</p>
        ))}
      </div>
    </div>
  );
};

const totalContainer = (props) => css`
  padding: 2rem;
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
  margin-top: 1rem;
  display: flex;
  justify-content: center;

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

const lapContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  font-family: "HSYuji-Regular";

  p {
    margin: 0px;
  }
`;

export default Timer;
