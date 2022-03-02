interface SoundState {
  timerAlarm: Boolean;
}

interface ActionState {
  type: String;
}

const initialState = {
  timerAlarm: false,
};

const soundReducer = (
  state: SoundState = initialState,
  action: ActionState
) => {
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
