type Theme = "light" | "dark";

export interface ThemeVariables {
  bgPage1: string;

  titleSsoco: string;
  titleTimer: string;
  titleStopwatch: string;
  titleClock: string;

  tapBtn: string;
  tapBtnActive: string;

  utilBtn: string;
  utilBtnActive: string;

  timeCtrlBtn: string;
  timeCtrlBtnHover: string;
  timeCtrlBtnActive: string;

  copyright1: string;
  copyright2: string;

  hrLine: string;
  text1: string;
  text2: string;

  hour12am: string;
  hour12pm: string;

  alert1: string;
  alert2: string;
  alert3: string;

  inputBorder: string;
}

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bgPage1: "#FFFFFF",
    titleSsoco: "#0083ff",
    titleTimer: "#1ca800",
    titleStopwatch: "#cf4fdd",
    titleClock: "#ff6b6b",
    tapBtn: "#EFEFEF",
    tapBtnActive: "#FFFCA5",
    utilBtn: "#000000",
    utilBtnActive: "#FF0000",
    timeCtrlBtn: "#000000",
    timeCtrlBtnHover: "#FF0000",
    timeCtrlBtnActive: "#FF0000",
    copyright1: "#7f7f7f",
    copyright2: "#FF0000",
    hrLine: "#f9eded",
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
    titleSsoco: "#0083ff",
    titleTimer: "#1ca800",
    titleStopwatch: "#cf4fdd",
    titleClock: "#ff6b6b",
    tapBtn: "#EFEFEF",
    tapBtnActive: "#FFFCA5",
    utilBtn: "#FFFFFF",
    utilBtnActive: "#FF0000",
    timeCtrlBtn: "#E0E0E0",
    timeCtrlBtnHover: "#FF0000",
    timeCtrlBtnActive: "#FF0000",
    copyright1: "#7f7f7f",
    copyright2: "#FF0000",
    hrLine: "#f9eded",
    text1: "#FFFFFF",
    text2: "#E0E0E0",
    hour12am: "#FF6B6B",
    hour12pm: "#0083FF",
    alert1: "#FFD3D3",
    alert2: "#FF9B9B",
    alert3: "#FF5E5E",
    inputBorder: "#c9c9c9",
  },
};

export default themeVariableSets;
