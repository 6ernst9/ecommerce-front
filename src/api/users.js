import {httpGetParamRequest, httpGetRequest, httpPostRequest} from "../util/RequestUtil";

export const getByEmail = async(email) => {
    return await httpGetParamRequest('demo/customer/email?email=', email);
}

export const addCustomer = async(data) =>{
    return await httpPostRequest('demo/customer/add', data)
}