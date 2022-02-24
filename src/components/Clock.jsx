/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";

const Clock = () => {
  const [ms, setMs] = useState(0); // 밀리초 (정밀도 1/1000)
  const [second, setSecond] = useState(0); // 초
  const [minute, setMinute] = useState(0); // 분
  const [hour, setHour] = useState(0); // 시
  const playTimeout = useRef(null);

  useEffect(() => {
    const now = new Date(Date.now());
    playTimeout.current = setTimeout(() => {
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSecond(now.getSeconds());
      setMs(now.getMilliseconds());
    }, 1);

    return () => clearTimeout(playTimeout.current);
  }, [hour, minute, second, ms]);

  return (
    <div css={clockContainer}>
      <p>
        <span className="hour">{hour >= 10 ? hour : "0" + hour}</span> :{" "}
        <span className="minute">{minute >= 10 ? minute : "0" + minute}</span> :{" "}
        <span className="second">{second >= 10 ? second : "0" + second}</span> :{" "}
        <span className="ms">
          {ms >= 100 ? ms : ms >= 10 ? "0" + ms : "00" + ms}
        </span>
      </p>
    </div>
  );
};

export default Clock;

const clockContainer = css`
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
