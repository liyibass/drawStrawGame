import React from "react";
import "./MainPage.style.scss";

import Timer from "../../components/Timer/Timer.component";
import UserList from "../../components/UserList/UserList.component";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage-container">
        <Timer />
        <UserList />
      </div>
    </div>
  );
}

export default MainPage;
