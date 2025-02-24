import React, { useRef, useState } from 'react'

interface DemoProps {}

const UseRefDemo = ({}: DemoProps) => {
   const [count, setCount] = useState(0);
   const countRef = useRef(0);

   const handleIncrement = () => {
      setCount(count + 1);
      countRef.current++;

      //console.log(`State: ${count}`);
      console.log(`Ref: ${countRef.current}`);
   }

  return (
    <div className='tutorial'>
      Count: {countRef.current}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRefDemo;