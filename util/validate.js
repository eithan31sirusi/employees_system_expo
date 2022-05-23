import * as Yup from "yup";

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

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, "First name must be at least 3 characters")
    .max(20, "First name must be at most 20 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .trim()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "Last name must be at most 20 characters")
    .required("Last name is required"),

  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),

  /*   confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required(errorsMessages.required), */
});
