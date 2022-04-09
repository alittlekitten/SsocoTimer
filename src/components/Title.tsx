import { css, useTheme } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Alarm } from "@images/alarm.svg";
import { ReactComponent as Hour12 } from "@images/hour12.svg";
import { ReactComponent as Hour24 } from "@images/hour24.svg";
import { RootState } from "@src/store";
import { ThemeVariables } from "@styles/palette";
import { useState } from "react";

const Title = () => {
  const [ssocoClickCnt, setSsocoClickCnt] = useState<number>(0);
  const [tapClickCnt, setTapClickCnt] = useState<number>(0);
  const { tap } = useSelector((state: RootState) => state.tapReducer); // store에 있는 state를 가져옴
  const { timerAlarm } = useSelector((state: RootState) => state.soundReducer);
  const { hour12 } = useSelector((state: RootState) => state.clockReducer);
  const theme = useTheme() as ThemeVariables;
  const dispatch = useDispatch();

  const toggleMusic = () => {
    if (timerAlarm === true) dispatch({ type: "TimerAlarmOff" });
    else dispatch({ type: "TimerAlarmOn" });
  };

  const toggleClock = () => {
    if (hour12) dispatch({ type: "Hour24" });
    else dispatch({ type: "Hour12" });
  };

  const ssocoClick = () => setSsocoClickCnt(ssocoClickCnt + 1);
  const tapClick = () => setTapClickCnt(tapClickCnt + 1);

  return (
    <div css={titleStyle({ timerAlarm, theme, ssocoClickCnt, tapClickCnt })}>
      <span className="ssoco" onClick={ssocoClick}>
        Ssoco
      </span>
      <span>&nbsp;</span>
      {tap === "Timer" && (
        <span className="timer" onClick={tapClick}>
          Timer
        </span>
      )}
      {tap === "Timer" && <Alarm className="music" onClick={toggleMusic} />}
      {tap === "Stopwatch" && (
        <span className="stopwatch" onClick={tapClick}>
          Stopwatch
        </span>
      )}
      {tap === "Clock" && (
        <span className="clock" onClick={tapClick}>
          Clock
        </span>
      )}
      {tap === "Clock" &&
        (!hour12 ? (
          <Hour24 className="hour24" onClick={toggleClock}></Hour24>
        ) : (
          <Hour12 className="hour12" onClick={toggleClock}></Hour12>
        ))}
    </div>
  );
};

interface titleProps {
  timerAlarm: Boolean;
  theme: ThemeVariables;
  ssocoClickCnt: number;
  tapClickCnt: number;
}

const titleStyle = (props: titleProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 2rem;
  font-weight: 600;
  font-family: "HSYuji-Regular";
  user-select: none;

  .music {
    position: absolute;
    right: 30px;
    fill: ${props.timerAlarm === true
      ? props.theme.utilBtnActive
      : props.theme.utilBtn};

    transition: all ease 0.3s;
    cursor: pointer;
  }

  .hour24,
  .hour12 {
    position: absolute;
    right: 30px;

    transition: all ease 0.3s;
    cursor: pointer;
  }

  .hour24:hover,
  .hour12:hover,
  .music:hover {
    transform: scale(1.04, 1.04) rotate(15deg);
  }

  .ssoco {
    color: ${props.theme.titleSsoco};
    transform: rotate(${-props.ssocoClickCnt}deg);
    transition: all ease 0.3s;
  }

  .timer,
  .stopwatch,
  .clock {
    transform: rotate(${props.tapClickCnt * 125}deg);
    transition: all ease 0.2s;
  }

  .timer {
    color: ${props.theme.titleTimer};
  }

  .stopwatch {
    color: ${props.theme.titleStopwatch};
  }

  .clock {
    color: ${props.theme.titleClock};
  }
`;

export default Title;
