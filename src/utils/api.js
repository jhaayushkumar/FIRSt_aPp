import axios from 'axios';
import { API_URL } from './constants';

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Hotels API
export const hotelsAPI = {
    getAll: () => api.get('/hotels'),
    getById: (id) => api.get(`/hotels/${id}`),
    book: (id, data) => api.post(`/hotels/${id}/book`, data),
};

// Salons API
export const salonsAPI = {
    getAll: () => api.get('/salons'),
    getById: (id) => api.get(`/salons/${id}`),
    book: (id, data) => api.post(`/salons/${id}/book`, data),
};

// Restaurants API
export const restaurantsAPI = {
    getAll: () => api.get('/restaurants'),
    getById: (id) => api.get(`/restaurants/${id}`),
    book: (id, data) => api.post(`/restaurants/${id}/book`, data),
};

// Spas API
export const spasAPI = {
    getAll: () => api.get('/spas'),
    getById: (id) => api.get(`/spas/${id}`),
    book: (id, data) => api.post(`/spas/${id}/book`, data),
};

// Bookings API
export const bookingsAPI = {
    getUserBookings: (userId) => api.get(`/bookings/user/${userId}`),
    getById: (id) => api.get(`/bookings/${id}`),
    cancel: (id) => api.delete(`/bookings/${id}`),
};

// Auth API
export const authAPI = {
    register: (data) => api.post('/auth/register', data),
    login: (data) => api.post('/auth/login', data),
    getProfile: (id) => api.get(`/auth/profile/${id}`),
};

export default api;
