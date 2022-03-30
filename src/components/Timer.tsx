import { css } from "@emotion/react";
import { ReactComponent as Plus } from "@images/plus.svg";
import { ReactComponent as Minus } from "@images/minus.svg";
import { ReactComponent as Play } from "@images/play.svg";
import { ReactComponent as Pause } from "@images/pause.svg";
import { ReactComponent as Stop } from "@images/stop.svg";
import { ReactComponent as Lap } from "@images/lap.svg";
import React from "react";
import useTimer from "@hooks/useTimer";

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
}

interface TimerProps {
  props: {
    time: ITime;
    lap: LapState[];
    status: string;
    speed: React.MutableRefObject<number>;
    onIncrease: () => void;
    onDecrease: () => void;
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
  const {
    time,
    lap,
    status,
    speed,
    onIncrease,
    onDecrease,
    offPress,
    secondChange,
    minuteChange,
    hourChange,
    timePlay,
    timeLap,
    timePause,
    timeReset,
  } = timerProps.props;
  const { second, minute, hour } = time;

  return (
    <div css={totalContainer({ status, hour, minute, second })}>
      <div css={watchContainer({ speed })}>
        <Plus
          onMouseDown={onIncrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="plus"
        />
        <input
          type="text"
          value={hour.toString().padStart(2, "0")}
          onChange={hourChange}
        ></input>
        <span>&nbsp;:&nbsp;</span>
        <input
          type="text"
          value={minute.toString().padStart(2, "0")}
          onChange={minuteChange}
        ></input>
        <span>&nbsp;:&nbsp;</span>
        <input
          type="text"
          value={second.toString().padStart(2, "0")}
          onChange={secondChange}
        ></input>
        <Minus
          onMouseDown={onDecrease}
          onMouseUp={offPress}
          onMouseLeave={offPress}
          className="minus"
        />
      </div>
      <div css={playContainer({ status })}>
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
            {elem.second.toString().padStart(2, "0")}
          </p>
        ))}
      </div>
    </div>
  );
};

interface totalProps {
  status: string;
  hour: number;
  minute: number;
  second: number;
}

const totalContainer = (props: totalProps) => css`
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

interface MutableRefObject<T> {
  current: T;
}
interface watchProps {
  speed: MutableRefObject<number>;
}

const watchContainer = (props: watchProps) => css`
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
`;

interface playProps {
  status: string;
}

const playContainer = (props: playProps) => css`
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
