import styled from "styled-components";
import { InnerContainer } from "../../styles/global/styles.components";

import { Colors } from "../../styles/global/styles.components";

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${Colors.secondary};
  margin-bottom: 10px;
  margin-top: 10px;
  resize-mode: cover;
`;

export const WelcomImage = styled.Image`
  height: 50%;
  min-width: 100%;
  resize-mode: contain;
`;
