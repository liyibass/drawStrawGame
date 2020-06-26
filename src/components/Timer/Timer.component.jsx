import React from "react";
import "./Timer.style.scss";
import { useState } from "react";

import CountDownTimer from "../CountDownTimer/CountDownTimer.component";
import { useDispatch } from "react-redux";

import { setCountDownSecond } from "../../redux/timer/timer.action";
import { clearWinner } from "../../redux/user/user.action";

function Timer() {
  const [second, setSecond] = useState(0);
  const dispatch = useDispatch();

  function submitHandler() {
    dispatch(setCountDownSecond(second));
    dispatch(clearWinner());
  }

  return (
    <div className="Timer">
      <h1>抽獎時間</h1>

      <div className="timer-input">
        <input
          type="text"
          value={second}
          name="second"
          onChange={(e) => setSecond(e.target.value)}
        />
        <label htmlFor="">秒</label>
        <button onClick={() => submitHandler()}>開始倒數</button>
      </div>

      <CountDownTimer />
    </div>
  );
}

export default Timer;
