import React from "react";

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import Welcome from "../screens/Welcome/Welcome";
import MangingEmployees from "../screens/MangingEmployees/MangingEmployees";
import AddEmployee from "../screens/AddEmployee/AddEmployee";

import { Colors } from "../styles/global/styles.components";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "red",
          headerTransparent: true,
          headerTitle: "",
          headerBackVisible: false,
        }}
        initialRouteName="SignIn"
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen
          options={{ headerTintColor: Colors.primary }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="Employees" component={MangingEmployees} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
