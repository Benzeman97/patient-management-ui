import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer,TableHead,TableRow,Paper,IconButton,TextField, Button } from "@mui/material";
import { Delete, Edit, Save, Cancel } from "@mui/icons-material";
import { patients as mocksData } from "../mocks/patients";

const PatientTable = () => {

    const [patients, setPatients] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        fetchPatients();
      }, []);

      const fetchPatients = () => {
        setPatients(mocksData);
      };

      const handleDelete = (id) => {
        setPatients(patients.filter((p) => p.id !== id));
      };

      const handleEdit = (patient) => {
        setEditId(patient.id);
        setEditData({ ...patient });
      };

      const handleCancel = () => {
        setEditId(null);
        setEditData({});
      };

      const handleSave = () => {
        setPatients(
          patients.map((p) => (p.id === editId ? { ...editData } : p))
        );
        setEditId(null);
        setEditData({});
      };

      const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };

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
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="firstName"
                        value={editData.firstName}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.firstName
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="lastName"
                        value={editData.lastName}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.lastName
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="address"
                        value={editData.address}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.address
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="city"
                        value={editData.city}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.city
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="state"
                        value={editData.state}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.state
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="zipCode"
                        value={editData.zipCode}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.zipCode
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="phoneNumber"
                        value={editData.phoneNumber}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.phoneNumber
                    )}
                  </TableCell>
                  <TableCell>
                    {editId === patient.id ? (
                      <TextField
                        name="email"
                        value={editData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      patient.email
                    )}
                  </TableCell>
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
                        <IconButton color="primary" onClick={() => handleEdit(patient)}>
                          <Edit />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDelete(patient.id)}>
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