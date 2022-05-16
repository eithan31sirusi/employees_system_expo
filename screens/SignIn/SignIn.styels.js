import { TextInput, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/global/styles.components";

import styled from "styled-components";

export const StyledTextInput = styled.TextInput`
  border-radius: 5px;
  border-bottom-width: 1px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${Colors.tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${Colors.tertiary};
  font-size: 13px;
  text-align: right;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 40px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 40px;
  position: absolute;
  z-index: 1;
`;
