import axiosInstance from '../config';

import { FETCH_ORDERS } from './actionTypes';

const fetchOrders = (
  uri,
  patient,
  limit = 10,
) => ({
  type: FETCH_ORDERS,
  payload: axiosInstance
    .get(uri ? uri.substr(uri.indexOf('v1') + 2) : `/order?totalCount=true&sort=desc&status=active&patient=${patient}&limit=${limit}&v=full`),
});

export default fetchOrders;
