import axios from 'axios';
import { get_api_url } from '../utils/api'

const API_URL = get_api_url();

export const getAllContracts = () => (
    axios.get(`${API_URL}/contracts`)
        .then(response => response.data)
        .catch(error => error)
)

export const getContract = id => (
    axios.get(`${API_URL}/contracts/${id}`)
        .then(response => response.data)
        .catch(error => error)
)

export const createContract = data => (
    axios.post(`${API_URL}/contracts/create`, data)
        .then(response => response)
        .catch(error => error.message)
)

export const deleteContract = id => (
    axios.delete(`${API_URL}/contracts/delete/${id}`)
        .then(response => response)
        .catch(error => error.message)
)
