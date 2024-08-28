import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initializeApi = async (): Promise<AxiosInstance> => {
  const baseUrl = await AsyncStorage.getItem('@BaseUrlChosen');
  const token = await AsyncStorage.getItem('@Agromart:token');

  const apiBaseURL = baseUrl ?? '';

  const api = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return api;
};

export default initializeApi;
