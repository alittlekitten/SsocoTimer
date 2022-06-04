import { css, useTheme } from "@emotion/react";
import useDday from "@hooks/useDday";
import { ThemeVariables } from "@styles/palette";
import { Helmet } from "react-helmet-async";

const Dday = () => {
  const {
    year,
    month,
    day,
    ddayCal,
    yearOnChange,
    monthOnChange,
    dayOnChange,
  } = useDday();
  const theme = useTheme() as ThemeVariables;

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
        {ddayCal === null ? (
          <p>유효하지 않은 날짜입니다!</p>
        ) : ddayCal === 0 ? (
          <p>
            오늘이 바로 <span>D-day</span>!!
          </p>
        ) : ddayCal > 0 ? (
          <p>
            오늘로부터 <span>{ddayCal}</span>일 지났습니다!!
          </p>
        ) : (
          <p>
            앞으로 <span>{Math.abs(ddayCal)}</span>일 남았습니다!!
          </p>
        )}
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

    span {
      color: ${theme.highlightText};
    }
  }
`;

export default Dday;
