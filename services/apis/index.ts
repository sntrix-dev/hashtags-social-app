import axios from "axios";

export const unAuthHttp = axios.create({
  baseURL: "https://hashtags-social-server.onrender.com/api",
});

export const authHttp = axios.create({
  baseURL: "https://hashtags-social-server.onrender.com/api",
});
