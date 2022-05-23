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
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            //       validationSchema={validationSchema}
            onSubmit={(values) => {
              const { firstName, lastName, email, password } = values;
              console.log(values, "im line 84");
              registerUser({ firstName, lastName, email, password });
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
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={firstName}
                  onClick={onfocus}
                  error={touched.firstName && errors.firstName}
                />
                <MyTextInput
                  label="Last Name"
                  icon="person"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={lastName}
                  error={touched.lastName && errors.lastName}
                />
                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={email}
                  keyboardType="email-address"
                  style={{ marginBottom: 100 }}
                  error={touched.email && errors.email}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={password}
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
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={confirmPassword}
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
