import React, { useState, useEffect } from "react";
import "./Winner.style.scss";
import { useSelector, useDispatch } from "react-redux";

function Winner() {
  const winner = useSelector((state) => state.user.winner);

  console.log("winner rendered");

  return (
    <div className="Winner">
      <div className="Winner-detail">
        <h3>得獎者</h3>
        <h1>{winner.name}</h1>
      </div>
    </div>
  );
}

export default Winner;
