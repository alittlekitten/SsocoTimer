const initialState = {
  hour12: false,
};

const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Hour24":
      return {
        ...state,
        hour12: false,
      };
    case "Hour12":
      return {
        ...state,
        hour12: true,
      };
    default:
      return state;
  }
};

export default clockReducer;
