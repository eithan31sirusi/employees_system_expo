import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import asxios from "axios";

import CustomCard from "../../common/CustomCard/CustomCard";

import { getAllEmployees } from "../../services/employeeService";

import {
  GlobalContainer,
  PageTitleBG,
  PageTitle,
  SvgContainer,
} from "../../styles/global/styles.components";

import { PageContainer } from "./MangingEmployees.styles";

import AddICO from "../../assets/SVG/addico.svg";
import ArrowICO from "../../assets/SVG/arrow.svg";

const MangingEmployees = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((res) => setEmployees(res));
    console.log(employees);
  }, []);

  return (
    <>
      <GlobalContainer>
        <PageContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <SvgContainer>
              <ArrowICO />
            </SvgContainer>
          </TouchableOpacity>
          <PageTitle>Maniging Employees</PageTitle>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddEmployee");
            }}
          >
            <SvgContainer>
              <AddICO />
            </SvgContainer>
          </TouchableOpacity>
          {employees.map((employee) => (
            <CustomCard
              key={employee._id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              phone={employee.phone}
              address={employee.adress}
              roll={employee.roll}
              startingDate={employee.createdAt}
            />
          ))}
        </PageContainer>
      </GlobalContainer>
    </>
  );
};

export default MangingEmployees;
