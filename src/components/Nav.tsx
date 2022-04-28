import { css, useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/store";
import { ThemeVariables } from "@styles/palette";
import { Link } from "react-router-dom";

const Nav = () => {
  const { tap } = useSelector((state: RootState) => state.tapReducer);
  const dispatch = useDispatch(); // store의 reducer를 부름 -> reducer를 통해 새로운 action을 넘겨줌으로써 state를 변경함
  const theme = useTheme() as ThemeVariables;

  const onClickTimer = () => dispatch({ type: "Timer" });
  const onClickStopwatch = () => dispatch({ type: "Stopwatch" });
  const onClickClock = () => dispatch({ type: "Clock" });
  const onClickDday = () => dispatch({ type: "Dday" });

  return (
    <div css={Buttons({ tap, theme })}>
      <Link to="/">
        <button className="timer" onClick={onClickTimer}>
          타이머
        </button>
      </Link>
      <Link to="/stopwatch">
        <button className="stopwatch" onClick={onClickStopwatch}>
          스톱워치
        </button>
      </Link>
      <Link to="/clock">
        <button className="clock" onClick={onClickClock}>
          시계
        </button>
      </Link>
      <Link to="/dday">
        <button className="dday" onClick={onClickDday}>
          디데이
        </button>
      </Link>
    </div>
  );
};

interface ButtonsProps {
  tap: String;
  theme: ThemeVariables;
}

const Buttons = (props: ButtonsProps) => css`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  button {
    width: 90px;
    margin: 0;
    padding: 0.5rem 1rem;

    font-family: "HSYuji-Regular", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;

    border: none;
    border-radius: 4px;

    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    cursor: pointer;

    transition: 0.25s;

    white-space: nowrap; // 다음줄로 안넘어가게
  }

  .timer {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${props.tap === "Timer"
      ? props.theme.tapBtnActive
      : props.theme.tapBtn};
  }

  .stopwatch {
    background-color: ${props.tap === "Stopwatch"
      ? props.theme.tapBtnActive
      : props.theme.tapBtn};
  }

  .clock {
    background-color: ${props.tap === "Clock"
      ? props.theme.tapBtnActive
      : props.theme.tapBtn};
  }

  .dday {
    background-color: ${props.tap === "Dday"
      ? props.theme.tapBtnActive
      : props.theme.tapBtn};
  }
`;

export default Nav;
