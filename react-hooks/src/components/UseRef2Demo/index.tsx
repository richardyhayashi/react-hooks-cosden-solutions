import { useEffect, useRef } from 'react';

interface DemoProps {}

const UseRef2Demo = ({}: DemoProps) => {
   const inputRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      inputRef.current?.focus();
   }, []);

  return (
   <div className='tutroial'>
      <input ref={inputRef} type="text" placeholder='Type something...' />
   </div>
  );
};

export default UseRef2Demo;
