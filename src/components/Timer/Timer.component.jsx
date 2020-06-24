import React from "react";
import "./Timer.style.scss";
import { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const initialTime = 10;

  const [timerMinute, setTimerMinute] = useState(parseInt(initialTime / 60));
  const [timerSecond, setTimerSecond] = useState(parseInt(initialTime % 60));

  useEffect(() => {
    const timerStartTime = Date.now(); //Timer啟動時的時間
    // Timer啟動
    const countDownTimer = setInterval(() => {
      const currentTime = Date.now(); //當下時間
      const passedTime = parseInt((currentTime - timerStartTime) / 1000); //Timer啟動了多久

      const remain = initialTime - passedTime; //剩下多少時間

      setTimerMinute(parseInt(remain / 60));
      setTimerSecond(parseInt(remain % 60));

      // 如果歸零則停止
      if (remain <= 0) clearInterval(countDownTimer);
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <h1>
        {timerMinute >= 10 ? timerMinute : "0" + timerMinute}:
        {timerSecond >= 10 ? timerSecond : "0" + timerSecond}
      </h1>
    </div>
  );
}

export default Timer;
