import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import { Context } from "./components/UseContext";
// import { UseReducer } from "./components/UseReducer";
import {ReduxPractice, store} from "./components/UseReducer";
// import UseEffect from "./components/UseEffect";
import { Timer } from "./components/Timer";
import { Provider } from "react-redux";
import { sampleContext } from "./components/UseContext";
import CountComponent from "./components/UseMemo";
import { TimerFun } from "./components/Review";


// Import the lazy-loaded component
const UseEffect = React.lazy(() => import('../src/components/UseEffect'));

const App = () => {
  return (
    <>
    <Provider store={store}>
      <sampleContext.Provider value={'dd'}>
        <Router>
          <Routes>
        </Routes>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <TimerFun />
            </header>
          </div>
        </Router>
        </sampleContext.Provider>
        </Provider>
    </>
  );
};

export default App;
