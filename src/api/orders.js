import {httpGetRequest, httpPostRequest} from "../util/RequestUtil";

export const getOrders = async () => {
    return await httpGetRequest('/order/all');
}

export const addOrder = async(order) =>{
    return await httpPostRequest('demo/order/add', order);
}