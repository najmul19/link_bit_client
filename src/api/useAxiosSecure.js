import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function useAxiosSecure() {
  const { user } = useAuth();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  });

  useEffect(() => {
    const interceptor = instance.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user, instance]);

  return instance;
}
