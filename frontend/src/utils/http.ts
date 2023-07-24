import axios, { AxiosError } from 'axios';
import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
});

type ApiError = {
  status: number;
  message: string;
}

const handleApiError = (error: AxiosError): Promise<ApiError> => {
  if (error.response) {
    const { status, data } = error.response;
    const message = typeof data === 'string' ? data : 'There was an error!';
    return Promise.reject({ status, message });
  } else if (error.request) {
    return Promise.reject({ status: 500, message: 'No response from the server!' });
  } else {
    return Promise.reject({ status: 500, message: 'An error occurred!' });
  }
};

http.interceptors.response.use(
  (response) => response,
  (error) => handleApiError(error)
);

export default http;