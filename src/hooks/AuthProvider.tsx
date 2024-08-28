import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';

import initializeApi from '../services/api';
import { Address } from '../interfaces';
import axios from 'axios';

interface User {
  id: string;
  username: string;
  email: string;
  endereco: Address | null;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  password: string;
  email: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  signUp(info: SignUpCredentials): Promise<void>;
  updateUser(updatedUser: User): Promise<void>;
  updateAddress(updatedAddress: Address): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }: any) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Agromart:token',
        '@Agromart:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const updateUser = useCallback(async (updatedUser: User) => {
    await AsyncStorage.multiSet([
      ['@Agromart:user', JSON.stringify(updatedUser)],
    ]);

    setData(prevState => ({ token: prevState.token, user: updatedUser }));
  }, []);

  const updateAddress = useCallback(
    async (updatedAddress: Address) => {
      await AsyncStorage.multiSet([
        [
          '@Agromart:user',
          JSON.stringify({ ...data.user, endereco: updatedAddress }),
        ],
      ]);

      setData(prevState => ({
        token: prevState.token,
        user: { ...prevState.user, endereco: updatedAddress },
      }));
    },
    [data.user],
  );

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const url = await AsyncStorage.getItem('@BaseUrlChosen');
      console.log('LOGANDO DENTRO', url);
      const response = await axios.post(`${url}auth/local`, {
        identifier: username,
        password,
      });

      const { jwt: token, user } = response.data;

      console.log('TOKEN', token);

      await AsyncStorage.multiSet([
        ['@Agromart:token', token],
        ['@Agromart:user', JSON.stringify(user)],
      ]);

      setData({ token, user });

      await registerDeviceInfo(user.id);
    },
    [],
  );

  const signUp = useCallback(
    async ({ username, password, email }: SignUpCredentials) => {
      // TODO REMOVE THIS HARD CODED URL THIS IS JUST FOR TESTING
      const baseUrl =
        (await AsyncStorage.getItem('@BaseUrlChosen')) ||
        'https://agromarttcc.shop/api/';

      const response = await axios.post(`${baseUrl}auth/local/register`, {
        username,
        password,
        email,
      });

      const { jwt: token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@Agromart:token', token],
        ['@Agromart:user', JSON.stringify(user)],
      ]);

      setData({ token, user });

      await registerDeviceInfo(user.id);
    },
    [],
  );

  const signOut = useCallback(async () => {
    const api = await initializeApi();

    await AsyncStorage.multiRemove(['@Agromart:user', '@Agromart:token']);

    delete api.defaults.headers.authorization;

    setData({} as AuthState);
  }, []);

  const registerDeviceInfo = async (userId: number) => {
    const pushToken = await AsyncStorage.getItem('@Agromart:push_token');
    const api = await initializeApi();

    const body = {
      platform: Platform.OS,
      model: Device.modelName,
      platform_version: Device.osVersion,
      // expo_push_token: pushToken,
      expo_push_token: 'pushTokenTeste123',
      user_id: userId,
    };

    console.log('registerDeviceInfo - body =======> ', body);

    try {
      const userHasDeviceRes = await api.get(`devices/user/${userId}`);
      if (userHasDeviceRes.data.status === 200) {
        const deviceId = userHasDeviceRes.data.device_id;

        return await api.put(`devices/${deviceId}`, body);
      }

      return await api.post('devices', body);
    } catch (err: any) {
      console.log('Erro ao enviar informações do device', err.message);
      console.log('ERRO ========> ', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signUp,
        signIn,
        signOut,
        updateUser,
        updateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
