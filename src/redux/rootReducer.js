import { combineReducers } from "redux";
import timerReducer from "./timer/timer.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  timer: timerReducer,
  user: userReducer,
});
