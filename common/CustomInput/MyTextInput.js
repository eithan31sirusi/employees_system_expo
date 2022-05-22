import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
} from "./myTextInput.styles";

import { Colors } from "../../styles/global/styles.components";

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  error,
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
      <View>
        {error && (
          <StyledInputLabel style={{ color: "red" }}>{error}</StyledInputLabel>
        )}
      </View>
    </>
  );
};

export default MyTextInput;
