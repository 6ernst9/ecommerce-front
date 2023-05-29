import axios from 'axios';
import {apiUrl} from "./constants";

export const httpGetRequest = async(path) =>{
    return await axios.get(apiUrl+ path, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}

export const httpGetParamRequest = async (path, param) =>{
    return await axios.get(apiUrl + path + param, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}

export const httpPostRequest = async(path, data) =>{
    console.log(JSON.stringify(data));
    return await axios.post(apiUrl + path, JSON.stringify(data), {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
}

export const httpPutRequest = async(path, data) =>{
    axios.put('${apiUrl}/${path}/data', data).then(response => {
        if(response.status === 200){
            return response;
        }
        console.log(response.error);
    }).catch(error => console.error(error));
}

export const httpDeleteRequest = async(path, id) =>{
    axios.delete('${apiUrl}/${path}/data', id).then(response => {
        if(response.status === 200){
            return response;
        }
        console.log(response.error);
    }).catch(error => console.error(error));
}

