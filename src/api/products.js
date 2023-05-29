import React from "react";
import {httpGetRequest} from "../util/RequestUtil";

export const getProducts = async () => {
    return await httpGetRequest('product/product/all');
}

export const getProductById = async(id) =>{
    return await httpGetRequest('product/product/id?id=' + id);
}