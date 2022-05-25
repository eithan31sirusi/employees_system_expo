import AsyncStorage from "@react-native-async-storage/async-storage";

// main switch - url / proxy.
export const apiUrl = "https://nodewithestephan.herokuapp.com";

// tokenkey
export const tokenKey = "userInfo";

export const headers = {
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip, deflate, br",
  Authorization: `Bearer ${AsyncStorage.getItem(tokenKey)}`,
};
