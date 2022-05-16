import React from "react";
import { TouchableOpacity } from "react-native";

import CustomCard from "../../common/CustomCard/CustomCard";

import {
  GlobalContainer,
  PageTitleBG,
  PageTitle,
  SvgContainer,
} from "../../styles/global/styles.components";

import { PageContainer } from "./MangingEmployees.styles";

import AddICO from "../../assets/SVG/addico.svg";
import ArrowICO from "../../assets/SVG/arrow.svg";

const MangingEmployees = ({ navigation }) => {
  return (
    <>
      <GlobalContainer>
        <PageContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <SvgContainer>
              <ArrowICO />
            </SvgContainer>
          </TouchableOpacity>
          <PageTitle>Maniging Employees</PageTitle>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddEmployee");
            }}
          >
            <SvgContainer>
              <AddICO />
            </SvgContainer>
          </TouchableOpacity>
          <CustomCard />
        </PageContainer>
      </GlobalContainer>
    </>
  );
};

export default MangingEmployees;
