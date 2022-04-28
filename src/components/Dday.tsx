import { css, useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { ThemeVariables } from "@styles/palette";
import { Helmet } from "react-helmet-async";

const Dday = () => {
  const nowTime = new Date();
  const [year, setYear] = useState<number>(nowTime.getFullYear());
  const [month, setMonth] = useState<number>(nowTime.getMonth() + 1);
  const [day, setDay] = useState<number>(nowTime.getDate());
  const [msg, setMsg] = useState<string>("");
  const theme = useTheme() as ThemeVariables;

  const yearOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nowYear = new Date().getFullYear();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setYear(0);
    else if (+onlyNumber > 2099) setYear(nowYear);
    else setYear(+onlyNumber);
  };

  const monthOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setMonth(0);
    else if (+onlyNumber > 12) return;
    else setMonth(+onlyNumber);
  };

  const dayOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxDay = new Date(year, month, 0).getDate();
    const originalValue = e.target.value;
    const onlyNumber = originalValue.replace(/[^0-9]/g, "");
    if (!onlyNumber) setDay(0);
    else if (+onlyNumber > maxDay) return;
    else setDay(+onlyNumber);
  };

  useEffect(() => {
    const today = new Date();
    const dday = new Date(year, month - 1, day);
    const calGetTime = today.getTime() - dday.getTime();
    const result = Math.floor(calGetTime / (1000 * 60 * 60 * 24));
    if (year < 1970 || year > 2099 || month === 0 || day === 0) {
      setMsg("유효하지 않은 날짜입니다!");
    } else {
      if (result === 0) setMsg(`오늘이 바로 D-Day!`);
      else if (result > 0) setMsg(`오늘로부터 ${result}일 지났습니다!!`);
      else setMsg(`앞으로 ${Math.abs(result)}일 남았습니다!!!`);
    }
  }, [year, month, day]);

  return (
    <>
      <Helmet>
        <title>Ssoco D-Day</title>
      </Helmet>
      <div css={inputContainer(theme)}>
        <p className="ymd">
          <input
            type="text"
            className="input-year"
            value={year}
            onChange={yearOnChange}
          ></input>
          년{" "}
          <input
            type="text"
            className="input-month"
            value={month}
            onChange={monthOnChange}
          ></input>
          월{" "}
          <input
            type="text"
            className="input-day"
            value={day}
            onChange={dayOnChange}
          ></input>
          일{" "}
        </p>
      </div>
      <div css={resultContainer(theme)}>
        <p>{msg}</p>
      </div>
    </>
  );
};

const inputContainer = (theme: ThemeVariables) => css`
  display: flex;
  justify-content: center;
  line-height: 50px;

  input {
    width: 60px;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    border-color: ${theme.inputBorder};
    color: ${theme.text1};
    background-color: ${theme.bgPage1};
    transition: 0.125s all ease-in;
  }

  .input-year {
    width: 100px;
  }

  p {
    margin: 0;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 2rem;
    white-space: nowrap; // 다음줄로 안넘어가게
    line-height: 50px;
    vertical-align: middle;
  }
`;

const resultContainer = (theme: ThemeVariables) => css`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-family: "HSYuji-Regular";
    font-weight: 600;
    font-size: 1.75rem;
    white-space: nowrap; // 다음줄로 안넘어가게
    line-height: 50px;
    vertical-align: middle;
    color: ${theme.text1};
  }
`;

export default Dday;
