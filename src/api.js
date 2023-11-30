import axios from "axios";

const baseURL = "http://localhost:5000";  

const api = axios.create({
  baseURL,
});

export const getDesks = () => {
  return api.get("/get");
};

export const getDeskFiltered = (filters) => {
  return api.get("filtered", { params: filters });
};

export const getDeskInfo = (deskId) => {
    return api.get(`/desk/${deskId}`);
  };
  

