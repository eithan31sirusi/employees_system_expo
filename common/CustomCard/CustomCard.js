import { StyleSheet } from "react-native";

import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// CUSTOM SVG ICONS (created by me)

import ArrowICO from "../../assets/SVG/arrow.svg";
import BagICO from "../../assets/SVG/bagico.svg";
import NvigationICO from "../../assets/SVG/navigationico.svg";
import OpenmenueICO from "../../assets/SVG/openmenueico.svg";
import PhoneICO from "../../assets/SVG/phoneico.svg";

import {
  CustomCardWrapper,
  EmployeeImage,
  EmployeeDetails,
  EmployeeName,
  DetailContainer,
  Detail,
  DetailText,
  DetaiStartingDate,
  DrawerButton,
} from "./CustomCard.styles";

import { SvgContainer } from "../../styles/global/styles.components";

const CustomCard = () => {
  return (
    <CustomCardWrapper>
      <EmployeeImage source={require("../../assets/images/Avatar.png")} />
      <EmployeeDetails>
        <EmployeeName> Employee Name </EmployeeName>
        <DetailContainer>
          <SvgContainer>
            <BagICO />
          </SvgContainer>

          <Detail>
            <DetailText> HR </DetailText>
            <DetaiStartingDate>Starting Date: 2 Feb 2020</DetaiStartingDate>
          </Detail>
        </DetailContainer>
        <DetailContainer>
          <SvgContainer>
            <PhoneICO />
          </SvgContainer>

          <Detail>
            <DetailText>050 80380336</DetailText>
          </Detail>
        </DetailContainer>
        <DetailContainer>
          <SvgContainer>
            <NvigationICO />
          </SvgContainer>

          <Detail>
            <DetailText> Rothschild 22, Tel Aviv </DetailText>
          </Detail>
        </DetailContainer>
      </EmployeeDetails>
      <DrawerButton>
        <OpenmenueICO />
      </DrawerButton>
    </CustomCardWrapper>
  );
};

export default CustomCard;
