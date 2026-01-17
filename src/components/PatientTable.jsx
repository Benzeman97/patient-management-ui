import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, CircularProgress } from "@mui/material";
import { Delete, Edit, Save, Cancel } from "@mui/icons-material";
import { getPatients, updatePatient, deletePatient } from "../api/patientApi";

const PatientTable = () => {

    const [patients, setPatients] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
          setLoading(true);
          const response = await getPatients();
          setPatients(response.data);
        } catch (error) {
          console.error("Failed to fetch patients", error);
        } finally {
          setLoading(false);
        }
      };

      const handleEdit = (patient) => {
        setEditId(patient.id);
        setEditData({ ...patient });
      };

      const handleCancel = () => {
        setEditId(null);
        setEditData({});
      };

      const handleSave = async () => {
        try {
          await updatePatient(editId, editData);
          setPatients((prev) =>
            prev.map((p) => (p.id === editId ? editData : p))
          );
          handleCancel();
        } catch (error) {
          console.error("Failed to update patient", error);
        }
      };

      const handleDelete = async (id) => {
        try {
          await deletePatient(id);
          setPatients((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
          console.error("Failed to delete patient", error);
        }
      };

      const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };

      const renderCell = (patient, field) =>
      editId === patient.id ? (
        <TextField
          size="small"
          name={field}
          value={editData[field] || ""}
          onChange={handleChange}
        />
      ) : (
        patient[field]
      );

      if (loading) {
        return <CircularProgress />;
      }

      return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{renderCell(patient, "firstName")}</TableCell>
                  <TableCell>{renderCell(patient, "lastName")}</TableCell>
                  <TableCell>{renderCell(patient, "address")}</TableCell>
                  <TableCell>{renderCell(patient, "city")}</TableCell>
                  <TableCell>{renderCell(patient, "state")}</TableCell>
                  <TableCell>{renderCell(patient, "zipCode")}</TableCell>
                  <TableCell>{renderCell(patient, "phoneNumber")}</TableCell>
                  <TableCell>{renderCell(patient, "email")}</TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <>
                        <IconButton color="primary" onClick={handleSave}>
                          <Save />
                        </IconButton>
                        <IconButton color="secondary" onClick={handleCancel}>
                          <Cancel />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton onClick={() => handleEdit(patient)}>
                          <Edit />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(patient.id)}
                        >
                          <Delete />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };
    
export default PatientTable;