import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

import { login, registerUser } from "../../services/userService";

// icons

import { Octicons, Ionicons } from "@expo/vector-icons";

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

// component styles

import {
  LeftIcon,
  StyledTextInput,
  RightIcon,
  StyledInputLabel,
} from "./SignUp.styles";

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
              // an object structure the API expects
              user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              },
            }}
            onSubmit={(values = values.user) => {
              console.log(values);
              registerUser(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="First Name"
                  icon="person"
                  placeholder={"First Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.firstName")}
                  onBlur={handleBlur("user.firstName")}
                  value={values.user.firstName}
                  onClick={onfocus}
                />
                <MyTextInput
                  label="Last Name"
                  icon="person"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.lastName")}
                  onBlur={handleBlur("user.lastName")}
                  value={values.user.lastName}
                />
                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.email")}
                  onBlur={handleBlur("user.email")}
                  value={values.user.email}
                  keyboardType="email-address"
                  style={{ marginBottom: 100 }}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.password")}
                  onBlur={handleBlur("user.password")}
                  value={values.user.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                {/*                 <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("user.confirmPassword")}
                  onBlur={handleBlur("user.confirmPassword")}
                  value={values.user.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
 */}
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

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledInputLabel style={{ marginBottom: -10 }}>
        {" "}
        {label}{" "}
      </StyledInputLabel>
      <StyledTextInput {...props} />

      {isPassword && (
        <LeftIcon>
          <Ionicons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={20}
            color={Colors.dark}
          />
        </LeftIcon>
      )}
    </View>
  );
};

export default SignUp;
