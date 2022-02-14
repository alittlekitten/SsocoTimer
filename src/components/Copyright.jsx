/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Tistory } from "../images/tistory.svg";

const Copyright = () => {
  const githubOnClick = () => {
    window.open("https://github.com/alittlekitten/");
  };

  const TistoryOnClick = () => {
    window.open("https://ssocoit.tistory.com/");
  };

  return (
    <div>
      <div css={main}>
        <span className="copyright">
          Copyright 2022. by <span className="github-id">alittlekitten</span>
        </span>
        <div className="icons">
          <Github className="github" onClick={githubOnClick} />
          <Tistory className="tistory" onClick={TistoryOnClick} />
        </div>
      </div>
      <div css={hr}>
        <hr />
      </div>
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
  color: #7f7f7f;
  height: 30px;

  .copyright {
    position: absolute;
    right: 60px;

    .github-id {
      color: red;
    }
  }

  .icons {
    display: flex;
    align-items: center;

    .github,
    .tistory {
      cursor: pointer;
      margin-left: 0.5rem;
    }

    .github:hover,
    .tistory:hover {
      transform: scale(1.1, 1.1);
      transition: all ease 0.3s;
      fill: red;
    }
  }
`;

const hr = css`
  hr {
    border: solid 1px #f9eded;
  }
`;
