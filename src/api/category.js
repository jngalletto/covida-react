import { axiosInstance } from './base';

export const fetchAll = () => (
    axiosInstance.get('/category')
)

export const fetchBySection = (section) => (
    axiosInstance.get(`/category/section/${section}`)
)