/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Tistory } from "../images/tistory.svg";

const Copyright = () => {
  return (
    <div>
      <div css={main}>
        <span className="copyright">Copyright 2022. by alittlekitten</span>
        <div className="icons">
          <Github className="github" />
          <Tistory className="tistory" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Copyright;

const main = css`
  display: flex;
  align-items: center;
  justify-content: right;
  font-family: "HSYuji-Regular";
  font-weight: 600;
  font-size: 0.8rem;
  height: 30px;

  .copyright {
    position: absolute;
    right: 60px;
  }

  .icons {
    display: flex;
    align-items: center;

    .github,
    .tistory {
      cursor: pointer;
      margin-left: 0.5rem;
    }

    .github:hover {
      width: 24px;
      height: 24px;
      fill: red;
    }

    .tistory:hover {
      width: 22px;
      height: 22px;
      fill: red;
    }
  }
`;
