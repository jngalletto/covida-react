import axios from 'axios';
import { get_api_url } from '../utils/api'

const API_URL = get_api_url();

export const getAllVisits = () => (
    axios.get(`${API_URL}/visits`)
        .then(response => response.data)
        .catch(error => error)
)

export const getVisitById = id => (
    axios.get(`${API_URL}/visits/${id}`)
        .then(response => response.data)
        .catch(error => error)
)

export const getVisitsByContract = id => (
    axios.get(`${API_URL}/visits/contract/${id}`)
        .then(response => response.data)
        .catch(error => error)
)

export const createVisit = data => (
    axios.post(`${API_URL}/visits/create`, data)
        .then(response => response)
        .catch(error => error.message)
)

export const deleteVisit = id => (
    axios.delete(`${API_URL}/visits/delete/${id}`)
        .then(response => response)
        .catch(error => error.message)
)
