import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUrl, tokenKey, headers } from "../config/config";
import jwt_decode from "jwt-decode";

import * as Yup from "yup";

// @desc    Register a new user
// @route   [POST] /api/users/register
// @access  Public
// @payload user: { firstName, lastName, email, image, password }s

// function to register user & set token to AsyncStorage
export const registerUser = async (user, onCompleted, onError) => {
  try {
    const { data } = await axios.post(`${apiUrl}/api/users/register`, { user });

    await AsyncStorage.setItem(tokenKey, JSON.stringify(data));
    console.log("new user registered!", ` token key: ${tokenKey}`);
    onCompleted && onCompleted();
    return data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data.message, "something went wrong");
      return err.response.data.message;
    }
  }
};

// @desc    Login - Auth user & get token.
// @route   [POST] /api/users/login
// @access  Public
// @payload email, password
export async function loginUser(email, password) {
  try {
    // send email & password and get the response (user data + token).

    console.log(email, password, `${apiUrl}/api/users/login`);
    const { data, status } = await axios.post(`${apiUrl}/api/users/login`, {
      email,
      password,
    });
    console.log(data, status);

    // set the token in local storage (connect the user)
    await AsyncStorage.setItem(tokenKey, JSON.stringify(data));
    console.log(data, "axios data");
    // return user data outside
    return data;
  } catch (err) {
    console.log(err, "something went wrong");
    if (err.response) {
      return err.response.data.message;
    }
  }
}

export async function login(email, password, onCompleted, onError) {
  const data = JSON.stringify({
    email,
    password,
  });

  const config = {
    method: "post",
    url: "https://nodewithestephan.herokuapp.com/api/users/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const request = await axios(config);
    if (request.status !== 200) throw Error(request.statusText);
    await AsyncStorage.setItem(tokenKey, JSON.stringify(request.data));
    onCompleted && onCompleted();
    console.log(request.data, "axios data");
  } catch (err) {
    console.log(err, "something went wrong");
    if (err.response) {
      onError && onError(err.response.data.message);
    }
  }
}

// Logout user.
export async function logout() {
  // remove token from Localstorage
  await AsyncStorage.removeItem(tokenKey);
}

// check if token exist (in localStorage).
export async function getCurrentUser() {
  try {
    // try to take the token from localStorage
    const jwt = await AsyncStorage.getItem(tokenKey);

    // decode and return him
    return jwtDecode(JSON.parse(jwt).token);
  } catch (ex) {
    // if not exist return null
    return null;
  }
}

// extract user data from localStorage.
export async function userData() {
  try {
    // try to take the token from localStorage
    const dataStorage = await AsyncStorage.getItem(tokenKey);

    const jwt = JSON.parse(dataStorage).token;

    const data = jwt_decode(jwt).userData;

    const user = {
      _id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userImage: data.userImage,
      isAdmin: data.isAdmin,
      isEditor: data.isEditor,
    };

    return user;
  } catch (ex) {
    // if not exist return null
    return null;
  }
}

// @desc    Get user profile
// @route   [GET] /api/users/profile
// @access  Private
// @payload userId
export async function getUserProfile(userId) {
  try {
    // send id of the current user, and get all user in = data variable.
    const data = await axios.get(`${apiUrl}/api/users/profile/${userId}`, {
      headers,
    });

    console.log(data, "data function");
    // return all data outside
    return data;
  } catch (err) {
    if (err.response) {
      return err.response.data.message;
    }
  }
}

const userMethods = {
  registerUser,
  loginUser,
  getUserProfile,
  getCurrentUser,
  logout,
};

export default userMethods;
