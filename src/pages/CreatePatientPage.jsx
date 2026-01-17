import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../api/patientApi";
import PatientForm from "../components/PatientForm";

const CreatePatientPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await createPatient(data);
      navigate("/");
    } catch (error) {
      console.error("Failed to create patient", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Add New Patient
        </Typography>

        <PatientForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
      </Paper>
    </Container>
  );
};

export default CreatePatientPage;
