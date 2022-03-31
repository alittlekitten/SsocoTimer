import { combineReducers } from "redux"; // 만든 리듀서들을 하나로 합침
import tapReducer from "./tap";
import soundReducer from "./sound";
import clockReducer from "./clock";
import optionReducer from "./option";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  tapReducer,
  soundReducer,
  clockReducer,
  optionReducer,
});

export default rootReducer;
