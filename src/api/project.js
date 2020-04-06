import { axiosInstance } from './base';

export const fetchAll = () => (
    axiosInstance.get('/project')
)

export const fetchFiltered = (zone, category) => (
    axiosInstance.get(`/project/filter/${zone}/${category}`)
)