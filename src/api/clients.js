import axios from 'axios';
import { get_api_url } from '../utils/api'

const API_URL = get_api_url();

export const getAllClients = () => (
    axios.get(`${API_URL}/clients`)
        .then(response => response.data)
        .catch(error => error)
)

export const getClient = id => (
    axios.get(`${API_URL}/clients/${id}`)
        .then(response => response.data)
        .catch(error => error)
)

export const updateClient = (id, data) => (
    axios.put(`${API_URL}/clients/update/${id}`, data)
        .then(response => response.data)
        .catch(error => error)
)

export const createClient = data => (
    axios.post(`${API_URL}/clients/create`, data)
        .then(response => response)
        .catch(error => error.message)
)

export const deleteClient = id => (
    axios.delete(`${API_URL}/clients/delete/${id}`)
        .then(response => response)
        .catch(error => error.message)
)