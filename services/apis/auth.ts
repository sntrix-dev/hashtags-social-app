import axios from "axios";
import { Base_URL } from "@/constants";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(Base_URL + "/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await axios.post(Base_URL + "/auth/login", {
      usernameOrEmail,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const authorize = async (token: string) => {
  try {
    const response = await axios.get(Base_URL + "/auth/authorize", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
