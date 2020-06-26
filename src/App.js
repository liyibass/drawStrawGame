import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";
import Homepage from "./pages/homepage/homepage.component";
import "./styles/base/overall.scss";
import Timer from "./components/Timer/Timer.component";
import UserList from "./components/UserList/UserList.component";
import Winner from "./components/Winner/Winner.component";

function App() {
  console.log("App rendered");

  return (
    <div className="App">
      {/* <Homepage /> */}
      <Timer />
      <UserList />
      <Winner />
    </div>
  );
}

export default App;
