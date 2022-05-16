import styled from "styled-components";
import { TouchableOpacity } from "react-native";

import { Colors } from "../../styles/global/styles.components";

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${Colors.brand};
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  width: 30%
    ${(props) =>
      props.google === true &&
      `
background-color: ${Colors.green};
flex-direction: row;
justify-content: center;
`};

  ${(props) => props.marginTop && `margin-top: ${props.marginTop}px`};
`;

export const ButtonText = styled.Text`
  color: ${Colors.primary};
  font-size: 16px;

  ${(props) =>
    props.google === true &&
    `
padding: 25px;
`}
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 16px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${Colors.brand};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${Colors.tertiary};
  font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${Colors.brand};
  font-size: 16px;
`;
