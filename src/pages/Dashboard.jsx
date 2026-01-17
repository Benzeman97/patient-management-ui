import React from "react";
import PatientTable from "../components/PatientTable";
import PatientTableDemo from "../components/PatientTableDemo";
import { Container, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Patient Dashboard
      </Typography>
      <PatientTable/>
      {/* <PatientTableDemo/> Patient Table with mocks data */}
    </Container>
  );
};

export default Dashboard;