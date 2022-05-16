import React from "react";
import { StatusBar } from "expo-status-bar";

// globalstyles

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
} from "../../styles/global/styles.components";

// button styles

import {
  StyledButton,
  ButtonText,
  Line,
} from "../../common/CustomButton/Button";

// welcome.styles.js :

import { WelcomeContainer, WelcomImage, Avatar } from "./Welcom.styles";

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomImage
          source={require("../../assets/images/welcom_bg_image.jpg")}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome</PageTitle>
          <SubTitle welcome={true}>Avater!</SubTitle>
          <SubTitle welcome={true}>Mail@Mail.com</SubTitle>

          <Avatar source={require("../../assets/images/Avatar.png")} />
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
