interface TapState {
  tap: String;
}

interface ActionState {
  type: String;
}

const initialState: TapState = {
  tap: "Timer",
};

const tapReducer = (state: TapState = initialState, action: ActionState) => {
  switch (action.type) {
    case "Timer":
      return {
        ...state,
        tap: "Timer",
      };
    case "Stopwatch":
      return {
        ...state,
        tap: "Stopwatch",
      };
    case "Clock":
      return {
        ...state,
        tap: "Clock",
      };
    case "Dday":
      return {
        ...state,
        tap: "Dday",
      };
    default:
      return state;
  }
};

export default tapReducer;
