import React from "react";

import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";

const KeyboardAvoidingWarper = (props) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableNativeFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWarper;
