import React, { useState } from 'react';

import svg from '../../assets/default.svg';

import './index.scss';

const Index = () => {
  const [count, setCount] = useState(0);

  const changeCount = (step) => () => {
    setCount(count + step);
  }

  return (
    <div class='wrap'>
      <button onClick={changeCount(1)}>+</button>
      <button onClick={changeCount(-1)}>-</button>
      count: { count }
      <img src={svg} />
    </div>
  )
};

export default Index;
