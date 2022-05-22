import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

import { user } from "../../config/config";

import { validationSchema } from "../../util/validate";

import { login, registerUser } from "../../services/userService";

import MyTextInput from "../../common/CustomInput/MyTextInput";

// globalstyles

import {
  GlobalContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  Colors,
  PageLogo,
  PageLogoContainer,
} from "../../styles/global/styles.components";

// button styles

import {
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../common/CustomButton/Button";

import { SignUpTitleBG } from "./SignUp.styles";

// keyboard avoiding

import KeyboardAvoidingWarper from "../../common/KeyboardAvoiding/KeyboardAvoidingWarper";

const SignUp = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [userDate, setUserDate] = useState({});
  // actual date of birth to be sent to the server

  // hiding the label

  const [hideLabel, setHideLabel] = useState(true);

  // refs

  const renderLabel = useRef(false);

  const onfocus = () => {
    setHideLabel(false);
  };

  login();

  return (
    <KeyboardAvoidingWarper>
      <GlobalContainer topPart={true}>
        <StatusBar style="dark" />
        <SignUpTitleBG>
          <PageTitle>Sign Up</PageTitle>
          <PageLogoContainer>
            <PageLogo source={require("../../assets/images/sign-in-img.png")} />
          </PageLogoContainer>
        </SignUpTitleBG>

        <InnerContainer>
          <SubTitle>Personal Details</SubTitle>
          <Formik
            initialValues={{
              user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              },
            }}
            // validationSchema={validationSchema}
            onSubmit={(values = values.user) => {
              console.log(values, "im line 84");
              registerUser(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <StyledFormArea>
                <MyTextInput
                  label="First Name"
                  icon="person"
                  placeholder={"First Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.firstName")}
                  onBlur={handleBlur("user.firstName")}
                  value={values.firstName}
                  onClick={onfocus}
                  error={touched.firstName && errors.firstName}
                />
                <MyTextInput
                  label="Last Name"
                  icon="person"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.lastName")}
                  onBlur={handleBlur("user.lastName")}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName}
                />
                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.email")}
                  onBlur={handleBlur("user.email")}
                  value={values.email}
                  keyboardType="email-address"
                  style={{ marginBottom: 100 }}
                  error={touched.email && errors.email}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.password")}
                  onBlur={handleBlur("user.password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  error={touched.password && errors.password}
                />

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.confirmPassword")}
                  onBlur={handleBlur("user.confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                />

                <StyledButton onPress={handleSubmit} marginTop="20">
                  <ButtonText>Sign Up</ButtonText>
                </StyledButton>
                <ExtraView style={{ marginTop: 40 }}>
                  <TextLink
                    onPress={() => {
                      navigation.navigate("SignIn");
                    }}
                  >
                    <TextLinkContent>Sign In</TextLinkContent>
                  </TextLink>
                  <ExtraText>Have an account ? </ExtraText>
                </ExtraView>
                <ExtraView style={{ marginTop: 40 }}>
                  <ExtraText style={{ borderBottomWidth: 1, fontSize: 14 }}>
                    Our Terms Of Use An Privacy Policy
                  </ExtraText>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </GlobalContainer>
    </KeyboardAvoidingWarper>
  );
};

export default SignUp;
