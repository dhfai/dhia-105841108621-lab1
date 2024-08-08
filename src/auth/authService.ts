import api from '../api/api';
import * as SecureStore from 'expo-secure-store';
import axios, { AxiosInstance } from 'axios';

export async function login(email: string, password: string): Promise<void> {
    try {
        console.log('Attempting login with:', { email, password });
        const response = await api.post<{ access_token: string }>('/auth/login', { email, password });
        console.log('Login response:', response.data);
        await SecureStore.setItemAsync('pukimaksalesbiawakrawa', response.data.access_token);
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}


export async function register(email: string, password: string, completeName?: string): Promise<void> {
    try {
        await api.post('/auth/register', { email, password, completeName });
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

export async function getToken(): Promise<string | null> {
    return await SecureStore.getItemAsync('pukimaksalesbiawakrawa');
}

export async function getAuthenticatedApi(): Promise<AxiosInstance> {
    const token = await SecureStore.getItemAsync('pukimaksalesbiawakrawa');
    return axios.create({
        baseURL: 'http://192.168.1.13:3000',
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
}
