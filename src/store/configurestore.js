import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { accountReducer } from "../reducers/accountReducer";
import { allbillsreducers } from "../reducers/allBillsreducers";
import { billsReducers } from "../reducers/billsReducers";
import {customerReducer} from '../reducers/customerReducer'
import { linesItemsReducers } from "../reducers/linesItemsReducers";
import { productReducers } from "../reducers/productReducers";

const configurestore = () =>{
  const store = createStore(
      combineReducers({
          account:accountReducer,
          customers:customerReducer,
          products:productReducers,
          items:linesItemsReducers,
          bills:billsReducers,
          allbills:allbillsreducers
      }),applyMiddleware(thunk)
  )
    return store
    console.log(store.customers)
}
export default configurestore