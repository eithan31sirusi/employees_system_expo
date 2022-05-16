import styled from "styled-components";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#fff",
  secondary: "#cce1f1",
  tertiary: "#0d4d7e",
  dark: "#000",
  darkLighit: "#EDF1F7",
  bgdark: "#F6F7F8",
  brand: "#577BF9",
  green: "#4caf50",
  blue: "#2196f3",
};

const { primary, dark, darkLighit, bgdark } = Colors;

export const GlobalContainer = styled.View`
  flex: 1;

  padding-top: ${StatusBarHeight + 10}px;
  padding-bottom: 25%; /* not so sure about the that property, need to see it on other devices */
  background-color: ${primary};
`;

export const UpperPartContainer = styled.View`
  flex: 1;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const PageLogoContainer = styled.View`
  background-color: ${darkLighit};
  width: 125px;
  height: 125px;
  border-radius: 100px;
  align-items: center;
  justify-content: flex-end;
  top: 30%;
  left: 135px;
`;

export const PageLogo = styled.Image`
  width: 200px;
  height: 125px;
  resize-mode: contain;
`;

export const PageTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${dark};
  padding: 10px;
  padding-top: 10%;

  align-self: flex-end;

  ${(props) =>
    props.welcome &&
    `
font-size: 35px;
  `}
`;

export const SvgContainer = styled.View`
  width: 40px;
  height: 25px;
`;

export const PageTitleBG = styled.View`
  width: 100%;
  height: 28%;
  background-color: ${bgdark};
`;

export const SubTitle = styled.Text`
  padding-top: 25%;
  font-size: 12px;
  margin-bottom: 10px;
  color: ${dark};
  align-self: flex-end;
  ${(props) =>
    props.welcome &&
    `
  margin-bottom: 10px;
  font-weight: normal;
  `}
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;
