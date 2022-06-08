import { useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getheadersToken, tokenKey } from "./config/config";

//React native navigation
import RootStack from "./navigators/RootStack";
import { createEmployee, getToken } from "./services/employeeService";

export default function App() {
  useLayoutEffect(() => {
    const creasteemployee = async () => {
      const employee = {
        firstName: "test",
        lastName: "test@@@",
        phone: "056968574",
        adress: "tel aviv  10 shoshan",
        roll: "math",
      };
      await createEmployee(employee);
    };
    creasteemployee();
  }, []);

  return <RootStack />;
}
