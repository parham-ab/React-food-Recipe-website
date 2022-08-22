import axios from "axios";
axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};
export default http;
