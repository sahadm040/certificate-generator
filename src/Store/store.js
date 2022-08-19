// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import LoginReducer from "./Login/Reducer";
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(
//   LoginReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware))
// );

// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import LoginReducer from "./Login/Reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  LoginReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
