import * as request from "./requester";

const baseUrl = 'http://localhost:3000/'

export const register = async (data) => request.post(`${baseUrl}/users/register`, data);