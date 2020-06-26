import React from "react";
import "./CountDownTimer.style.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountDownSecond } from "../../redux/timer/timer.action";

import { setWinner } from "../../redux/user/user.action";

function CountDownTimer() {
  const countDownSecond = useSelector((state) => state.timer.countDownSecond);
  const dispatch = useDispatch();

  const calculateTimeLeft = (timerStartTime) => {
    const currentTime = Date.now(); //當下時間
    const difference = parseInt((currentTime - timerStartTime) / 1000);
    const remain = countDownSecond - difference;
    return remain;
  };

  useEffect(() => {
    if (countDownSecond === 0) return; //輸入秒數才開始倒數

    const timerStartTime = Date.now(); //Timer啟動時的時間(計算剩餘時間需要)

    // Timer啟動
    const countDownTimer = setInterval(() => {
      const remain = calculateTimeLeft(timerStartTime); //計算剩餘時間
      dispatch(setCountDownSecond(remain)); //將剩餘時間更新至state

      // 如果歸零則停止
      if (remain <= 0) {
        clearInterval(countDownTimer);
        console.log("SUCCESS");

        dispatch(setWinner());
      }
    }, 1000);

    return () => {
      // 清除 Timer 準備重置
      clearInterval(countDownTimer);
    };
  }, [countDownSecond]);

  return (
    <div className="CountDownTimer">
      <h1>{new Date(countDownSecond * 1000).toISOString().substr(14, 5)}</h1>
    </div>
  );
}
export default React.memo(CountDownTimer);
