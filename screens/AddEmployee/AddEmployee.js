import { useRef, useState } from "react";

import { View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerEmployeeSchema } from "../../util/validate";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { createEmployee } from "../../services/employeeService";

import MyTextInput from "../../common/CustomInput/MyTextInput.js";

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      adress: "",
      roll: "",
    },
    resolver: yupResolver(registerEmployeeSchema),
  });

  const onSubmit = (data) => {
    console.log(data, "addEmploye.js");
    createEmployee(data);
  };

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
                  label="Phone Number"
                  placeholder={"phone Number"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor={Colors.darkLighit}
                  keyboardType="number-pad"
                  errors={errors.phone?.message}
                />
              )}
              name="phone"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  label="Address"
                  placeholder={"Address"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor={Colors.darkLighit}
                  errors={errors.adress?.message}
                />
              )}
              name="adress"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <MyTextInput
                  label="Roll"
                  placeholder={"Roll"}
                  placeholderTextColor={Colors.darkLighit}
                  errors={errors.roll?.message}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="roll"
            />
            <StyledButton onPress={handleSubmit(onSubmit)} marginTop="20">
              <ButtonText>Add</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </GlobalContainer>
    </KeyboardAvoidingWarper>
  );
};

export default AddEmployee;
