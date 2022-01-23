/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const Header = () => {
  return (
    <div css={headerStyle}>
      <span className="react">React</span>
      <span>&nbsp;</span>
      <span className="stopwatch">Stopwatch</span>
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

  .react {
    color: #0083ff;
  }

  .stopwatch {
    color: #5e1e1e;
  }
`;

export default Header;
