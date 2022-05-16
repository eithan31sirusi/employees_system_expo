import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

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
} from "../SignIn/SignIn.styels";

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

/* 
create a user


firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true,
       unique: true
   },
   userImage: {
        type: String,
        required: true
   },
   image: {
    type: String,
    required: false
  },
   password: {
       type: String,
       required: true
   },
   isAdmin: {
       type: Boolean,
       required: true,
       default: false
   },
   isEditor: {
       type: Boolean,
       required: true,
       default: false
   }
},
{
    timestamps: true
}) */

const SignUp = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(200, 0, 1));
  // actual date of birth to be sent to the server
  const [dob, setDob] = useState();

  // hiding the label

  const [hideLabel, setHideLabel] = useState(true);

  // refs

  const renderLabel = useRef(false);

  const onfocus = () => {
    setHideLabel(false);
  };

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
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              setTimeout(() => {
                navigation.navigate("SignIn");
              }, 2000);
              navigation.navigate("Welcome");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="First Name"
                  icon="person"
                  placeholder={"First Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  onClick={onfocus}
                />
                <MyTextInput
                  label="Last Name"
                  icon="person"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />
                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholder={"Enter your email"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  style={{ marginBottom: 100 }}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
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

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder={"* * * * * * * *"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
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
