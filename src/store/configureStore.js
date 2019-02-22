import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers/index"); // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
