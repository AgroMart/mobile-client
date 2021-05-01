import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface User {
  id: string;
  username: string;
  email: string;
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Agromart:token',
        '@Agromart:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const response = await api.post('auth/local', {
        identifier: username,
        password,
      });

      const { jwt: token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      await AsyncStorage.multiSet([
        ['@Agromart:token', token],
        ['@Agromart:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
    },
    [],
  );

  const signUp = useCallback(
    async ({ username, password, email }: SignUpCredentials) => {
      const response = await api.post('auth/local/register', {
        username,
        password,
        email,
      });

      const { jwt: token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      await AsyncStorage.multiSet([
        ['@Agromart:token', token],
        ['@Agromart:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Agromart:user', '@Agromart:token']);

    delete api.defaults.headers.authorization;

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signUp,
        signIn,
        signOut,
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
