import React from "react";
import "./Timer.style.scss";
import { useState } from "react";
import { useEffect } from "react";

function Timer() {
  const initialSecond = 60;
  const [remainSecond, setRemainSecond] = useState(initialSecond);

  useEffect(() => {
    //Timer啟動時的時間
    const TimerStartTime = Date.now();

    // Timer啟動
    const countDownTimer = setInterval(() => {
      // 計算Timer啟動了多久時間：當下時間-最一開始Timer啟動時的時間
      const currentTime = Date.now();
      const pastSeconds = parseInt((currentTime - TimerStartTime) / 1000);

      // 計算剩下多少時間（初始值-啟動多久） 並將結果傳到state中
      const remain = initialSecond - pastSeconds;
      setRemainSecond(remain < 0 ? 0 : remain);

      // 如果歸零則停止
      if (remain <= 0) clearInterval(countDownTimer);
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <h1>{remainSecond}</h1>
    </div>
  );
}

export default Timer;
