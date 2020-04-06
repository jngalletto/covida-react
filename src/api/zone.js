import { axiosInstance } from './base';

export const fetchAll = () => (
    axiosInstance.get('/zone')
)