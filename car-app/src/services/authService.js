import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const register = async (data) => request.post(`${baseUrl}/register`, data);

export const login = async (data) => request.post(`${baseUrl}/login`, data);

export const getUser = async () => request.get(`${baseUrl}/`) ;
