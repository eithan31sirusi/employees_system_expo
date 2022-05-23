import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const validationSchema = yup
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);

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
          <StyledFormArea>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon="person"
                  label="First Name"
                  placeholder={"First Name"}
                  placeholderTextColor={Colors.darkLighit}
                  errors={errors.firstName?.message}
                />
              )}
              name="firstName"
            />

            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon="person"
                  label="Last Name"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  errors={errors.lastName?.message}
                />
              )}
              name="lastName"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon="mail"
                  label="Email"
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  errors={errors.email?.message}
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon="lock"
                  label="Password"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  secureTextEntry={hidePassword}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  isPassword={true}
                  errors={errors.password?.message}
                />
              )}
              name="password"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  icon="lock"
                  label="Confirm Password"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  errors={errors.confirmPassword?.message}
                />
              )}
              name="confirmPassword"
            />

            <StyledButton onPress={handleSubmit(onSubmit)} marginTop="20">
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
              <ExtraText>Have an account? </ExtraText>
            </ExtraView>
            <ExtraView style={{ marginTop: 40 }}>
              <ExtraText style={{ borderBottomWidth: 1, fontSize: 14 }}>
                Our Terms Of Use An Privacy Policy
              </ExtraText>
            </ExtraView>
          </StyledFormArea>
        </InnerContainer>
      </GlobalContainer>
    </KeyboardAvoidingWarper>
  );
};

export default SignUp;
