import { View, Text } from "react-native";

import {
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
} from "./myTextInput.styles";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../styles/global/styles.components";

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  errors,
  ...props
}) => {
  return (
    <>
      <View>
        <StyledInputLabel style={{ marginBottom: -10 }}>
          {" "}
          {label}{" "}
        </StyledInputLabel>
        <StyledTextInput {...props} />

        {isPassword && (
          <LeftIcon>
            <Ionicons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? "md-eye-off" : "md-eye"}
              size={20}
              color={Colors.dark}
            />
          </LeftIcon>
        )}
      </View>
      <Text style={{ color: "red" }}>{errors}</Text>
    </>
  );
};

export default MyTextInput;
