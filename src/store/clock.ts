interface ClockState {
  hour12: Boolean;
}

interface ActionState {
  type: String;
}

const initialState: ClockState = {
  hour12: false,
};

const clockReducer = (
  state: ClockState = initialState,
  action: ActionState
) => {
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
