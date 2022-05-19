import React, { createContext, useState, useEffect } from "react";
import {
  getAllEmployees,
  createEmployee,
  editEmployee,
  deleteEmployee,
} from "../services/employeeService";
import { registerUser, loginUser } from "../services/userService";

const Context = createContext();

export function Provider(props) {
  // all Employees list.
  const [allEmployees, setAllEmployees] = useState([]);

  // add employee States
  const [addEmployeeForm, setAddEmployeeForm] = useState({ displayed: false });

  // edit employee States
  const [editEmployeeForm, setEditEmployeeForm] = useState({
    displayed: false,
    employee: {},
  });
  const [currentEmployee, setCurrentEmployee] = useState({});

  // mobile mode options [remove / edit].
  const [mobileOptions, setMobileOptions] = useState(false);

  // after change State
  const [isChange, setIsChange] = useState(false);

  // [GET] get all Employees from server.
  useEffect(() => {
    getAllEmployees().then((Employees) => setAllEmployees(Employees));
  }, [isChange]);

  // user
  const userSignUp = (user) => {
    registerUser(user).then((res) => {
      if (res && res.token) {
        // success
        window.location = "/";
      } else {
        // faild
        if (localStorage.getItem("Language") === "en") console.log(res);
        if (localStorage.getItem("Language") === "he")
          console.log("משתמש כבר קיים במערכת");
      }
    });
  };

  const userSignIn = (data) => {
    loginUser(data.email, data.password).then((res) => {
      if (res && res.token) {
        // success
        window.location = "/";
      } else {
        // faild
        if (localStorage.getItem("Language") === "en") console.log(res);
        if (localStorage.getItem("Language") === "he")
          console.log("חשבון לא נמצא, אימייל או הסיסמה שגויים");
      }
    });
  };

  // employees
  const getEmployeebyId = (empId) => {};
  const addEmployee = (newEmployee) => {
    createEmployee(newEmployee).then((res) => {
      setAddEmployeeForm(false);
      setIsChange(!isChange);
      // Send an indication to the user
      if (localStorage.getItem("Language") === "en")
        console.log("new employee added successfully.");
      if (localStorage.getItem("Language") === "he")
        console.log("עובד חדש נוסף בהצלחה.");
    });
  };
  const updateEmployee = (employeeId, updateEmployee) => {
    editEmployee(employeeId, updateEmployee).then((res) => {
      setEditEmployeeForm({ displayed: false, employee: {} });
      setIsChange(!isChange);
      // Send an indication to the user
      if (localStorage.getItem("Language") === "en")
        console.log("Employee updated successfully.");
      if (localStorage.getItem("Language") === "he")
        console.log("עובד עודכן בהצלחה.");
    });
  };
  const removeEmployee = (employeeId) => {
    deleteEmployee(employeeId).then((res) => {
      setIsChange(!isChange);
      // Send an indication to the user
      if (localStorage.getItem("Language") === "en")
        console.log("Employee removed successfully.");
      if (localStorage.getItem("Language") === "he")
        console.log("עובד הוסר בהצלחה.");
    });
  };

  return (
    <Context.Provider
      value={{
        // user:
        // employees:
        allEmployees,
        addEmployeeForm,
        setAddEmployeeForm,
        editEmployeeForm,
        currentEmployee,
        setCurrentEmployee,
        setEditEmployeeForm,
        // mobile mode
        mobileOptions,
        setMobileOptions,
        actions: {
          // user:
          userSignUp,
          userSignIn,
          // employees:
          getEmployeebyId,
          addEmployee,
          updateEmployee,
          removeEmployee,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export const Consumer = Context.Consumer;
