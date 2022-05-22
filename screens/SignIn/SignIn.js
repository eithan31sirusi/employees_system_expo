import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

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

import axios from "axios";

const SignIn = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
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
          <SubTitle>Account SignIn</SubTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              setTimeout(() => {
                navigation.navigate("Employees");
              }, 100);
              navigation.navigate("Welcome");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label={"Email"}
                  icon={"mail"}
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  label={"Password"}
                  icon={"lock"}
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "flex-end",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginBottom: 50,
                  }}
                >
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>SignIn</ButtonText>
                  </StyledButton>
                  <TextLinkContent
                    style={{
                      borderBottomWidth: 1,
                      borderColor: Colors.brand,
                      marginBottom: 25,
                    }}
                  >
                    Forgot password?
                  </TextLinkContent>
                </View>
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
            )}
          </Formik>
        </InnerContainer>
      </GlobalContainer>
    </KeyboardAvoidingWarper>
  );
};

export default SignIn;
