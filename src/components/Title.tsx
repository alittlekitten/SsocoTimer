import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Alarm } from "../images/alarm.svg";
import { ReactComponent as Hour12 } from "../images/hour12.svg";
import { ReactComponent as Hour24 } from "../images/hour24.svg";
import { RootState } from "../store";

const Title = () => {
  const { tap } = useSelector((state: RootState) => state.tapReducer); // store에 있는 state를 가져옴
  const { timerAlarm } = useSelector((state: RootState) => state.soundReducer);
  const { hour12 } = useSelector((state: RootState) => state.clockReducer);
  const dispatch = useDispatch();
  const toggleMusic = () => {
    if (timerAlarm === true) dispatch({ type: "TimerAlarmOff" });
    else dispatch({ type: "TimerAlarmOn" });
  };

  const toggleClock = () => {
    if (hour12) dispatch({ type: "Hour24" });
    else dispatch({ type: "Hour12" });
  };

  return (
    <div css={titleStyle({ timerAlarm })}>
      <span className="ssoco">Ssoco</span>
      <span>&nbsp;</span>
      {tap === "Timer" && <span className="timer">Timer</span>}
      {tap === "Timer" && <Alarm className="music" onClick={toggleMusic} />}
      {tap === "Stopwatch" && <span className="stopwatch">Stopwatch</span>}
      {tap === "Clock" && <span className="clock">Clock</span>}
      {tap === "Clock" &&
        (!hour12 ? (
          <Hour24 className="hour24" onClick={toggleClock}></Hour24>
        ) : (
          <Hour12 className="hour12" onClick={toggleClock}></Hour12>
        ))}
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

  .hour24,
  .hour12 {
    position: absolute;
    right: 30px;

    transition: all ease 0.3s;
    cursor: pointer;
  }

  .hour24:hover,
  .hour12:hover {
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
