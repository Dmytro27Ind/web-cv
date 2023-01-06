import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./styles/App.scss"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="app" data-theme="dark">
      <h1 style={{color: 'white'}}>CASH {cash}</h1>
      <button onClick={() => addCash(Number(prompt()))}>add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>get cash</button>
      <div className="wrapper">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
