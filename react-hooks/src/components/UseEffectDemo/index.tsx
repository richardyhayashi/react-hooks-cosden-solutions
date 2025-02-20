import { useEffect, useState } from 'react'

interface DemoProps {}

const UseEffectDemo = ({}: DemoProps) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log(`The count is ${count}`);

      return () => {
         console.log("I am being cleaned up!");
      }
   }, [count]);

   return (
      <div className='tutorial'>
         <h1>Count: {count}</h1>
         <button onClick={() => setCount((prev) => prev - 1)}>
            Decrement
         </button>
         <button onClick={() => setCount((prev) => prev + 1)}>
            Increment
         </button>
      </div>
  );
}

export default UseEffectDemo;      