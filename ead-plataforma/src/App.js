import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.sass';

import Menu from './components/Menu';
import Corpo from './components/Corpo';

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Corpo />
    </Provider>
  );
}

export default App;
