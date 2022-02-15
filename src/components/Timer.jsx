/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect, useCallback } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";

const Timer = () => {
  const [ms, setMs] = useState(0); // 밀리초 (정밀도 1/1000)
  const [second, setSecond] = useState(0); // 초
  const [minute, setMinute] = useState(0); // 분
  const [hour, setHour] = useState(0); // 초
  const [lap, setLap] = useState([]); // 랩
  const [status, setStatus] = useState("stop");
  const speed = useRef(300); // 마우스를 꾹 눌렀을 때 증감 스피드
  const timeout = useRef(null); // 증감 스피드를 조절 및 재귀적 사용을 위한 setTimeout 변수
  const playTimeout = useRef(null); // 재생버튼을 눌렀을 때 발생하는 Interval을 담기 위한 변수
  const startTime = useRef(null); // 시작 시간을 담은 ref요소
  const setTime = useRef(null); // play 눌렀을 때 설정된 시간을 담은 ref 요소

  // 마우스 클릭할 때 동작들

  const onIncrease = () => {
    setStatus("increase");
    increase();
  };

  const increase = useCallback(() => {
    // hour, minute, second가 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (second < 59) setSecond(second + 1);
    else {
      // 1000시간 미만으로만 설정 가능하도록 고정
      if (hour === 999 && minute === 59 && second === 59) {
        setStatus("stop");
        clearTimeout(playTimeout.current);
      } else if (minute < 59) {
        setSecond(0);
        setMinute(minute + 1);
      } else {
        setSecond(0);
        setMinute(0);
        setHour(hour + 1);
      }
    }
  }, [hour, minute, second]);

  const onDecrease = () => {
    if (!(hour === 0 && minute === 0 && second === 0)) {
      setStatus("decrease");
      decrease();
    }
  };

  const decrease = useCallback(() => {
    // hour, minute, second가 바뀔 때만 함수가 재생성되도록 useCallback 사용
    if (speed.current > 30) speed.current -= 10;
    if (second > 0) {
      if (hour === 0 && minute === 0 && second === 1) {
        setStatus("stop");
        clearTimeout(playTimeout.current);
      }
      setSecond(second - 1);
    } else {
      if (minute > 0) {
        setSecond(59);
        setMinute(minute - 1);
      } else {
        setSecond(59);
        setMinute(59);
        setHour(hour - 1);
      }
    }
  }, [hour, minute, second]);

  const offPress = () => {
    setStatus("pause");
    speed.current = 300;
    clearTimeout(timeout.current);
  };

  const secondChange = (e) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) {
      setSecond(0);
    } else if (+onlyNumber > 59) {
      // 60 넘어가면 초기화
      setSecond(0);
    } else {
      setSecond(+onlyNumber);
    }
  };

  const minuteChange = (e) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) {
      setMinute(0);
    } else if (+onlyNumber > 59) {
      // 60 넘어가면 초기화
      setMinute(0);
    } else {
      setMinute(+onlyNumber);
    }
  };

  const hourChange = (e) => {
    timePause();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) {
      setHour(0);
    } else if (+onlyNumber > 999) {
      // 999시간 넘어가면 0으로 초기화
      setHour(0);
    } else {
      setHour(+onlyNumber);
    }
  };

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    // 최초 시작
    if (startTime.current === null && status !== "play") {
      startTime.current = Date.now();
      setTime.current = new Date(
        second * 1000 + minute * 1000 * 60 + hour * 1000 * 60 * 60
      );
    }

    if (!(hour === 0 && minute === 0 && second === 0)) setStatus("play"); // 문자열은 기본형 데이터라 play를 play로 바꿔도 변화 X
  };

  const timeLap = () => {
    if (status === "play")
      setLap((prev) => [...prev, { hour, minute, second }]);
  };

  const timePause = () => {
    setStatus("pause");
    if (status === "play") {
      clearInterval(playTimeout.current);
      startTime.current = null;
      setTime.current = null;
    }
  };

  const timeReset = () => {
    setStatus("stop");
    setLap([]);
    clearInterval(playTimeout.current);
    setMs(0);
    setSecond(0);
    setMinute(0);
    setHour(0);
    startTime.current = null;
    setTime.current = null;
  };

  useEffect(() => {
    const cal = new Date(
      setTime.current - (Date.now() - startTime.current) + 999
    ); // 시작할 때 해당 시간에 1초를 부여하고 0이 되면 딱 끝나도록 하기 위해 999를 더해줌
    // play 눌렀을 때의 로직
    if (status === "play") {
      if (hour === 0 && minute === 0 && second === 0) {
        clearTimeout(playTimeout.current);
        setStatus("stop");
        startTime.current = null;
        setTime.current = null;
      } else {
        playTimeout.current = setTimeout(() => {
          setMs(cal.getUTCMilliseconds());
          setSecond(cal.getUTCSeconds());
          setMinute(cal.getUTCMinutes());
          setHour(cal.getUTCHours());
        }, 1);
      }
    }
    if (
      status === "pause" ||
      status === "stop" ||
      status === "increase" ||
      status === "decrease"
    ) {
      startTime.current = null;
      setTime.current = null;
    }

    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, ms, status]);

  useEffect(() => {
    if (status === "increase") {
      timeout.current = setTimeout(() => {
        increase();
      }, speed.current);
    } else if (status === "decrease") {
      timeout.current = setTimeout(() => {
        decrease();
      }, speed.current);
    }
  }, [increase, decrease, status]);

  return (
    <div css={totalContainer({ status, hour, minute, second })}>
      <div css={watchContainer}>
        <Plus
          alt="더하기"
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="plus"
        />
        <input
          type="text"
          value={hour >= 10 ? hour : "0" + hour}
          onChange={hourChange}
        ></input>
        <span>&nbsp;:&nbsp;</span>
        <input
          type="text"
          value={minute >= 10 ? minute : "0" + minute}
          onChange={minuteChange}
        ></input>
        <span>&nbsp;:&nbsp;</span>
        <input
          type="text"
          value={second >= 10 ? second : "0" + second}
          onChange={secondChange}
        ></input>
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
        {lap.map((elem, index) => (
          <p key={index}>
            {elem.hour >= 10 ? elem.hour : "0" + elem.hour} :{" "}
            {elem.minute >= 10 ? elem.minute : "0" + elem.minute} :{" "}
            {elem.second >= 10 ? elem.second : "0" + elem.second}
          </p>
        ))}
      </div>
    </div>
  );
};

const totalContainer = (props) => css`
  padding: 1.5rem;
  background-color: ${props.status === "play" &&
  props.hour === 0 &&
  props.minute === 0 &&
  props.second === 3
    ? "#ffd3d3"
    : props.status === "play" &&
      props.hour === 0 &&
      props.minute === 0 &&
      props.second === 2
    ? "#ff9b9b"
    : props.status === "play" &&
      props.hour === 0 &&
      props.minute === 0 &&
      props.second === 1
    ? "#ff5e5e"
    : "white"};
`;

const watchContainer = css`
  display: flex;
  justify-content: center;
  line-height: 50px;

  input {
    width: 70px;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
  }

  span {
    font-weight: 600;
    font-size: 2rem;
  }

  .plus:hover,
  .minus:hover {
    transform: scale(1.04, 1.04);
    transition: all ease 0.1s;
  }

  .plus:hover {
    fill: #bcfcff;
  }

  .minus:hover {
    fill: #ffc4c4;
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
