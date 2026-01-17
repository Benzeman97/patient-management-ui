import React from "react";
import PatientTableDemo from "../components/PatientTableDemo";
import { Container, Typography } from "@mui/material";

const DemoDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Demo Patient Dashboard
      </Typography>
      <PatientTableDemo/>
    </Container>
  );
};

export default DemoDashboard;