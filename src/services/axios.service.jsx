import axios from "axios";
const baseURL = "http://localhost:3000";

export const callGet = async (endpoint) => {
  const res = await axios.get(`${baseURL}/${endpoint}`);
  return res.data;
}

export const callPost = async (endpoint , data) => {
  const res = await axios.post(`${baseURL}/${endpoint}`, data);
  return res.data;
}

export const callDelete = async (endpoint) => {
  const res = await axios.delete(`${baseURL}/${endpoint}`);
  return res.data;
}