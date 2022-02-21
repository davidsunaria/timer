import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from 'easy-peasy';
import store from './Modal/store';
import { useStoreRehydrated } from 'easy-peasy';




function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <WaitForStateRehydration>
        <App />
      </WaitForStateRehydration>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
