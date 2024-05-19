import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

const initialState = 0;

const counterReducer = (state = initialState, action: { type: any;payload:any }) => {
  switch (action.type) {
    case "start":
      return action.payload
    case "stop":
      return state
    case "reset":
      return {
      };
    default:
      return state;
  }
};

export const store = createStore(counterReducer)

export function Count() {

    const state = useSelector((state:any)=>state)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>val:{state}</h1>
            <button onClick={()=>dispatch({type:'INC'})}>inc</button>
            <button onClick={()=>dispatch({type:'DEC'})}>dec</button>
            <button onClick={()=>dispatch({type:'INC 5',payload:5})}>dec</button>
        </div>
    )
}