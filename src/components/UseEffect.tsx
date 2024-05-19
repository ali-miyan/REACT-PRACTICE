import React, { useContext, useEffect, useState } from "react";
import { sampleContext } from "./UseContext";

const UseEffect = () => {   

  const [count, setCout] = useState<number>(0);

  const inc = () => {
    setCout(count + 1);
  };

  return (
    <div>
      <div>
        hloooooooooooooooooooooooooooooooooooooooo
        <br />
        sssssssssssssss
      </div>
      <button onClick={() => inc()}>change tiltle{count}</button>
    </div>
  );
};

export default UseEffect;
