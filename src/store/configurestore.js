import { combineReducers,createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
const configurestore = () =>{
  
    const store = createStore(combineReducers(
        {
            
        }
    ),applyMiddleware(thunk))
    return store
      
}
export default configurestore