import { css } from "@emotion/react";
import useClock from "../hooks/useClock";

const Clock = () => {
  const { time, hour12 } = useClock();
  const { second, minute, hour, day, month, year } = time;

  return (
    <div css={clockContainer}>
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
          (hour < 12 ? (
            <span className="hour">{hour >= 10 ? hour : "0" + hour}</span>
          ) : (
            <span className="hour">
              {hour - 12 >= 10 ? hour - 12 : "0" + (hour - 12)}
            </span>
          ))}
        {!hour12 && (
          <span className="hour">{hour >= 10 ? hour : "0" + hour}</span>
        )}{" "}
        : <span className="minute">{minute >= 10 ? minute : "0" + minute}</span>{" "}
        : <span className="second">{second >= 10 ? second : "0" + second}</span>
      </p>
    </div>
  );
};

export default Clock;

const clockContainer = css`
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
      color: #ff6b6b;
    }
    .hour12pm {
      color: #0083ff;
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
