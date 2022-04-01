/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "@components/Title";
import Nav from "@components/Nav";
import Timer from "@components/Timer";
import Stopwatch from "@components/Stopwatch";
import Clock from "@components/Clock";
import Header from "@components/Header";
import { RootState } from "@src/store";
import useTimer from "@hooks/useTimer";
import "@src/App.css";
import useStopwatch from "@hooks/useStopwatch";

import colorSet from "@styles/palette";
import { useLayoutEffect } from "react";

// 로컬스토리지의 themeState 가져와서 확인하고 존재하면 theme 변경하기

const App = () => {
  const { tap } = useSelector((state: RootState) => state.tapReducer); // tapReducer의 상태를 가져올 수 있다. (여기서는 구조분해할당으로 가져옴)
  const { themeStatus } = useSelector(
    (state: RootState) => state.optionReducer
  );
  // 리렌더링을 줄이기 위해서는 최대한 자세하게 가져오는 것이 좋음

  const dispatch = useDispatch();

  const timerProps = useTimer();
  const stopwatchProps = useStopwatch();

  const timerSecond = timerProps.time.second;
  const timerMinute = timerProps.time.minute;
  const timerHour = timerProps.time.hour;
  const timerStatus = timerProps.status;

  // 최초 상태값 로컬스토리지에서 확인용
  // 해당 로직은 최초에만 실행되고 그 다음에는 실행될 필요가 없기 때문에 dependency에 빈 배열을 넣음
  // 해당 작업이 완료된 이후에 화면에 paint가 되어야 깜빡임 현상이 없기 때문에 useLayoutEffect 사용
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("themeState");
    if (savedTheme === "dark") dispatch({ type: "dark" });
  }, []);

  return (
    <ThemeProvider
      theme={themeStatus == "dark" ? colorSet.dark : colorSet.light}
    >
      <BrowserRouter>
        <div
          css={Viewport({
            themeStatus,
            timerSecond,
            timerMinute,
            timerHour,
            timerStatus,
          })}
        >
          <div css={PageContainer}>
            <Nav />
            <div css={MainContainer}>
              <Header />
              <Title />
              <Routes>
                {tap === "Timer" && (
                  <Route
                    path="/*"
                    element={<Timer props={timerProps} />}
                  ></Route>
                )}
                {tap === "Stopwatch" && (
                  <Route
                    path="/stopwatch"
                    element={<Stopwatch props={stopwatchProps} />}
                  ></Route>
                )}
                {tap === "Clock" && (
                  <Route path="/clock" element={<Clock />}></Route>
                )}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

interface ViewportProps {
  themeStatus: string;
  timerSecond: number;
  timerMinute: number;
  timerHour: number;
  timerStatus: string;
}

const Viewport = (props: ViewportProps) => css`
  width: 100vw;
  height: 100vh;
  background-color: ${props.themeStatus === "light"
    ? props.timerStatus === "play" &&
      props.timerHour === 0 &&
      props.timerMinute === 0 &&
      props.timerSecond === 2
      ? colorSet.light.alert1
      : props.timerStatus === "play" &&
        props.timerHour === 0 &&
        props.timerMinute === 0 &&
        props.timerSecond === 1
      ? colorSet.light.alert2
      : props.timerStatus === "play" &&
        props.timerHour === 0 &&
        props.timerMinute === 0 &&
        props.timerSecond === 0
      ? colorSet.light.alert3
      : colorSet.light.bgPage1
    : props.timerStatus === "play" &&
      props.timerHour === 0 &&
      props.timerMinute === 0 &&
      props.timerSecond === 2
    ? colorSet.dark.alert1
    : props.timerStatus === "play" &&
      props.timerHour === 0 &&
      props.timerMinute === 0 &&
      props.timerSecond === 1
    ? colorSet.dark.alert2
    : props.timerStatus === "play" &&
      props.timerHour === 0 &&
      props.timerMinute === 0 &&
      props.timerSecond === 0
    ? colorSet.dark.alert3
    : colorSet.dark.bgPage1};
  color: ${props.themeStatus === "light"
    ? colorSet.light.text1
    : colorSet.dark.text1};
  transition: 0.125s all ease-in;
`;

const PageContainer = css`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%);
  display: flex;
`;

const MainContainer = css`
  width: 500px;
`;

export default App;
