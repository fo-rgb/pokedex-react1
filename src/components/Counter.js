import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        next
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        back
      </button>
    </>
  );
}

export default Counter;
