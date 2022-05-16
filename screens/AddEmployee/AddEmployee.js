import { useRef, useState } from "react";

import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";

import { StyledTextInput, StyledInputLabel } from "./AddEmployee.styles.js";

import {
  GlobalContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  Colors,
  PageTitleBG,
  PageLogo,
  PageLogoContainer,
  SvgContainer,
} from "../../styles/global/styles.components";

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

import KeyboardAvoidingWarper from "../../common/KeyboardAvoiding/KeyboardAvoidingWarper";

import ArrowICO from "../../assets/SVG/arrow.svg";

const AddEmployee = ({ navigation }) => {
  // hiding the label

  const [hideLabel, setHideLabel] = useState(true);

  // refs

  const renderLabel = useRef(false);

  const onfocus = () => {
    setHideLabel(false);
  };

  // # i love Eithan!
  return (
    <KeyboardAvoidingWarper>
      <GlobalContainer topPart={true}>
        <StatusBar style="dark" />

        <View>
          <PageTitle>Add Employees</PageTitle>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack("Employees");
          }}
        >
          <SvgContainer>
            <ArrowICO />
          </SvgContainer>
        </TouchableOpacity>
        <InnerContainer>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              address: "",
              roll: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              /*       setTimeout(() => {
          navigation.navigate("SignIn");
        }, 2000);
        navigation.navigate("Welcome"); */
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="First Name"
                  placeholder={"First Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  onClick={onfocus}
                />
                <MyTextInput
                  label="Last Name"
                  placeholder={"Last Name"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                />

                <MyTextInput
                  label="Phone Number"
                  placeholder={"phone Number"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  keyboardType="number-pad"
                />
                <MyTextInput
                  label="Address"
                  placeholder={"Address"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                />
                <MyTextInput
                  label="roll"
                  placeholder={"roll"}
                  placeholderTextColor={Colors.darkLighit}
                  onChangeText={handleChange("roll")}
                  onBlur={handleBlur("roll")}
                  value={values.roll}
                />

                <StyledButton onPress={handleSubmit} marginTop="20">
                  <ButtonText>Add</ButtonText>
                </StyledButton>
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

  ...props
}) => {
  return (
    <View>
      <StyledInputLabel style={{ marginBottom: -10 }}>
        {" "}
        {label}{" "}
      </StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default AddEmployee;
