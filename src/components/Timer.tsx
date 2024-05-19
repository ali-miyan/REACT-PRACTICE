import { useEffect, useState } from "react"
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";

let interval:any;
export const Timer = () => {
  const [time,setTime] = useState<any>(0)
  const [search,setSearch] = useState<any>('')

  let arr:string[] = ['ali','zayed']

  const handleStart = () => {
    
    interval = setInterval(()=>{
      setTime((prev:any)=>{
        if(prev !== 5){
          return prev+1
        }else{
          clearInterval(interval)
          return prev
        }
      })
    
      
    },1000)
  
  }
  const handleStop = () => {
    clearInterval(interval)
  }

  const handleDec = () =>{
    interval = setInterval(()=>{
      setTime((prev:any)=>{
        if(prev > 0){
          return prev-1
        }else{
          clearInterval(interval)
          return prev
        }
      })
    },1000)
  }

  const state = useSelector((state:any)=>state)
  const dispatch = useDispatch()



  const handleSearch = () =>{
    dispatch({type:'add',payload:search})
    setSearch('')
  }

  return (
    <>
      <h1>time{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleDec}>dec</button>

      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>search</button>

      <Search data={arr}/>

    </>
  )
}