/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import Title from "@components/Title";
import Nav from "@components/Nav";
import Timer from "@components/Timer";
import Stopwatch from "@components/Stopwatch";
import Clock from "@components/Clock";
import Header from "@components/Header";
import { RootState } from "@src/store";
import useTimer from "@hooks/useTimer";
import "@src/App.css";
import useStopwatch from "./hooks/useStopwatch";
import useClock from "./hooks/useClock";

const App = () => {
  const { tap } = useSelector((state: RootState) => state.tapReducer); // tapReducer의 상태를 가져올 수 있다. (여기서는 구조분해할당으로 가져옴)
  // 리렌더링을 줄이기 위해서는 최대한 자세하게 가져오는 것이 좋음

  const timerProps = useTimer();
  const stopwatchProps = useStopwatch();
  const clockProps = useClock();

  return (
    <div css={PageContainer}>
      <Nav />
      <div css={MainContainer}>
        <Header />
        <Title />
        {tap === "Timer" && <Timer props={timerProps} />}
        {tap === "Stopwatch" && <Stopwatch props={stopwatchProps} />}
        {tap === "Clock" && <Clock props={clockProps} />}
      </div>
    </div>
  );
};

const PageContainer = css`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%);
  display: flex;
`;

const MainContainer = css`
  width: 450px;
`;

export default App;
