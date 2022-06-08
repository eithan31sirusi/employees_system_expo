import { useState } from "react";
import axios from "axios";
import { apiUrl, getheadersToken, tokenKey } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
// @desc    get all employees.
// @route   [GET] /api/employees
// @access  Private
// @payload [no payload]
export async function getAllEmployees() {
  try {
    // get all employee list - to the data variable with content-type in headers
    const { data } = await axios.get(`${apiUrl}/api/employees`, {
      getheadersToken,
    });

    // return all data outside
    return data;
  } catch (err) {
    if (err.response) {
      return err.response.data.message;
    }
  }
}

// @desc    get a single employee.
// @route   [GET] /api/employees/:id
// @access  Private
// @payload employeeID
export async function getEmployee(empId) {
  try {
    // get a single employee byid - to the data variable with content-type in headers
    const { data } = await axios.get(`${apiUrl}/api/employees/${empId}`, {
      headers,
    });

    // return all data outside
    return data;
  } catch (err) {
    if (err.response) {
      return err.response.data.message;
    }
  }
}

//create employee with getheadersToken headers
export async function createEmployee(employee) {
  const headers = await getheadersToken();

  const config = {
    method: "POST",
    url: `${apiUrl}/api/employees/createEmployee`,
    headers,
    data: { employee },
  };
  console.log(
    "config -----------------------------------------------------------------------------------",
    config
  );

  try {
    const { data } = await axios(config);
    return data;
  } catch (err) {
    if (err.response) {
      return console.log(err.response.data.message);
    }
  }
}

// create a new employee - to the data variable with content-type in headers

// return all data outside

/* export async function createEmployeeTEST(employee) {
  try {
    const token = await AsyncStorage.getItem(tokenKey);
    console.log(token, "token");
    // create a new employee - to the data variable with content-type in headers
    const { data } = await axios
      .post(`${apiUrl}/api/employees/createEmployee`, employee, {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        authorization: `Bearer ${token}`,
      })
      .then((res) => {
        console.log(res, "res");
        return res;
      });

    // return all data outside
    return data;
  } catch (err) {
    if (err.response) {
      return console.log(err.response.data.message);
    }
  }
} */

// @desc    create employee.
// @route   [POST] /api/employees/createEmployee
// @access  Private
// @payload employee: {firstName, lastName, phone, adress, roll}

// function to extract toekn from AsyncStorage with useEffect

// function to add impolyee with token from AsyncStorage
/* export async function createEmployee(employee) {
  try {
    let result = [];
    // # get the headers with token key from aSYNCstorage
    await getheadersToken().then((headers) => {
      result.push(headers);
    });
    // # create a new employee - to the data variable with content-type in headers
    const { data } = await axios.post(
      `${apiUrl}/api/employees/createEmployee`,
      employee,
      result[0]
    );
  } catch (err) {
    if (err.response) {
      return console.log(err.response.data.message);
    }
  }
} */

// @desc    update employee.
// @route   [PUT] /api/employees/updateEmployee
// @access  Private
// @payload employee: { firstName, lastName, phone, adress, roll} & :id
export async function editEmployee(employeeId, employee) {
  try {
    // get a single employee byid - to the data variable with content-type in headers
    const { data } = await axios.put(
      `${apiUrl}/api/employees/updateEmployee/${employeeId}`,
      employee,
      { headers }
    );

    // return all data outside.
    return data;
  } catch (err) {
    if (err.response) {
      return err.response.data.message;
    }
  }
}

// @desc    remove employee.
// @route   [DELETE] /api/employees/deleteEmployee
// @access  Private
// @payload employeeID
export async function deleteEmployee(empId) {
  try {
    // get a single employee byid - to the data variable with content-type in headers
    const { data } = await axios.delete(
      `${apiUrl}/api/employees/deleteEmployee/${empId}`,
      { headers }
    );

    // return all data outside
    return data;
  } catch (err) {
    if (err.response) {
      return err.response.data.message;
    }
  }
}
