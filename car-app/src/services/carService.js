import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/cars'

export const createItem = async (data) => request.post(baseUrl, data, localStorage.getItem('authToken'));

export const getAll = async () => {
    const result = await request.get(baseUrl);
    console.log("log from getAll", result);

    return result;
};