import React from "react";
import "./CountDownTimer.style.scss";
import { useState } from "react";
import { useEffect } from "react";

function CountDownTimer({ seconds }) {
  const [DisplayRemainSecond, setDisplayRemainSecond] = useState(seconds);

  useEffect(() => {
    const countDownSecond = seconds;

    const timerStartTime = Date.now(); //Timer啟動時的時間

    // Timer啟動
    const countDownTimer = setInterval(() => {
      const currentTime = Date.now(); //當下時間
      const passedSecond = parseInt((currentTime - timerStartTime) / 1000); //Timer啟動了多久

      const remain = countDownSecond - passedSecond; //剩下多少時間

      setDisplayRemainSecond(remain < 0 ? 0 : remain);

      // 如果歸零則停止
      if (remain <= 0) clearInterval(countDownTimer);
    }, 1000);

    return () => {
      // 清除 Timer 準備重置
      clearInterval(countDownTimer);
    };
  }, [seconds]);

  return (
    <div className="CountDownTimer">
      <h1>
        {new Date(DisplayRemainSecond * 1000).toISOString().substr(14, 5)}
      </h1>
    </div>
  );
}
export default CountDownTimer;
