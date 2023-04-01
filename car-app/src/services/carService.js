import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/cars'

export const createItem = async (data) => {
    try {
        request.post(baseUrl, data, localStorage.getItem('authToken'));
    } catch (err){
        throw new Error(err);
    }
}


export const editItem = async (data, id) => {
    try{
        await request.put(baseUrl + "/" + id, data, localStorage.getItem('authToken'));
    } catch(err) {
        throw new Error(err.messege);
    } 
}

export const deleteItem = async (id) => {
    try{
        await request.del(baseUrl + "/" + id, true, localStorage.getItem('authToken'));
    } catch(err) {
        throw new Error(err);
    }
}

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getById = async (id) => {
    const result = await request.get(baseUrl + "/" + id);

    return result;

};