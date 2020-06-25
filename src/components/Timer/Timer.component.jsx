import React from "react";
import "./Timer.style.scss";
import { useState } from "react";
import { useEffect } from "react";
import CountDownTimer from "../CountDownTimer/CountDownTimer.component";

function Timer() {
  const [minute, setMinute] = useState(0);
  const [countDownTime, setCountDownTime] = useState(0);

  function submitHandler() {
    setCountDownTime(minute);
  }

  return (
    <div className="Timer">
      <h1>抽獎時間</h1>

      <div className="timer-input">
        <input
          type="text"
          value={minute}
          name="minute"
          onChange={(e) => setMinute(e.target.value)}
        />
        <label htmlFor="">分鐘</label>
        <button onClick={() => submitHandler()}>開始倒數</button>
      </div>

      <CountDownTimer seconds={countDownTime * 60} />
    </div>
  );
}

export default Timer;
