/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Plus } from "../images/plus.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Stop } from "../images/stop.svg";
import { ReactComponent as Lap } from "../images/lap.svg";
import useTimer from "../hooks/useTimer";

const Timer = () => {
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
  } = useTimer();
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
        <Stop onClick={timeReset} className="stop" />
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

const watchContainer = (props) => css`
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
