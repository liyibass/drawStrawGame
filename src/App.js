import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";
import Homepage from "./pages/homepage/homepage.component";
import "./styles/base/overall.scss";
import Timer from "./components/Timer/Timer.component";
import UserList from "./components/UserList/UserList.component";

function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Timer />
      <UserList />
    </div>
  );
}

export default App;
