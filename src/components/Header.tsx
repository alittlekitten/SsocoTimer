import { css, useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/store";
import { ReactComponent as Github } from "@images/github.svg";
import { ReactComponent as Tistory } from "@images/tistory.svg";
import { ReactComponent as Email } from "@images/email.svg";
import { ReactComponent as Sun } from "@images/sun.svg";
import { ReactComponent as Moon } from "@images/moon.svg";
import { ThemeVariables } from "@styles/palette";

const Header = () => {
  const { themeStatus } = useSelector(
    (state: RootState) => state.optionReducer
  );
  const dispatch = useDispatch();
  const theme = useTheme() as ThemeVariables;

  const onClickGithub = () => {
    window.open("https://github.com/alittlekitten/");
  };

  const onClickTistory = () => {
    window.open("https://ssocoit.tistory.com/");
  };

  const onClickEmail = () => {
    window.open("mailto:dlscjs8646@gmail.com");
  };

  const toggleTheme = () => {
    if (themeStatus === "light") dispatch({ type: "dark" });
    else dispatch({ type: "light" });
  };

  return (
    <div>
      <div css={main(theme)}>
        <span className="version">Ssoco Timer v1.5.0 </span>

        <div className="icons">
          <span className="copyright">
            Copyright 2022. by <span className="github-id">alittlekitten</span>
          </span>
          {themeStatus == "dark" ? (
            <Moon className="moon" onClick={toggleTheme} />
          ) : (
            <Sun className="sun" onClick={toggleTheme} />
          )}
          <Github className="github" onClick={onClickGithub} />
          <Tistory className="tistory" onClick={onClickTistory} />
          <Email className="email" onClick={onClickEmail} />
        </div>
      </div>
      <div css={hr(theme)}>
        <hr />
      </div>
    </div>
  );
};

export default Header;

const main = (theme: ThemeVariables) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "HSYuji-Regular";
  font-weight: 600;
  font-size: 0.8rem;
  color: ${theme.copyright1};
  height: 30px;

  .version {
    color: ${theme.text2};
  }

  .icons {
    display: flex;
    align-items: center;

    .github-id {
      color: ${theme.copyright2};
    }

    .moon,
    .sun,
    .github,
    .tistory,
    .email {
      cursor: pointer;
      margin-left: 0.75rem;
      fill: ${theme.utilBtn};
      transition: all ease 0.3s;
    }

    .moon:hover,
    .sun:hover,
    .github:hover,
    .tistory:hover,
    .email:hover {
      transform: scale(1.1, 1.1) rotate(15deg);
      transition: all ease 0.3s;
    }
  }
`;

const hr = (theme: ThemeVariables) => css`
  hr {
    border: solid 1px ${theme.hrLine};
  }
`;
