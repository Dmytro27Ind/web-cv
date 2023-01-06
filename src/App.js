import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss"
import allActions from "./store/actions"

function App() {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)

  return (
    <div className="app" data-theme={theme}>
      <button onClick={() => dispatch(allActions.switchTheme())}>switch theme</button>
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
