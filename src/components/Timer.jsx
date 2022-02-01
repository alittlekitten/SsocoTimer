/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { ReactComponent as Plus } from "../images/plus.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";

const Timer = () => {
  const [second, setSecond] = useState(0); // 초
  const [minute, setMinute] = useState(0); //
  const [hour, setHour] = useState(0);
  const [lap, setLap] = useState([]); // 랩
  const [status, setStatus] = useState("stop");
  const isPressed = useRef(false); // 마우스 눌렸는지 여부
  const speed = useRef(300); // 마우스를 꾹 눌렀을 때 증감 스피드
  const timeout = useRef(null); // 증감 스피드를 조절 및 재귀적 사용을 위한 setTimeout 변수
  const playTimeout = useRef(null); // 재생버튼을 눌렀을 때 발생하는 Interval을 담기 위한 변수

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
      setSecond((prev) => {
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

  const secondChange = (e) => {
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
    timePause();
  };

  const minuteChange = (e) => {
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
    timePause();
  };

  const hourChange = (e) => {
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) {
      setHour(0);
    } else {
      setHour(+onlyNumber);
    }
    timePause();
  };

  // 타이머 상태에 따른 동작

  const timePlay = () => {
    if (second !== 0) setStatus("play"); // 문자열은 기본형 데이터라 play를 play로 바꿔도 변화 X
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
        if (second > 0) {
          if (hour === 0 && minute === 0 && second === 1) {
            setStatus("stop");
            clearTimeout(playTimeout.current);
          }
          setSecond(second - 1);
        } else {
          if (minute > 0) {
            setMinute(minute - 1);
            setSecond(59);
          } else if (hour > 0) {
            setHour(hour - 1);
            setMinute(59);
            setSecond(59);
          }
        }
      }, 1000);
    }

    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, status]);

  return (
    <div css={totalContainer({ hour, minute, second })}>
      <div css={watchContainer}>
        <Plus
          alt="더하기"
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="plus"
        />
        <input type="text" value={hour} onChange={hourChange}></input>
        <span>&nbsp;:&nbsp;</span>
        <input type="text" value={minute} onChange={minuteChange}></input>
        <span>&nbsp;:&nbsp;</span>
        <input type="text" value={second} onChange={secondChange}></input>
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
            {elem.hour} : {elem.minute} : {elem.second}
          </p>
        ))}
      </div>
    </div>
  );
};

const totalContainer = (props) => css`
  padding: 1.5rem;
  background-color: ${props.hour === 0 &&
  props.minute === 0 &&
  props.second === 3
    ? "#ffd3d3"
    : props.hour === 0 && props.minute === 0 && props.second === 2
    ? "#ff9b9b"
    : props.hour === 0 && props.minute === 0 && props.second === 1
    ? "#ff5e5e"
    : "white"};
`;

const watchContainer = css`
  display: flex;
  justify-content: center;

  input {
    width: 50px;
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
