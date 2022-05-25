import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidationSchema } from "../../util/validate";

import { login } from "../../services/userService";

import MyTextInput from "../../common/CustomInput/MyTextInput";

// globalstyles

import {
  GlobalContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  PageTitleBG,
  PageLogoContainer,
  Colors,
} from "../../styles/global/styles.components";

// button styles

import {
  StyledButton,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../common/CustomButton/Button";

// keyboard avoid

import KeyboardAvoidingWarper from "../../common/KeyboardAvoiding/KeyboardAvoidingWarper";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

const SignIn = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  // hiding the label
  const [hideLabel, setHideLabel] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginValidationSchema),
  });
  const onSubmit = (data) => {
    console.log(data, "data");
    login(
      data.email,
      data.password,
      () => navigation.navigate("Employees"),
      // checks the AsyncStorage for the lang item and sets the language
      (errorMessage) => {
        const lan = AsyncStorage.getItem("lang");
      }
    );
  };

  // refs

  const renderLabel = useRef(false);

  const onfocus = () => {
    setHideLabel(false);
  };

  return (
    <KeyboardAvoidingWarper>
      <GlobalContainer topPart={true}>
        <StatusBar style="dark" />
        <PageTitleBG>
          <PageTitle>Sign In</PageTitle>
          <PageLogoContainer>
            <PageLogo source={require("../../assets/images/sign-in-img.png")} />
          </PageLogoContainer>
        </PageTitleBG>

        <InnerContainer>
          <SubTitle>Personal Details</SubTitle>
          <StyledFormArea>
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
                  keyboardType="email-address"
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

            <StyledButton onPress={handleSubmit(onSubmit)} marginTop="20">
              <ButtonText>Sign In</ButtonText>
            </StyledButton>
            <ExtraView>
              <TextLink
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <TextLinkContent>Signup</TextLinkContent>
              </TextLink>
              <ExtraText>Don't have an account already? </ExtraText>
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

export default SignIn;
