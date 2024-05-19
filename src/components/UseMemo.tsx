import React, { useState } from 'react';

const CountComponentWithoutMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if(count !==4){
        setCount(count + 1)   
    }else{
        setCount(4)
    }
  };

  console.log('Rendering without useMemo...');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default CountComponentWithoutMemo;
