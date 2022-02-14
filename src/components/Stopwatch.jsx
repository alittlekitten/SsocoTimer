/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";

const Timer = () => {
  const [ms, setMs] = useState(0); // 밀리초 (정밀도 1/1000)
  const [second, setSecond] = useState(0); // 초
  const [minute, setMinute] = useState(0); // 분
  const [hour, setHour] = useState(0); // 시
  const [lap, setLap] = useState([]); // 랩
  const [status, setStatus] = useState("stop");
  const playTimeout = useRef(null); // 재생버튼을 눌렀을 때 발생하는 Interval을 담기 위한 변수
  const startTime = useRef(null); // 시작 시간을 담은 ref요소
  const pauseTime = useRef(null); // 잠시 멈춘 시간을 담은 ref요소

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    // 최초 시작
    if (startTime.current === null && status !== "play")
      startTime.current = Date.now();
    // pause후 시작
    else if (status === "pause")
      startTime.current += Date.now() - pauseTime.current;
    setStatus("play");
  };

  const timeLap = () => {
    if (status === "play")
      setLap((prev) => [...prev, { hour, minute, second, ms }]);
  };

  const timePause = () => {
    if (status === "play") {
      clearInterval(playTimeout.current);
      pauseTime.current = Date.now();
    }
    setStatus("pause");
  };

  const timeReset = () => {
    setStatus("stop");
    clearInterval(playTimeout.current);
    setLap([]);
    setSecond(0);
    setMinute(0);
    setHour(0);
    setMs(0);
    startTime.current = null;
    pauseTime.current = null;
  };

  useEffect(() => {
    // play 눌렀을 때의 로직
    const now = new Date(Date.now() - startTime.current);
    if (status === "play") {
      playTimeout.current = setTimeout(() => {
        setHour(now.getUTCHours());
        setMinute(now.getUTCMinutes());
        setSecond(now.getUTCSeconds());
        setMs(now.getUTCMilliseconds());
      }, 1);
    }
    // clean-up 함수의 실행 순서는 "state 업데이트 -> 리렌더링 -> 클린업 -> 새로운 이펙트 실행" 이기 때문에 useEffect의 동작에는 문제가 없다!
    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, ms, status]);

  return (
    <div css={totalContainer}>
      <div css={watchContainer}>
        <p>
          <span className="hour">{hour >= 10 ? hour : "0" + hour}</span> :{" "}
          <span className="minute">{minute >= 10 ? minute : "0" + minute}</span>{" "}
          :{" "}
          <span className="second">{second >= 10 ? second : "0" + second}</span>{" "}
          :{" "}
          <span className="ms">
            {ms >= 100 ? ms : ms >= 10 ? "0" + ms : "00" + ms}
          </span>
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
            {elem.hour >= 10 ? elem.hour : "0" + elem.hour} :{" "}
            {elem.minute >= 10 ? elem.minute : "0" + elem.minute} :{" "}
            {elem.second >= 10 ? elem.second : "0" + elem.second} :{" "}
            {elem.ms >= 100
              ? elem.ms
              : elem.ms >= 10
              ? "0" + elem.ms
              : "00" + elem.ms}
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
    white-space: nowrap; // 다음줄로 안넘어가게
    line-height: 50px;
    vertical-align: middle;

    .hour,
    .minute,
    .second {
      display: inline-block;
      text-align: center;
      width: 40px;
    }

    .ms {
      display: inline-block;
      text-align: center;
      width: 60px;
    }
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

  .play,
  .lap,
  .pause,
  .stop {
    cursor: pointer;
  }

  .play:hover,
  .lap:hover,
  .pause:hover,
  .stop:hover {
    transform: scale(1.04, 1.04);
    transition: all ease 0.1s;
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
