import React, { useState } from 'react';

import svg from '../../assets/default.svg';

import './index.scss';

const Index = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const changeCount = (step: number) => () => {
    setCount(count + step);
  }

  return (
    <div className='wrap'>
      <button onClick={changeCount(1)}>+</button>
      <button onClick={changeCount(-1)}>-</button>
      count: { count }
      <img src={svg} />
    </div>
  )
};

export default Index;
