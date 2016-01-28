//All AJAX calls should be centralized here.
//Axios returns a promise for all calls.
//If you are already using jQuery, you can use it to make AJAX calls here instead since
//Axois weighs about 20k. But note that jQuery's promise implementation is quirky.
import axios from 'axios';

let api = null;

const getBaseUrl = function() {
  var inDevelopment = window.location.hostname == 'localhost';
  //Note that this baseUrl assumes you're running CarDashboard via IIS at motosnap.com via a hosts file entry.
  //See https://github.com/coryhouse/vin-react-starter-kit#initial-machine-setup for more info.
  return inDevelopment ? 'http://motosnap.com/CarDashboard/' : '/CarDashboard/';
};

//Note that this can't be called until we're in the browser
//since we need to sniff the URL to know what environment we're in
//and therefore, what the baseURL should be for API calls.
var getInitializedApi = function() {
  if (api) return api; //return initialized api if already initialized.
  return axios.create({
    baseURL: getBaseUrl(),
    accept: 'json',
    withCredentials: true
  });
};

var get = function(url) {
  return getInitializedApi().get(url);
};

var post = function(url, data) {
  return getInitializedApi().post(url, data);
};

//The API calls your app uses go down here so they're exported for use elsewhere...
module.exports = {
  //This is just an example API call
  getCustomers() {
    return get('API/CRMServiceBase/v1/users/search/');
  }
};
