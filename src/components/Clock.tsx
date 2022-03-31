import { css, useTheme } from "@emotion/react";
import { ThemeVariables } from "../styles/palette";

interface ITime {
  ms: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
}

interface ClockProps {
  props: {
    time: ITime;
    hour12: Boolean;
  };
}

const Clock = (clockProps: ClockProps) => {
  const { time, hour12 } = clockProps.props;
  const { second, minute, hour, day, month, year } = time;
  const theme = useTheme() as ThemeVariables;

  return (
    <div css={clockContainer(theme)}>
      <p className="ymd">
        <span className="year">{year}</span> /{" "}
        <span className="month">{month}</span> /{" "}
        <span className="day">{day}</span>
      </p>
      <p className="hms">
        {hour12 &&
          (hour < 12 ? (
            <span className="hour12am">AM </span>
          ) : (
            <span className="hour12pm">PM </span>
          ))}
        {hour12 &&
          (hour < 13 ? (
            <span className="hour">{hour.toString().padStart(2, "0")}</span>
          ) : (
            <span className="hour">
              {hour - 12 >= 10 ? hour - 12 : "0" + (hour - 12)}
            </span>
          ))}
        {!hour12 && (
          <span className="hour">{hour.toString().padStart(2, "0")}</span>
        )}{" "}
        : <span className="minute">{minute.toString().padStart(2, "0")}</span> :{" "}
        <span className="second">{second.toString().padStart(2, "0")}</span>
      </p>
    </div>
  );
};

export default Clock;

const clockContainer = (theme: ThemeVariables) => css`
  position: relative;
  padding: 1.5rem;
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

    .hour12am {
      color: ${theme.hour12am};
    }
    .hour12pm {
      color: ${theme.hour12pm};
    }

    .hour,
    .minute,
    .second {
      display: inline-block;
      text-align: center;
      width: 40px;
    }
  }

  .ymd {
    position: absolute;
    font-size: 1.1rem;
    top: 0px;
    line-height: 30px;
  }
`;
