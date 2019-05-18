import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // extract the increment function out of event listener
  const increment = () => setCount(count + 1);
  return (
    <button
      style={{
        padding: '2px 10px 2px 10px',
        backgroundColor: 'black',
        color: 'palegoldenrod'
      }}
      onClick={increment}
    >
      {count}
    </button>
  );
}

export default Counter;
