import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'

export const publicrequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:'Bearer '}
})