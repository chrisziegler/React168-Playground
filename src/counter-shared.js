import React, { useState } from 'react';

// custom hook
function useCounter({ initialState, step }) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return { count, increment, setCount };
}

function Counter() {
  const { count, increment } = useCounter({ initialState: 0, step: 10 });

  const buttonStyle = {
    padding: '2px 10px 2px 10px',
    backgroundColor: 'black',
    color: 'palegoldenrod'
  };
  return (
    <button style={buttonStyle} onClick={increment}>
      {count}
    </button>
  );
}

export default Counter;
