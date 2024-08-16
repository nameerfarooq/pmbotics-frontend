import axios from "axios";
const instance = axios.create({
  baseURL: "https://usamaali.pythonanywhere.com/",
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('LoginStatus');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      localStorage.removeItem('departmentId');
    }
    return Promise.reject(error);
  }
);
export default instance;
