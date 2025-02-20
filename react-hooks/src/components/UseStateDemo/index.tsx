import React, { useState } from 'react';

interface DemoProps {}

const UseStateDemo = ({}: DemoProps) => {
   const [count, setCount] = useState(0);

   return (
     <div className="tutorial">
       <h1>useState Simply Explained</h1>
       <h2>Count: {count}</h2>
       <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
     </div>
   );
};

export default UseStateDemo;