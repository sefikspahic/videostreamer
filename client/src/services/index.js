import axios from "axios";

const URL = "http://localhost:3001/streams";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "authorization": "bearer skdsdkw9iqwiwjsdkjakdsa999"
};
const list = (callBack) => {
    axios
      .get(URL, { HEADERS })
      .then((response) => callBack(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const read = (id, callBack) => {
    axios
      .get(`${URL}/${id}`, { HEADERS })
      .then((response) => callBack(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const insert = (data, callBack) => {
    axios
      .post(URL, data, { HEADERS })
      .then((response) => callBack(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const update = (id, data, callBack) => {
    axios
      .put(`${URL}/${id}`, data, { HEADERS })
      .then((response) => callBack(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  
  const remove = (id, callBack) => {
    axios
      .delete(`${URL}/${id}`, { HEADERS })
      .then((response) => callBack(response.data))
      .catch((error) => {
        console.log(error);
      });
  };
  export { list, read, insert, remove, update };


