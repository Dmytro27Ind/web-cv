import React from "react";
import { useSelector } from "react-redux/es/exports";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss"

function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <div className="App" data-theme={theme}>
      <div className="App__background"></div>
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
