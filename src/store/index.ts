import { combineReducers } from "redux"; // 만든 리듀서들을 하나로 합침
import tapReducer from "./tap";
import soundReducer from "./sound";
import clockReducer from "./clock";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  tapReducer,
  soundReducer,
  clockReducer,
});

export default rootReducer;
