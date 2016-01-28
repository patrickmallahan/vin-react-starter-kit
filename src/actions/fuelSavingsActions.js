import * as types from '../constants/ActionTypes';
import api from '../api/api';

export function saveFuelSavings(settings) {
  return { type: types.SAVE_FUEL_SAVINGS, settings };
}

export function calculateFuelSavings(settings, fieldName, value) {
  return { type: types.CALCULATE_FUEL_SAVINGS, settings, fieldName, value };
}

//Note that these two aren't exported since they're only called internally by fetchCustomers below.
function requestCustomers() {
  return { type: types.REQUEST_CUSTOMERS };
}

//This is called from fetchCustomers when the ajax call resolves.
function receiveCustomers(customers) {
  return { type: types.RECEIVE_CUSTOMERS, customers };
}

//This is a thunk action creator
//Since this needs to make an async call (an ajax call to the server)
//we need to return a function instead of an action object.
//redux-thunk helps make this happen (wired up in /store/configureStore.js).
//More info on this pattern: http://redux.js.org/docs/advanced/AsyncActions.html
export function fetchCustomers() {
  // Thunk middleware (redux-thunk) knows how to handle functions.
  // It passes the dispatch methods as an argument to the function.
  // This makes it able to dispatch actions itself.
  return function(dispatch) {
    //call the request customers action creator below so the UI is updated to reflect the AJAX call in progress.
    dispatch(requestCustomers());
    return api.getCustomers().then(function(response) {
      //now that we've gotten the ajax response back, dispatch it.
      var customers = response.data.Data;
      dispatch(receiveCustomers(customers));
    });
  };
}
