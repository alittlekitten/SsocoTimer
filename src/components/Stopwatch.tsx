import { css, useTheme } from "@emotion/react";
import { ReactComponent as Play } from "@images/play.svg";
import { ReactComponent as Pause } from "@images/pause.svg";
import { ReactComponent as Stop } from "@images/stop.svg";
import { ReactComponent as Lap } from "@images/lap.svg";
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

interface StopwatchProps {
  props: {
    time: ITime;
    lap: LapState[];
    status: string;
    timePlay: () => void;
    timeLap: () => void;
    timePause: () => void;
    timeReset: () => void;
  };
}

const Stopwatch = (stopwatchProps: StopwatchProps) => {
  document.title = "SsocoStopwatch"; // 탭 이름 변경
  const { time, lap, status, timePlay, timeLap, timePause, timeReset } =
    stopwatchProps.props;
  const { ms, minute, second, hour } = time;
  const theme = useTheme() as ThemeVariables;

  return (
    <div css={totalContainer}>
      <div css={watchContainer(theme)}>
        <p>
          <span className="hour">{hour.toString().padStart(2, "0")}</span> :{" "}
          <span className="minute">{minute.toString().padStart(2, "0")}</span> :{" "}
          <span className="second">{second.toString().padStart(2, "0")}</span> :{" "}
          <span className="ms">{ms.toString().padStart(3, "0")}</span>
        </p>
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
      <div css={lapContainer(theme)}>
        <h3>-- lap --</h3>
        <div className="lap-items">
          {lap.map((elem, index) => (
            <p key={index}>
              {index + 1}. &nbsp;
              {elem.hour.toString().padStart(2, "0")} :{" "}
              {elem.minute.toString().padStart(2, "0")} :{" "}
              {elem.second.toString().padStart(2, "0")} :{" "}
              {elem.ms.toString().padStart(3, "0")}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const totalContainer = css`
  padding: 1.5rem;
`;

const watchContainer = (theme: ThemeVariables) => css`
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
    color: ${theme.text1};

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

const lapContainer = (theme: ThemeVariables) => css`
  display: flex;
  flex-direction: column;
  font-family: "HSYuji-Regular";

  h3 {
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lap-items {
    overflow-y: auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    p {
      margin: 0px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 16px;
      border-radius: 10px;
      background: ${theme.scrollBackground};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.scrollThumb};
      border-radius: 10px;
    }
  }
`;

export default Stopwatch;
