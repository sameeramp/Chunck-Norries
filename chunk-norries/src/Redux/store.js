import { applyMiddleware, legacy_createStore, combineReducers } from "redux";

import thunk from "redux-thunk";

import  { reducer as jokeReducer } from "./Reducer/jokeReducer"
import  { reducer as jokeItemReducer } from "./Reducer/jokeItemReducer"


const rootReducer = combineReducers({jokeItemReducer,jokeReducer});


export const store = legacy_createStore ( rootReducer, applyMiddleware ( thunk ));

