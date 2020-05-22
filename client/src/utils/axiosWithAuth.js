import axios from "axios";

export const axiosWithAuth = () => {
  //get token from localStorage
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token,
    },
  });
};
