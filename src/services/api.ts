import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // or wherever your AsyncStorage is from

const initializeApi = async (): Promise<AxiosInstance> => {
  const baseUrl = await AsyncStorage.getItem('@BaseUrlChosen');

  const apiBaseURL = baseUrl ?? '';

  const api = axios.create({
    baseURL: apiBaseURL,
    timeout: 5000,
  });

  return api;
};

export default initializeApi;
