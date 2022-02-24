const initialState = {
  tap: "Timer",
};

const tapReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default tapReducer;
