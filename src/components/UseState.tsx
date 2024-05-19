import React, { useState } from "react";
import { Obj } from "../types/SampleObj";

const UseState = () => {
  let arr = [
    {
      name: "ali",
      age: 23,
    },
    {
      name: "sacc",
      age: 1,
    },
  ];
  let [array, setObj] = useState<Obj[]>(arr);

    const inc = (id:number) => {
        setObj((val:Obj[]) => (
            val.map((item:Obj)=>item.age === id?{...item,age:item.age+1}:item)
        ));
    };

  return (
    <div>
      {array.map((val) => (
        <p key={val.age}>
          {val.name} is {val.age} year old
          <button onClick={() => inc(val.age)}>increase age</button>
        </p>
      ))}
    </div>
  );
};

export default UseState;
