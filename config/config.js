import AsyncStorage from "@react-native-async-storage/async-storage";

// main switch - url / proxy.
export const apiUrl = "https://nodewithestephan.herokuapp.com";

// tokenkey
export const tokenKey = "userInfo";

// headers
export const headers = {
  "Content-Type": "application/json",
  "Accept-Encoding": "gzip, deflate, br",
  authorization: `Bearer ${AsyncStorage.getItem(tokenKey)}`,
};

export const getheadersToken = async () => {
  let headers;
  await AsyncStorage.getItem(tokenKey).then((token) => {
    const parsedToken = `${JSON.parse(token).token}`;
    headers = {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      authorization: "Bearer " + parsedToken,
    };
  });
  return headers;
};
