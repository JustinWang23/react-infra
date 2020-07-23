import React, { useState } from 'react';

import 'index.scss';

export default Index = () => {
  const [count, setCount] = useState(0);

  const changeCount = (step) => () => {
    setCount(count + step);
  }

  return (
    <>
      <button onClick={changeCount(1)}>+</button>
      <button onClick={changeCount(1)}>-</button>
      count: { count }
    </>
  )
};
