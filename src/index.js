import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import configurestore from './store/configurestore'
import  {deletecustomer, getcustomers}  from './actions/customerActions';
import { getProduct } from './actions/productActions';
import { allbill } from './actions/billsaActions';
import { getaccount } from './actions/authActions';


const store = configurestore()

if(localStorage.getItem('token')){
  store.dispatch(getcustomers())
  store.dispatch(deletecustomer())
  store.dispatch(getProduct())
  store.dispatch(allbill())
  store.dispatch(getaccount())
}

store.subscribe(()=>{
  console.log('state-updated',store.getState())
})



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
