import React, { useState, useEffect } from 'react';

function Counter() {
  // const initialCount = JSON.parse(window.localStorage.getItem('count' || 0));
  // in this case we can just pass localStorage into Number constructor
  // optimization
  // const initialCount => Number(window.localStorage.getItem('count' || 0));
  // every single time this render method runs it will be reading into localStorage
  // passed-in as a function so it only runs on initial render
  const initialCount = () => Number(window.localStorage.getItem('count' || 0));
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  // optimization
  // default useEffect runs every single time component renders
  // we only want it to rerender when the count changes
  // useEffect allows us to do this by passing in an array as 2nd argument

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  return <button onClick={increment}>{count}</button>;
}

export default Counter;
