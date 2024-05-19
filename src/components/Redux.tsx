import { useContext, useReducer } from "react";
import { sampleContext } from "./UseContext";
import { createStoreHook } from "react-redux";
import { Reducer, applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'

const incriment:Reducer<any,{type:any}> = (prev = initialVal, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...prev,
        count: prev.count + 1,
      };
    case "dec":
      return {
        ...prev,
        count: prev.count - 1,
      };
    case "blue":
      return {
        ...prev,
        blue: true,
      };
    case "noblue":
      return {
        ...prev,
        blue: false,
      };

    default:
      return prev;
  }
};

const initialVal = {
  count: 0,
  blue:false
};

const store = createStore(incriment,applyMiddleware(logger))

export default store