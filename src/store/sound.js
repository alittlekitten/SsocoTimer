const initialState = {
  timerAlarm: false,
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "timerAlarmOff":
      return {
        ...state,
        timerAlarm: false,
      };
    case "timerAlarmOn":
      return {
        ...state,
        timerAlarm: true,
      };
    default:
      return state;
  }
};

export default soundReducer;
