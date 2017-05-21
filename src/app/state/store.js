import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// All reducers or 'ducks'
import * as reducers from './ducks';

const store = (() => {
  const rootReducer = combineReducers(reducers);
  const middlewares = [thunk];

  // Add logging in development
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    // Set up Redux Devtools
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );
})();

export default store;
