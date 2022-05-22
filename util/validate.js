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

const errorsMessages = {
  required: "This field is required",
  firstNameMsg: {
    minName: "First name must be at least ${min} characters",
    maxName: "First name  must be at most ${max} characters",
  },
  lastNameMsg: {
    minName: "Last name  must be at least ${min} characters",
    maxName: "Last name  must be at most ${max} characters",
  },
  emailMsg: {
    minEmail: "Email must be at least ${min} characters",
    maxEmail: "Email  must be at most ${max} characters",
  },
  passwordMsg: {
    minPassword: "Password must be at least ${min} characters",
    maxPassword: "Password  must be at most ${max} characters",
    invalidPassword: "Password must contain letters, numbers and @ only",
  },
};

const { firstNameMsg, lastNameMsg, emailMsg, confirmPasswordMsg } =
  errorsMessages;

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, firstNameMsg.minName)
    .max(20, firstNameMsg.maxName)
    .required(errorsMessages.required),

  lastName: Yup.string()
    .trim()
    .min(3, lastNameMsg.minName)
    .max(20, lastNameMsg.maxName)
    .required(errorsMessages.required),

  email: Yup.string()
    .email("Email is invalid")
    .required(errorsMessages.required),
  password: Yup.string()
    .trim()
    .min(3, firstNameMsg.minName)
    .max(20, firstNameMsg.maxName)
    .required(errorsMessages.required),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required(errorsMessages.required),
});
