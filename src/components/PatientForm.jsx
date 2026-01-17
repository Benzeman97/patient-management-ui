import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const emptyPatient = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  phoneNumber: "",
  email: ""
};

const PatientForm = ({ initialData = emptyPatient, onSubmit, onCancel }) => {
  const [patient, setPatient] = useState(initialData);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patient);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(emptyPatient).map((field) => (
        <TextField
          key={field}
          label={field}
          name={field}
          value={patient[field]}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
        />
      ))}

      <Box mt={2} display="flex" justifyContent="space-between">
        {onCancel && (
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </form>
  );
};

export default PatientForm;
