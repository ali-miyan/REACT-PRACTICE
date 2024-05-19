import React, { useRef, useState } from 'react'
import { FaPlay,FaPause  } from "react-icons/fa";



const UseRef = () => {
    const [text,setText] = useState(false)
    const inp = useRef<HTMLVideoElement>(null)

    const tap = (arg:boolean) => {
        if(arg){
          inp.current?.pause()
          setText(false)
        }else{
          inp.current?.play()
          setText(true)
        }
    }
    console.log('dddd')

  return (
    <div>
        <video src="http://media.w3.org/2010/05/sintel/trailer.mp4"  ref={inp} />
        <p>video</p>
        <button onClick={()=>tap(text)}>{text===true?<FaPause /> :<FaPlay />}</button>
    </div>
  )
}

export default UseRef