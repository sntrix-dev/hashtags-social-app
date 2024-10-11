import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    if (token !== null) {
      // Token retrieved successfully
      console.log(token);
      return token;
    }
    throw Error("Token not found");
  } catch (err) {
    throw err;
  }
};

export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("authToken", token);
    console.log("Token saved successfully");
  } catch (err) {
    console.error("Failed to save token", err);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("authToken");
    console.log("Token removed successfully");
  } catch (err) {
    console.error("Failed to remove token", err);
  }
};
