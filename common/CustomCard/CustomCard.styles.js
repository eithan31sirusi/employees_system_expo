import styled from "styled-components";
import { TouchableOpacity, View, Image, Text } from "react-native";

import { Colors } from "../../styles/global/styles.components";

export const CustomCardWrapper = styled.View`
  width: 100%;
  height: 200;
  padding: 17px;
  background-color: ${Colors.darkLighit};
  border-radius: 40;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

export const EmployeeImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50;
`;

export const EmployeeDetails = styled.View`
  margin-top: ${(50 - 22) / 2}px;
  flex-direction: column;
  flex-grow: 1;
  margin-horizontal: 20;
`;

export const EmployeeName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const DetailContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 12px;
  flex-direction: row;
`;

export const Detail = styled.View`
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
`;

export const DetailText = styled.Text`
  font-size: 18px;
  margin-left: -5.8px;
`;

export const DetaiStartingDate = styled.Text`
  font-size: 11px;
  color: ${Colors.brand};
  opacity: 0.4;
`;

export const DrawerButton = styled.View`
  margin-top: ${(50 - 30) / 2}px;
`;
