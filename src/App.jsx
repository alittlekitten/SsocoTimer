/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import Title from "./components/Title.jsx";
import Nav from "./components/Nav.jsx";
import Timer from "./components/Timer.jsx";
import Stopwatch from "./components/Stopwatch.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

const App = () => {
  const { tap } = useSelector((state) => state.tapReducer); // tapReducer의 상태를 가져올 수 있다. (여기서는 구조분해할당으로 가져옴)
  // 리렌더링을 줄이기 위해서는 최대한 자세하게 가져오는 것이 좋음

  return (
    <div css={PageContainer}>
      <Nav />
      <div css={MainContainer}>
        <Header />
        <Title />
        {tap === "Timer" && <Timer />}
        {tap === "Stopwatch" && <Stopwatch />}
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
