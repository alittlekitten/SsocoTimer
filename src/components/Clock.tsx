/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Clock = () => {
  const { hour12 } = useSelector((state: RootState) => state.clockReducer);

  const [ms, setMs] = useState<number>(0); // 밀리초 (정밀도 1/1000)
  const [second, setSecond] = useState<number>(0); // 초
  const [minute, setMinute] = useState<number>(0); // 분
  const [hour, setHour] = useState<number>(0); // 시
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const playTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const now = new Date(Date.now());
    playTimeout.current = setTimeout(() => {
      setYear(now.getFullYear());
      setMonth(now.getMonth() + 1);
      setDay(now.getDate());
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
      setMs(now.getMilliseconds());
    }, 1);

    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, ms]);

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
