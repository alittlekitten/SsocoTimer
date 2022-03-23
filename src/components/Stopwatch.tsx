import { css } from "@emotion/react";
import { ReactComponent as Play } from "@images/play.svg";
import { ReactComponent as Pause } from "@images/pause.svg";
import { ReactComponent as Stop } from "@images/stop.svg";
import { ReactComponent as Lap } from "@images/lap.svg";
import useStopwatch from "@hooks/useStopwatch";

const Timer = () => {
  const { time, lap, status, timePlay, timeLap, timePause, timeReset } =
    useStopwatch();
  const { ms, minute, second, hour } = time;

  return (
    <div css={totalContainer}>
      <div css={watchContainer}>
        <p>
          <span className="hour">{hour.toString().padStart(2, "0")}</span> :{" "}
          <span className="minute">{minute.toString().padStart(2, "0")}</span> :{" "}
          <span className="second">{second.toString().padStart(2, "0")}</span> :{" "}
          <span className="ms">{ms.toString().padStart(3, "0")}</span>
        </p>
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
