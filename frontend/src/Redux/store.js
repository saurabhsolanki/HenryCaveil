import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";


const root = combineReducers({
    auth: authReducer,
  });
  
  export const store = legacy_createStore(root, applyMiddleware(thunk));