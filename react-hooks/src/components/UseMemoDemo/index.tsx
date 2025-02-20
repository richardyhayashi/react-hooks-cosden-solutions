import { useState } from 'react';
import { initialItems } from './utils';

interface DemoProps {}

const UseMemoDemo = ({}: DemoProps) => {
   const [count, setCount] = useState(0);
   const [items] = useState(initialItems);

   const selectedItem = items.find((item) => item.isSelected);

  return (
    <div className='tutorial'>
      <h1>Number of items: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
   </div>
  );
};

export default UseMemoDemo;