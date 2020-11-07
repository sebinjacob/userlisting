import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './components/Users';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <Users />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

