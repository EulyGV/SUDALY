import axios from "axios";

export const getList = () => {
  return axios
    .get("http://localhost:5000/api/enfermedad", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      console.debug(res.data);
      return res.data;
    });
  /*.then(data => {
      console.log(data);
    });*/
};

export const addToList = term => {
  return axios
    .post(
      "http://localhost:5000/api/task",
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete(`http://localhost:5000/api/task/${term}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      `http://localhost:5000/api/task/${id}`,
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
