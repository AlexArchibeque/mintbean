import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const login = async (userData) => {
  return await axios.post("/api/user/login", userData);
};

export const register = (userData) => {
  return axios.post("/api/user/register", userData);
};

export const logout = (userData) => {
  return axios.post("/api/user/logout", userData);
};
