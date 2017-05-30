import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import HotOrCold from './components/hot-or-cold';
import store from './hot-or-cold-store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HotOrCold />
  </Provider>,
  document.getElementById('root')
);
