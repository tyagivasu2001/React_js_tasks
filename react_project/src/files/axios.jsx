import axios from "axios";
import store from "../redux/store";
import { userAction } from "../redux/action";
const api = axios.create({
  baseURL: "https://reqres.in/api",
});
async function CallAPi(url, method, body = {}) {
  let response;
  switch (method) {
    // Post Api Case
    case "POST": {
      await api
        .post(url, body)
        .then((res) => {
          response = res;
        })

        .catch((error) => {
          response = error;
        });
      break;
    }
    // Get Api case
    case "GET": {
      await api
        .get(url, body)
        .then((res) => {
          response = res;
        })

        .catch((error) => {
          response = error;
        });
      break;
    }
    // put Api Method
    case "PUT": {
      await api
        .put(url, body)
        .then((res) => {
          response = res;
        })

        .catch((error) => {
          response = error;
        });
      break;
    }
  }
  return response;
}
api.interceptors.response.use(
  function (response) {
    store.dispatch(userAction(response.data));
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { CallAPi };
