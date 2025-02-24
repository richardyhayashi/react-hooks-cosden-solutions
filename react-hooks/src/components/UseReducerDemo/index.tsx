import { useReducer } from 'react'

interface State {
   count: number;
   error: string | null;
}

interface Action {
   type: "INCREMENT" | "DECREMENT";
}

function reducer(state: State, action: Action) {
   const {type} = action;

   switch (type) {
     case 'INCREMENT': {
      const newCount = state.count + 1;
      const hasError = newCount > 5; 
       return { ...state,
                  count: hasError ? state.count : newCount,
                  error: hasError ? 'Maximum reached' : null };
      }
     case 'DECREMENT': {
      const newCount = state.count - 1;
      const hasError = newCount < 0; 
       return { ...state,
                  count: hasError ? state.count : newCount,
                  error: hasError ? 'Minimum reached' : null };
      }
     default:
       return state;
   }
}

const UseReducerDemo = () => {
   const [state, dispatch] = useReducer(reducer, {
      count: 0,
      error: null,
   });

  return (
    <div className='tutorial'>
      <div>Count: {state.count}</div>
      {state.error && <div className='mb-2 text-red-500'>{state.error}</div>}
      <button className='mb-2' onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
   </div>
  );
};

export default UseReducerDemo;