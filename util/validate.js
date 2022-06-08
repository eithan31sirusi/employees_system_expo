import * as yup from "yup";

export const formValidationHandler = (inp, value) => {
  // password validation:
  // min-length: 8 characters.
  // max-length: 20 characters.
  // must contain at least: one lower case, one upper case, one number.
  if (inp === "password" || inp === "confirmPassword") {
    const regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (regExpPassword.test(value) && value.length <= 20) {
      return "";
    } else {
      return "Password must be: 6-20, lower,upper case and number.";
    }
  }

  // email validation:
  // Must be an email format.
  if (inp === "email") {
    const regExpEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExpEmail.test(value)) {
      return "";
    } else {
      return "Email is invalid: must contain an email format.";
    }
  }

  // name validation:
  // Must be letters only.
  // min-length: 2 characters
  // max-length: 20 characters
  if (inp === "firstName" || inp === "lastName") {
    const regExpName = /^[A-Za-z]+$/;
    if (regExpName.test(value) && value.length >= 2 && value.length <= 20) {
      return "";
    } else {
      return "name must contain only letters, 2-20 length.";
    }
  }

  // phone number validation:
  // Must be an israeli phone format.
  if (inp === "phone") {
    const regExpPhoneNumber = /^05\d([-]{0,1})\d{7}$/;
    if (regExpPhoneNumber.test(value)) {
      return "";
    } else {
      return "Phone number is invalid";
    }
  }

  // Adress validation:
  // min-length: 2 characters.
  // max-length: 35 characters.
  if (inp === "adress") {
    if (value.length >= 2 && value.length <= 25) {
      return "";
    } else {
      return "Adress must contain min 2 max 35 characters";
    }
  }

  // Roll validation:
  // must be a value.
  if (inp === "roll") {
    if (value.length > 0) {
      return "";
    } else {
      return "Roll is invalid";
    }
  }
};

// validate the form using yup
export const registerValidationSchema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number"
      )
      .max(20, "Password must be less than 20 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
  })
  .required();

export const loginValidationSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, and One Number"
      )
      .max(20, "Password must be less than 20 characters"),
  })
  .required();

// validate for adding a new employee

export const registerEmployeeSchema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name must be less than 20 characters"),

    adress: yup
      .string()
      .required("Adress is required")
      .min(5, "Adress must be at least 5 characters")
      .max(50, "Adress must be less than 50 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .min(9, "Phone must be at least 9 characters")
      .max(10, "Phone must be less than 10 characters"),
    roll: yup
      .string()
      .required("Roll is required")
      .min(1, "Roll must be at least 1 characters")
      .max(20, "Roll must be less than 20 characters"),
  })
  .required();
