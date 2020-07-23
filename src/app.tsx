import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import Index from './pages/index';

const App = () => <Index />

ReactDOM.render(<App />, document.querySelector('#root'));
