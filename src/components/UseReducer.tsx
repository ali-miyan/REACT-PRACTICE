import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createStore } from "redux"

const initialState:string[] = []

const reducer = (state = initialState,action: {payload: any, type: any }) => {
  switch(action.type){
    case 'add':return[...state,action.payload]
    default:return initialState
  }
}

export const store = createStore(reducer)


export const ReduxPractice = () =>{

  const [name,setName] = useState<string>('')

  const dispatch = useDispatch()
  
  
  const state = useSelector((state:string[]|any) => state  )

  
  const handleSubmit = () =>{
    dispatch({type:'add',payload:name})
    setName('')
  }

  
  return (
    <>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSubmit}>add</button>
      {
        state.length > 0 && state.map((val:any,ind:any)=>(
          <div key={ind}>{val}</div>
        ))
      }
    </>
  )
}