import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss"

function App() {
  return (
    <div className="app" data-theme="dark">
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
