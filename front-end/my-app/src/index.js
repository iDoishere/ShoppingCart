import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk';
import loginReducer from './store/reducers/Login.reducer'
import modalOpen from './store/reducers/Modal.reducer'
import fetchProduct from './store/reducers/Product.reducer'
import { applyMiddleware } from 'redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const middleWare = applyMiddleware(ReduxThunk)

const rootReducer = combineReducers({
  login:loginReducer,
  modal:modalOpen,
  fetchProduct:fetchProduct
})

const store = createStore(rootReducer,middleWare)



ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
