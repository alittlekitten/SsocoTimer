type themeColor = "light" | "dark";

interface OptionState {
  themeStatus: themeColor;
}

interface ActionState {
  type: String;
}

const initialState: OptionState = {
  themeStatus: "light",
};

const optionReducer = (
  state: OptionState = initialState,
  action: ActionState
) => {
  switch (action.type) {
    case "light":
      localStorage.setItem("themeState", "light");
      return {
        ...state,
        themeStatus: "light",
      };
    case "dark":
      localStorage.setItem("themeState", "dark");
      return {
        ...state,
        themeStatus: "dark",
      };
    default:
      return state;
  }
};

export default optionReducer;
