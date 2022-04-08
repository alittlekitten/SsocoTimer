type Theme = "light" | "dark";

export interface ThemeVariables {
  [key: string]: string; // by. pyo-sh
  // string을 직접 부여하면 반드시 string 속성이 와야하고
  // 지금처럼 [key: string]: string 형태로 부여하면 속성 상관 없이 key와 속성이 모두 string이면 된다.
}

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bgPage1: "#FFFFFF",
    titleSsoco: "#0083FF",
    titleTimer: "#1CA800",
    titleStopwatch: "#CF4FDD",
    titleClock: "#FF6B6B",
    tapBtn: "#EFEFEF",
    tapBtnActive: "#FFFCA5",
    utilBtn: "#000000",
    utilBtnActive: "#FF0000",
    timeCtrlBtn: "#000000",
    timeCtrlBtnHover: "#FF0000",
    timeCtrlBtnActive: "#FF0000",
    copyright1: "#7F7F7F",
    copyright2: "#FF0000",
    hrLine: "#F9EDED",
    text1: "#000000",
    text2: "#282828",
    hour12am: "#FF6B6B",
    hour12pm: "#0083FF",
    alert1: "#FFD3D3",
    alert2: "#FF9B9B",
    alert3: "#FF5E5E",
    inputBorder: "#828282",
  },
  dark: {
    bgPage1: "#1E1E1E",
    titleSsoco: "#0083FF",
    titleTimer: "#1CA800",
    titleStopwatch: "#CF4FDD",
    titleClock: "#FF6B6B",
    tapBtn: "#EFEFEF",
    tapBtnActive: "#FFFCA5",
    utilBtn: "#FFFFFF",
    utilBtnActive: "#FF0000",
    timeCtrlBtn: "#E0E0E0",
    timeCtrlBtnHover: "#FF0000",
    timeCtrlBtnActive: "#FF0000",
    copyright1: "#7F7F7F",
    copyright2: "#FF0000",
    hrLine: "#F9EDED",
    text1: "#FFFFFF",
    text2: "#E0E0E0",
    hour12am: "#FF6B6B",
    hour12pm: "#0083FF",
    alert1: "#FFD3D3",
    alert2: "#FF9B9B",
    alert3: "#FF5E5E",
    inputBorder: "#C9C9C9",
  },
};

export default themeVariableSets;
