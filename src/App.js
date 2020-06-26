import React, { useEffect } from "react";
import "./styles/base/overall.scss";

import Winner from "./components/Winner/Winner.component";
import MainPage from "./pages/MainPage/MainPage.component";

import { EventHandler } from "./scripts/EventHandler";

function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  console.log("App rendered");

  return (
    <div className="App">
      <MainPage />

      <Winner />
    </div>
  );
}

export default App;
