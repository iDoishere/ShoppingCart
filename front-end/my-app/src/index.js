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
import * as  actionLogout  from './store/actions.Logout'

const rootReducer = combineReducers({
  login:loginReducer,
  modal:modalOpen,
  fetchProduct:fetchProduct
})


const storage_saver = store => next => action => {
  next(action)
   if(action.type === actionLogout.LOG_OUT){
 
     localStorage.clear()
   }else{
    localStorage.setItem("app_data", JSON.stringify(store.getState()) );
   }
   
}

 

const middleWare = applyMiddleware(ReduxThunk,storage_saver)
console.log(JSON.parse(localStorage.getItem("app_data")))
const readLocalStorage = ()=> JSON.parse(localStorage.getItem("app_data")) || {isLoggedIn:false , show :false,  productsResult :[],
  products:[]}

const store = createStore(rootReducer,readLocalStorage(), middleWare)



ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
