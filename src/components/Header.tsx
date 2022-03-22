import { css } from "@emotion/react";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Tistory } from "../images/tistory.svg";
import { ReactComponent as Email } from "../images/email.svg";

const Header = () => {
  const onClickGithub = () => {
    window.open("https://github.com/alittlekitten/");
  };

  const onClickTistory = () => {
    window.open("https://ssocoit.tistory.com/");
  };

  const onClickEmail = () => {
    window.open("mailto:dlscjs8646@gmail.com");
  };

  return (
    <div>
      <div css={main}>
        <span className="version">Ssoco Timer v1.2.1 </span>

        <div className="icons">
          <span className="copyright">
            Copyright 2022. by <span className="github-id">alittlekitten</span>
          </span>
          <Github className="github" onClick={onClickGithub} />
          <Tistory className="tistory" onClick={onClickTistory} />
          <Email className="email" onClick={onClickEmail} />
        </div>
      </div>
      <div css={hr}>
        <hr />
      </div>
    </div>
  );
};

export default Header;

const main = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "HSYuji-Regular";
  font-weight: 600;
  font-size: 0.8rem;
  color: #7f7f7f;
  height: 30px;

  .version {
    color: black;
  }

  .icons {
    display: flex;
    align-items: center;

    .github-id {
      color: red;
    }

    .github,
    .tistory,
    .email {
      cursor: pointer;
      margin-left: 0.75rem;
    }

    .github:hover,
    .tistory:hover,
    .email:hover {
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
