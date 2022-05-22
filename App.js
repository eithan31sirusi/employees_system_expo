import React, { useEffect, useState } from "react";

import axios from "axios";

import { GlobalAppContainer } from "./App.styles";

//React native navigation
import RootStack from "./navigators/RootStack";

import MangingEmployees from "./screens/MangingEmployees/MangingEmployees";
import AddEmployee from "./screens/AddEmployee/AddEmployee";

export default function App() {
  // return <RootStack />;
  return <RootStack />;
}
