import axios from 'axios';
import EnvManager from '../config/EnvManager';

const backend = axios.create({
  baseURL: EnvManager.BACKEND_URL,
});

export const getPictures = async () => {
  try {
    const response = await backend.get(`/pictures`);
    return response?.status === 200 ? response?.data : null;
  } catch (error) {
    return null;
  }
};
