/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { tap } = useSelector((state) => state.tapReducer); // store에 있는 state를 가져옴

  return (
    <div css={headerStyle}>
      <span className="ssoco">Ssoco</span>
      <span>&nbsp;</span>
      {tap === "Timer" && <span className="timer">Timer</span>}
      {tap === "Stopwatch" && <span className="stopwatch">Stopwatch</span>}
    </div>
  );
};

const headerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 2rem;
  font-weight: 600;
  font-family: "HSYuji-Regular";

  .ssoco {
    color: #0083ff;
  }

  .timer {
    color: #1ca800;
  }

  .stopwatch {
    color: #5e1e1e;
  }
`;

export default Header;
