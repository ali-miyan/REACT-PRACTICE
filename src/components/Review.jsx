import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";


let interval;
export const TimerFun = () => {

const [time,setTime] = useState(0)
const [id,setTimeerId] = useState(false)

const dispatch = useDispatch()
const initialVal = useSelector(state=>state)

console.log(initialVal,'ddd');

const handleStart = () =>{
    id = setInterval(() => {
        dispatch({type:'start',payload:initialVal+1})
    }, 1000);
}

const handleStop = () => {
    setTimeerId()
    clearInterval(interval)
}

const handleReset = () => {
    setTime(0)
    dispatch({type:'stop'})
}

    return (
        <>
        
        <h1>timer{initialVal}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
        </>
    )
}