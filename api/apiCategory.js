import { apiClientNoAuth, apiClientTokenAuth } from "./client.js";

const endpoint = '/api/category'

const get = async (cancelToken) =>{
    let error
    let categories

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        categories = response.data.categories
    }else{
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error,
        categories
    }
}


const post = async (token, catName, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, {name: catName})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const put = async (token, id, catName, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, {name: catName})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const del = async (token, id, cancelToken) =>{
    let error
    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id)
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const apiCategory={
    get,
    post,
    put,
    del
}

export default apiCategory