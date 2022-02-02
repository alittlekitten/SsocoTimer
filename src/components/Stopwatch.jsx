/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";

const Timer = () => {
  const [second, setSecond] = useState(0); // 초
  const [minute, setMinute] = useState(0); // 분
  const [hour, setHour] = useState(0); // 시
  const [lap, setLap] = useState([]); // 랩
  const [status, setStatus] = useState("stop");
  const playTimeout = useRef(null); // 재생버튼을 눌렀을 때 발생하는 Interval을 담기 위한 변수

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    setStatus("play");
  };

  const timeLap = () => {
    if (status === "play")
      setLap((prev) => [...prev, { hour, minute, second }]);
  };

  const timePause = () => {
    setStatus("pause");
    clearInterval(playTimeout.current);
  };

  const timeReset = () => {
    setStatus("stop");
    setLap([]);
    clearInterval(playTimeout.current);
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  useEffect(() => {
    // play 눌렀을 때의 로직
    if (status === "play") {
      playTimeout.current = setTimeout(() => {
        if (second === 59 && minute === 59) {
          setHour(hour + 1);
          setMinute(0);
          setSecond(0);
        } else if (second === 59) {
          setMinute(minute + 1);
          setSecond(0);
        } else {
          setSecond(second + 1);
        }
      }, 1000);
    }

    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, status]);

  return (
    <div css={totalContainer}>
      <div css={watchContainer}>
        <p>
          {hour >= 10 ? hour : "0" + hour} :{" "}
          {minute >= 10 ? minute : "0" + minute} :{" "}
          {second >= 10 ? second : "0" + second}
        </p>
      </div>
      <div css={playContainer({ status })}>
        <Play onClick={timePlay} className="play" />
        <Lap onClick={timeLap} className="lap" />
        <Pause onClick={timePause} className="pause" />
        <Stop alt="정지" onClick={timeReset} className="stop" />
      </div>
      <div css={lapContainer}>
        <h3>-- lap --</h3>
        {lap.map((elem, index) => (
          <p key={index}>
            {elem.hour} : {elem.minute} : {elem.second}
          </p>
        ))}
      </div>
    </div>
  );
};

const totalContainer = css`
  padding: 1.5rem;
`;

const watchContainer = css`
  display: flex;
  justify-content: center;

  p {
    margin: 0;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
  }
`;

const playContainer = (props) => css`
  height: 100px;
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

const lapContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  font-family: "HSYuji-Regular";

  h3 {
    margin-top: 0px;
  }

  p {
    margin: 0px;
  }
`;

export default Timer;
