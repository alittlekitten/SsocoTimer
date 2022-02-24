/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Alarm } from "../images/alarm.svg";

const Title = () => {
  const { tap } = useSelector((state) => state.tapReducer); // store에 있는 state를 가져옴
  const { timerAlarm } = useSelector((state) => state.soundReducer);
  const dispatch = useDispatch();

  const MusicToggle = () => {
    if (timerAlarm === true) dispatch({ type: "timerAlarmOff" });
    else dispatch({ type: "timerAlarmOn" });
  };

  return (
    <div css={titleStyle({ timerAlarm })}>
      <span className="ssoco">Ssoco</span>
      <span>&nbsp;</span>
      {tap === "Timer" && <span className="timer">Timer</span>}
      {tap === "Timer" && <Alarm className="music" onClick={MusicToggle} />}
      {tap === "Stopwatch" && <span className="stopwatch">Stopwatch</span>}
      {tap === "Clock" && <span className="clock">Clock</span>}
    </div>
  );
};

const titleStyle = (props) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 2rem;
  font-weight: 600;
  font-family: "HSYuji-Regular";

  .music {
    position: absolute;
    right: 30px;
    fill: ${props.timerAlarm === true ? "red" : "black"};

    transition: all ease 0.3s;
    cursor: pointer;
  }

  .music:hover {
    transform: scale(1.04, 1.04);
  }

  .ssoco {
    color: #0083ff;
  }

  .timer {
    color: #1ca800;
  }

  .stopwatch {
    color: #5e1e1e;
  }

  .clock {
    color: #ff6b6b;
  }
`;

export default Title;
