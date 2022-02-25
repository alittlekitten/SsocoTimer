const initialState = {
  timerAlarm: false,
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TimerAlarmOff":
      return {
        ...state,
        timerAlarm: false,
      };
    case "TimerAlarmOn":
      return {
        ...state,
        timerAlarm: true,
      };
    default:
      return state;
  }
};

export default soundReducer;
