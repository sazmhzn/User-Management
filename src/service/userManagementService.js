import axios from "axios";

const BASE_URL = "http://localhost:4005/users";

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};

export const getUsersByID = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/${id}`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};


export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${BASE_URL}/${id}`)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    axios
    .put(`${BASE_URL}/${id}`, user)
    .then(() => {
     resolve(true)
    })
    .catch((err) => {
      reject(err);
    });

  });
};

export const searchByUsername = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}?username=${username}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}