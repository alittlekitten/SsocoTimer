import { css, useTheme } from "@emotion/react";
import { ReactComponent as Plus } from "@images/plus.svg";
import { ReactComponent as Minus } from "@images/minus.svg";
import { ReactComponent as Play } from "@images/play.svg";
import { ReactComponent as Pause } from "@images/pause.svg";
import { ReactComponent as Stop } from "@images/stop.svg";
import { ReactComponent as Lap } from "@images/lap.svg";
import React from "react";
import { ThemeVariables } from "@styles/palette";

interface ITime {
  ms: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
}

interface LapState {
  hour: number;
  minute: number;
  second: number;
  ms: number;
}

interface TimerProps {
  props: {
    time: ITime;
    lap: LapState[];
    status: string;
    speed: React.MutableRefObject<number>;
    secondOnIncrease: () => void;
    secondOnDecrease: () => void;
    minuteOnIncrease: () => void;
    minuteOnDecrease: () => void;
    hourOnIncrease: () => void;
    hourOnDecrease: () => void;
    offPress: () => void;
    secondChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    minuteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hourChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    timePlay: () => void;
    timeLap: () => void;
    timePause: () => void;
    timeReset: () => void;
  };
}

const Timer = (timerProps: TimerProps) => {
  document.title = "SsocoTimer"; // 탭 이름 변경
  const {
    time,
    lap,
    status,
    speed,
    secondOnIncrease,
    secondOnDecrease,
    minuteOnIncrease,
    minuteOnDecrease,
    hourOnIncrease,
    hourOnDecrease,
    offPress,
    secondChange,
    minuteChange,
    hourChange,
    timePlay,
    timeLap,
    timePause,
    timeReset,
  } = timerProps.props;
  const { second, minute, hour, ms } = time;
  const theme = useTheme() as ThemeVariables;

  return (
    <div css={totalContainer}>
      <div css={watchContainer({ speed, hour, minute, second, ms, theme })}>
        <div className="hours">
          <Plus
            onMouseDown={hourOnIncrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="plus"
          />
          <input
            type="text"
            value={hour.toString().padStart(2, "0")}
            onChange={hourChange}
          ></input>
          <Minus
            onMouseDown={hourOnDecrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="minus"
          />
        </div>
        <span className="colon">&nbsp;:&nbsp;</span>
        <div className="minutes">
          <Plus
            onMouseDown={minuteOnIncrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="plus"
          />
          <input
            type="text"
            value={minute.toString().padStart(2, "0")}
            onChange={minuteChange}
          ></input>
          <Minus
            onMouseDown={minuteOnDecrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="minus"
          />
        </div>
        <span className="colon">&nbsp;:&nbsp;</span>
        <div className="seconds">
          <Plus
            onMouseDown={secondOnIncrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="plus"
          />
          <input
            type="text"
            value={second.toString().padStart(2, "0")}
            onChange={secondChange}
          ></input>
          <Minus
            onMouseDown={secondOnDecrease}
            onMouseUp={offPress}
            onMouseLeave={offPress}
            className="minus"
          />
        </div>
        <span className="colon">&nbsp;:&nbsp;</span>
        <div className="milliseconds">
          <span className="ms">{ms.toString().padStart(3, "0")}</span>
        </div>
      </div>
      <div css={playContainer({ status, theme })}>
        {status === "play" ? (
          <Pause onClick={timePause} className="pause" />
        ) : (
          <Play onClick={timePlay} className="play" />
        )}
        <Lap onClick={timeLap} className="lap" />
        <Stop onClick={timeReset} className="stop" />
      </div>
      <div css={lapContainer}>
        <h3>-- lap --</h3>
        {lap.map((elem, index) => (
          <p key={index}>
            {elem.hour.toString().padStart(2, "0")} :{" "}
            {elem.minute.toString().padStart(2, "0")} :{" "}
            {elem.second.toString().padStart(2, "0")} :{" "}
            {elem.ms.toString().padStart(3, "0")}
          </p>
        ))}
      </div>
    </div>
  );
};

const totalContainer = () => css`
  padding: 1.5rem;
  padding-top: 0px;
`;

interface MutableRefObject<T> {
  current: T;
}
interface watchProps {
  speed: MutableRefObject<number>;
  hour: number;
  minute: number;
  second: number;
  ms: number;
  theme: ThemeVariables;
}

const watchContainer = (props: watchProps) => css`
  display: flex;
  justify-content: center;
  line-height: 50px;

  input {
    width: 60px;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    border-color: ${props.theme.inputBorder};
    color: ${props.theme.text1};
    background-color: ${props.theme.bgPage1};
    transition: 0.125s all ease-in;
  }

  span {
    width: 70px;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
  }

  .colon {
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hours,
  .minutes,
  .seconds,
  .milliseconds {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .plus,
  .minus {
    cursor: pointer;
  }

  .plus:hover,
  .minus:hover {
    transform: scale(1.04, 1.04);
    transition: all ease 0.1s;
  }

  .plus:hover {
    fill: rgba(${props.speed.current / 1.4}, 255, 255);
  }

  .minus:hover {
    fill: rgba(
      255,
      ${props.speed.current / 1.4 + 20},
      ${props.speed.current / 1.4 + 20}
    );
  }

  .minus:hover {
    ${props.ms === 0 &&
    props.second === 0 &&
    props.minute === 0 &&
    props.hour === 0
      ? `fill: ${props.theme.bgPage1}; transform: none; transition: none;`
      : ``}
  }
`;

interface playProps {
  status: string;
  theme: ThemeVariables;
}

const playContainer = (props: playProps) => css`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & :not(:first-of-type) {
    margin-left: 1rem;
  }

  .pause {
    fill: ${props.theme.timeCtrlBtnActive};
  }

  .play,
  .lap,
  .pause,
  .stop {
    cursor: pointer;
    fill: ${props.theme.timeCtrlBtn};
  }

  .play:hover,
  .lap:hover,
  .pause:hover,
  .stop:hover {
    transform: scale(1.04, 1.04);
    transition: all ease 0.1s;
    fill: ${props.theme.timeCtrlBtnHover};
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
