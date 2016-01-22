//All AJAX calls should be centralized here.
//Axios returns a promise for all calls.
//If you are already using jQuery, you can use it to make AJAX calls here instead since
//Axois weighs about 20k
import axios from 'axios';
var env = window.location.hostname == 'localhost' ? 'development' : 'production';

var api = axios.create({
  //Note that this baseUrl assumes you're running CarDashboard at motosnap.com via a hosts file entry.
  baseURL: env == 'development' ? 'http://motosnap.com/CarDashboard/' : '/CarDashboard/',
  accept: 'json',
  withCredentials: true
});

module.exports = {
  //This is just an example API call
  getCustomerAttachments(id) {
    return api.get('API/CRMServiceBase/v1/customers/attachments/list?customerId=' + id);
  }
};
