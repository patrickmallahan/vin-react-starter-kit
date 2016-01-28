//This file merely configures the store for hot reloading.
//This boilerplate file is likely to be the same for each project that uses Redux.
//With Redux, the actual stores are in /reducers.
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

//Without middleware, Redux only supports synchronous data flow. http://redux.js.org/docs/advanced/AsyncFlow.html
//So we're applying the thunk middleware to support async (ajax calls) within our actions.
//To clarify, middleware simply lets us slap some behavior in between dispatching an action
//and the moment it reaches the reducer. You can do other things like log, crash report, route, and so on.
//Thunk middleware lets us dispatch() functions, (useful for handling ajax calls in reducers)
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
